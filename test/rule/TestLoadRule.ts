import { expect } from 'chai';
import mockFS from 'mock-fs';
import { LogLevel } from 'noicejs';
import { spy, stub } from 'sinon';

import { loadRuleFiles, loadRuleModules, loadRulePaths, loadRuleSource } from '../../src/rule';
import { SchemaRule } from '../../src/rule/SchemaRule';
import { describeLeaks, itLeaks } from '../helpers/async';
import { testContext } from '../helpers/context';

const EXAMPLE_EMPTY = '{name: foo, definitions: {}, rules: []}';
const EXAMPLE_RULES = `{
  name: foo,
  definitions: {},
  rules: [{
    name: test,
    desc: test-rule,
    level: info,
    tags: [],
    check: {}
  }]
}`;

describeLeaks('load rule file helper', async () => {
  itLeaks('should add schema', async () => {
    mockFS({
      test: EXAMPLE_EMPTY,
    });

    const ctx = testContext();
    const schemaSpy = spy(ctx, 'addSchema');

    const rules = await loadRuleFiles([
      'test',
    ], ctx);

    mockFS.restore();

    expect(schemaSpy).to.have.been.calledWith('foo');
    expect(rules.length).to.equal(0);
  });

  itLeaks('should load rules', async () => {
    mockFS({
      test: EXAMPLE_RULES,
    });

    const ctx = testContext();
    const rules = await loadRuleFiles([
      'test',
    ], ctx);

    mockFS.restore();

    expect(rules.length).to.equal(1);
  });

  itLeaks('should validate rule files', async () => {
    mockFS({
      test: `{
        name: foo,
        definitions: [],
        rules: {}
      }`
    });

    const ctx = testContext();
    const rules = await loadRuleFiles([
      'test',
    ], ctx);

    mockFS.restore();

    expect(rules.length).to.equal(0);
  });
});

describeLeaks('load rule path helper', async () => {
  itLeaks('should only load matching rule files', async () => {
    mockFS({
      test: {
        'bin.nope': '{}', // will parse but throw on lack of rules
        'foo.yml': EXAMPLE_RULES,
      },
    });

    const ctx = testContext();
    const rules = await loadRulePaths([
      'test',
    ], ctx);

    mockFS.restore();

    expect(rules.length).to.equal(1);
  });

  itLeaks('should recursively load rule files', async () => {
    mockFS({
      test: {
        'bar-dir': {
          'bar.yml': EXAMPLE_RULES.replace(/foo/g, 'bar'),
        },
        'bin.nope': '{}', // will parse but throw on lack of rules
        'some-dir': {
          'foo.yml': EXAMPLE_RULES,
        },
      },
    });

    const ctx = testContext();
    const rules = await loadRulePaths([
      'test',
    ], ctx);

    mockFS.restore();

    const EXPECTED_RULES = 2;
    expect(rules.length).to.equal(EXPECTED_RULES);
  });
});

describeLeaks('load rule module helper', async () => {
  itLeaks('should load rule modules', async () => {
    const ctx = testContext();
    const requireStub = stub().withArgs('test').returns({
      name: 'test',
      rules: [{
        check: {},
        desc: 'testing rule',
        level: 'info',
        name: 'test-rule',
        tags: [],
      }],
      /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    }) as any;
    const rules = await loadRuleModules(['test'], ctx, requireStub);
    expect(rules.length).to.equal(1);
  });

  itLeaks('should handle errors loading rule modules', async () => {
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    const requireStub = stub().throws(new Error('could not load this module')) as any;
    const ctx = testContext();

    return expect(loadRuleModules(['test'], ctx, requireStub)).to.eventually.deep.equal([]);
  });

  itLeaks('should validate rule module exports', async () => {
    const requireStub = stub().returns({
      name: 'test-rules',
      rules: {},
      /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    }) as any;
    const ctx = testContext();

    return expect(loadRuleModules(['test'], ctx, requireStub)).to.eventually.deep.equal([]);
  });

  itLeaks('should load module definitions', async () => {
    const requireStub = stub().returns({
      definitions: {
        foo: {
          type: 'string',
        },
      },
      name: 'test-rules',
      rules: [],
      /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    }) as any;
    const ctx = testContext();

    await loadRuleModules(['test'], ctx, requireStub);
    const schema = ctx.compile({
      $ref: 'test-rules#/definitions/foo',
    });

    const NUMBER_VALUE = 2;
    expect(schema(NUMBER_VALUE)).to.equal(false);
    expect(schema('foo')).to.equal(true);
  });

  itLeaks('should not instantiate class instances', async () => {
    class TestRule extends SchemaRule {}
    const ctx = testContext();

    const rules = await loadRuleSource({
      name: 'test',
      rules: [new TestRule({
        check: {},
        desc: 'test',
        level: LogLevel.Info,
        name: 'test',
        select: '$',
        tags: [],
      })],
    }, ctx);
    expect(rules[0]).to.be.an.instanceOf(TestRule);
  });
});
