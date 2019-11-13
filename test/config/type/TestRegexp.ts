import { expect } from 'chai';

import { regexpType } from '../../../src/config/type/Regexp';
import { describeLeaks, itLeaks } from '../../helpers/async';

describeLeaks('regexp config type', async () => {
  itLeaks('match slashed strings', async () => {
    expect(regexpType.resolve('/foo/')).to.equal(true);
  });

  itLeaks('should match flags', async () => {
    const regexp: RegExp = regexpType.construct('/foo/g');
    expect(regexp.flags).to.equal('g');
  });

  itLeaks('should not match bare strings', async () => {
    expect(regexpType.resolve('foo')).to.equal(false);
  });

  itLeaks('should not match invalid flags', async () => {
    expect(regexpType.resolve('/foo/notrealflags')).to.equal(false);
  });

  itLeaks('should not match regex embedded in a longer string', async () => {
    expect(regexpType.resolve('some/regex/with-padding')).to.equal(false);
  });
});
