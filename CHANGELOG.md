# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.7.1](https://github.com/ssube/salty-dog/compare/v0.7.0...v0.7.1) (2019-11-01)


### Bug Fixes

* **build:** publish npm packages to npmjs.org ([b9819b8](https://github.com/ssube/salty-dog/commit/b9819b8))
* **docs:** update readme tags ([e7d1f9f](https://github.com/ssube/salty-dog/commit/e7d1f9f))
* **rule:** log and apply mutation when rule has > 0 diffs ([63b6e48](https://github.com/ssube/salty-dog/commit/63b6e48))

## [0.7.0](https://github.com/ssube/salty-dog/compare/v0.6.1...v0.7.0) (2019-11-01)


### Bug Fixes

* **build:** add tslint back to rollup ([6aa1cb5](https://github.com/ssube/salty-dog/commit/6aa1cb5))
* **build:** pin docker/dind images ([070a623](https://github.com/ssube/salty-dog/commit/070a623))
* **build:** replace app with package in version data ([c76781b](https://github.com/ssube/salty-dog/commit/c76781b))
* **build:** set a default image arch, do not suffix those tags ([37b1aae](https://github.com/ssube/salty-dog/commit/37b1aae))
* **build:** switch to relative imports ([0ab6de7](https://github.com/ssube/salty-dog/commit/0ab6de7))
* **build:** switch to relative imports ([45a53a9](https://github.com/ssube/salty-dog/commit/45a53a9))
* **build:** tag images with architecture ([d2c50a1](https://github.com/ssube/salty-dog/commit/d2c50a1))
* **build:** use npm mirror ([c5aeac0](https://github.com/ssube/salty-dog/commit/c5aeac0))
* **config:** pass include errors as nested cause ([6ab7d9c](https://github.com/ssube/salty-dog/commit/6ab7d9c))
* **config/include:** handle more errors in include ([4a05fcd](https://github.com/ssube/salty-dog/commit/4a05fcd))
* **docs:** disambiguate build/install headers ([47fe866](https://github.com/ssube/salty-dog/commit/47fe866))
* **docs:** fix license section ([100f9ce](https://github.com/ssube/salty-dog/commit/100f9ce))
* **rule:** print failure message when errors are present ([5160eaa](https://github.com/ssube/salty-dog/commit/5160eaa))
* **scripts:** make example tests more shell compatible ([#106](https://github.com/ssube/salty-dog/issues/106)) ([1304cf5](https://github.com/ssube/salty-dog/commit/1304cf5))
* **test:** set mutate option for test contexts ([72920b2](https://github.com/ssube/salty-dog/commit/72920b2))
* **tests:** add async helpers for tests, wrap async tests, make chai external ([0eb9d51](https://github.com/ssube/salty-dog/commit/0eb9d51))
* **tests:** always print actual exit status of test scenarios ([77c1d0c](https://github.com/ssube/salty-dog/commit/77c1d0c))
* **tests:** begin testing friendly errors, other errors (exceptions) ([a13a909](https://github.com/ssube/salty-dog/commit/a13a909))
* **tests:** begin testing rules ([013b1d7](https://github.com/ssube/salty-dog/commit/013b1d7))
* star import ([93f4917](https://github.com/ssube/salty-dog/commit/93f4917))


### Features

* **build:** add alpine image jobs ([017dfd7](https://github.com/ssube/salty-dog/commit/017dfd7))
* include data path in error messages ([67a61f6](https://github.com/ssube/salty-dog/commit/67a61f6))
* **docs:** add fossa badge ([7aaaf29](https://github.com/ssube/salty-dog/commit/7aaaf29))
* **test:** add nyc coverage ([e627a51](https://github.com/ssube/salty-dog/commit/e627a51))
* **test:** add source map support ([489ca33](https://github.com/ssube/salty-dog/commit/489ca33))
* **visitor:** improve error messages ([#20](https://github.com/ssube/salty-dog/issues/20)) ([c9c1a58](https://github.com/ssube/salty-dog/commit/c9c1a58))
* make fix mode mutations and defaults independent ([30ab437](https://github.com/ssube/salty-dog/commit/30ab437))

### [0.6.1](https://github.com/ssube/salty-dog/compare/v0.6.0...v0.6.1) (2019-07-04)


### Bug Fixes

* use global yargs to fix bundle ([23b791f](https://github.com/ssube/salty-dog/commit/23b791f))



## [0.6.0](https://github.com/ssube/salty-dog/compare/v0.5.0...v0.6.0) (2019-07-04)


### Bug Fixes

* **docs:** remove container and package scopes ([fff8155](https://github.com/ssube/salty-dog/commit/fff8155))
* print completion or rules before attempting to load source ([8b9d84e](https://github.com/ssube/salty-dog/commit/8b9d84e))
* wrap yargs and exit after completion ([8b8d669](https://github.com/ssube/salty-dog/commit/8b8d669))
* **build:** test rules during other tests ([3e3cc7d](https://github.com/ssube/salty-dog/commit/3e3cc7d))
* **container:** use git tags as-is ([a72597d](https://github.com/ssube/salty-dog/commit/a72597d))
* **test:** use ref config for example tests ([25d967b](https://github.com/ssube/salty-dog/commit/25d967b))


### Build System

* split jobs to fix image tagging ([c438a8b](https://github.com/ssube/salty-dog/commit/c438a8b))


### Features

* add command completion ([39c0e4b](https://github.com/ssube/salty-dog/commit/39c0e4b))
* **test:** add pragmas to examples, add example tests to build ([b7d0b43](https://github.com/ssube/salty-dog/commit/b7d0b43))
* **test:** rules and tags pragmas ([cce8671](https://github.com/ssube/salty-dog/commit/cce8671))
* **test:** start adding pragma-based tests to examples ([0c7d442](https://github.com/ssube/salty-dog/commit/0c7d442))
* add default rule selector ([15933ba](https://github.com/ssube/salty-dog/commit/15933ba))
* **rules/grafana:** add rule to ensure single env, add staging alert rule ([229a0c8](https://github.com/ssube/salty-dog/commit/229a0c8))


### BREAKING CHANGES

* the `--mode` option has been replaced by a positional
command, but the options and defaults are unchanged.



## [0.5.0](///compare/v0.4.1...v0.5.0) (2019-07-01)


### Bug Fixes

* make -v an alias for --version ([5f5b993](https://github.com/ssube/salty-dog/commit/5f5b993))
* **build:** actually fix mdl config ([675b200](https://github.com/ssube/salty-dog/commit/675b200))
* **build:** add rpt2 cache to cache rather than artifacts ([0996390](https://github.com/ssube/salty-dog/commit/0996390))
* **build:** artifact all output ([9eacea6](https://github.com/ssube/salty-dog/commit/9eacea6))
* **build:** attempt to fix mdl config ([24ebc9e](https://github.com/ssube/salty-dog/commit/24ebc9e))
* **build:** clean up output directory between builds ([30ea7d6](https://github.com/ssube/salty-dog/commit/30ea7d6))
* **build:** move sinon to vendor chunk ([d02b223](https://github.com/ssube/salty-dog/commit/d02b223))
* **build:** run generic build target ([c41d9d0](https://github.com/ssube/salty-dog/commit/c41d9d0))
* **build:** split index into its own chunk ([8351fff](https://github.com/ssube/salty-dog/commit/8351fff))
* **container:** set up as cli tool within container ([ef2a9c9](https://github.com/ssube/salty-dog/commit/ef2a9c9))
* **rules/tsconfig:** correctly enforce lib/target for esnext ([62d58fe](https://github.com/ssube/salty-dog/commit/62d58fe))


### Build System

* image build and global install targets ([8368271](https://github.com/ssube/salty-dog/commit/8368271))
* remove license from chunks ([ac86e69](https://github.com/ssube/salty-dog/commit/ac86e69))
* remove redundant tsconfig options ([37c0dbb](https://github.com/ssube/salty-dog/commit/37c0dbb))
* **package:** set module entry point to main bundle ([7e2d20e](https://github.com/ssube/salty-dog/commit/7e2d20e))
* split vendor chunk ([96d15bb](https://github.com/ssube/salty-dog/commit/96d15bb))


### Features

* **rules:** add tsconfig rules ([27843c6](https://github.com/ssube/salty-dog/commit/27843c6))
* **rules:** kubernetes rule to require labels ([aa350cc](https://github.com/ssube/salty-dog/commit/aa350cc))
* **rules/tsconfig:** check for suppressed errors ([d11f3d6](https://github.com/ssube/salty-dog/commit/d11f3d6))
* **test:** begin testing visitor ([31d1977](https://github.com/ssube/salty-dog/commit/31d1977))
* configure renovate for semantic commits ([fbcc143](https://github.com/ssube/salty-dog/commit/fbcc143))
* extend renovate presets ([2d0b7ad](https://github.com/ssube/salty-dog/commit/2d0b7ad))



### [0.4.1](https://github.com/ssube/salty-dog/compare/v0.4.0...v0.4.1) (2019-06-29)


### Build System

* include license, set binary, fix deps ([7fce611](https://github.com/ssube/salty-dog/commit/7fce611))



## [0.4.0](https://github.com/ssube/salty-dog/compare/v0.3.0...v0.4.0) (2019-06-29)


### Bug Fixes

* **build:** correct runner in version info ([e1d5144](https://github.com/ssube/salty-dog/commit/e1d5144))
* **build:** validate rules during build ([0129221](https://github.com/ssube/salty-dog/commit/0129221))
* **docker:** move rules to app dir, tweak layer order ([b6fe129](https://github.com/ssube/salty-dog/commit/b6fe129))
* **rules:** check numeric cpu limits ([aec3ea9](https://github.com/ssube/salty-dog/commit/aec3ea9))
* **rules:** ensure low CPU limits are non-0 ([97d5c7a](https://github.com/ssube/salty-dog/commit/97d5c7a))
* **rules:** remove test default ([e02cd67](https://github.com/ssube/salty-dog/commit/e02cd67))
* **rules:** validate source names ([4112a1d](https://github.com/ssube/salty-dog/commit/4112a1d))
* **scripts:** use project path for status ([cd3be38](https://github.com/ssube/salty-dog/commit/cd3be38))
* apply schema changes to data ([03b3bfa](https://github.com/ssube/salty-dog/commit/03b3bfa))
* delimit output documents ([79c7e71](https://github.com/ssube/salty-dog/commit/79c7e71))
* docker examples, container output, misc lint ([670e45a](https://github.com/ssube/salty-dog/commit/670e45a))
* list modes in help ([1f1faf8](https://github.com/ssube/salty-dog/commit/1f1faf8))
* use consistent option names in source ([c09d135](https://github.com/ssube/salty-dog/commit/c09d135))


### Build System

* add tests ([35781f8](https://github.com/ssube/salty-dog/commit/35781f8))
* omit cache from npm bundle ([c753d30](https://github.com/ssube/salty-dog/commit/c753d30))
* update image to node 11 ([e7df382](https://github.com/ssube/salty-dog/commit/e7df382))


### Features

* rule selector helper ([a630571](https://github.com/ssube/salty-dog/commit/a630571))
* **rules:** add example grafana rule ([f2579d4](https://github.com/ssube/salty-dog/commit/f2579d4))
* add cli help (fixes [#7](https://github.com/ssube/salty-dog/issues/7)) ([721f85f](https://github.com/ssube/salty-dog/commit/721f85f))
* add rules to image, doc ([e358857](https://github.com/ssube/salty-dog/commit/e358857))
* display diff when rule modifies data (fixes [#3](https://github.com/ssube/salty-dog/issues/3)) ([6f15d1c](https://github.com/ssube/salty-dog/commit/6f15d1c))
* fix mode and type coercion ([719954e](https://github.com/ssube/salty-dog/commit/719954e))
* group config & rules in help ([da42749](https://github.com/ssube/salty-dog/commit/da42749))
* list mode, fix version option ([8efbd99](https://github.com/ssube/salty-dog/commit/8efbd99))
* load definitions from rules (fixes [#2](https://github.com/ssube/salty-dog/issues/2)) ([9eb41fc](https://github.com/ssube/salty-dog/commit/9eb41fc))
* support multiple documents per source ([#11](https://github.com/ssube/salty-dog/issues/11)) ([2bd60c8](https://github.com/ssube/salty-dog/commit/2bd60c8))


### Tests

* **rule:** begin testing resolver ([caca3fc](https://github.com/ssube/salty-dog/commit/caca3fc))
* add em ([1931659](https://github.com/ssube/salty-dog/commit/1931659))


### BREAKING CHANGES

* adds a required `name` property (string) at the
top level of each `--rules` file, used as the schema name



## 0.3.0 (2019-06-16)


### Bug Fixes

* **source:** wait for output write to finish ([72bedc8](https://github.com/ssube/salty-dog/commit/72bedc8))
* refactor parser into a single class ([29f372d](https://github.com/ssube/salty-dog/commit/29f372d))
* **build:** add github status script, remove coverage jobs ([5498236](https://github.com/ssube/salty-dog/commit/5498236))
* **build:** fix artifacts ([f61b568](https://github.com/ssube/salty-dog/commit/f61b568))
* **build:** fix node target ([a1cf4cc](https://github.com/ssube/salty-dog/commit/a1cf4cc))
* **docker:** add stderr config ([8d87332](https://github.com/ssube/salty-dog/commit/8d87332))
* **docker:** only copy bundle into image ([db47b3e](https://github.com/ssube/salty-dog/commit/db47b3e))
* **rules:** make filter optional in meta-rules ([52095ed](https://github.com/ssube/salty-dog/commit/52095ed))
* limit error count ([b1ba817](https://github.com/ssube/salty-dog/commit/b1ba817))
* only print parsed args ([4a124eb](https://github.com/ssube/salty-dog/commit/4a124eb))


### Build System

* add and document target to validate rules ([1b42c26](https://github.com/ssube/salty-dog/commit/1b42c26))
* add CI ([cec3576](https://github.com/ssube/salty-dog/commit/cec3576))
* add dockerfile ([172efb9](https://github.com/ssube/salty-dog/commit/172efb9))
* fix main, do not bundle source map or vendor source dir ([da85fb3](https://github.com/ssube/salty-dog/commit/da85fb3))
* fix version info ([0f78fa4](https://github.com/ssube/salty-dog/commit/0f78fa4))
* use example stderr config when validating rules ([731c87e](https://github.com/ssube/salty-dog/commit/731c87e))


### Features

* **parser:** serialize data via parser ([ab40330](https://github.com/ssube/salty-dog/commit/ab40330))
* add modes, basic readme ([5e05c72](https://github.com/ssube/salty-dog/commit/5e05c72))
* clean rules up with a bit of a visitor pattern ([9a25fb9](https://github.com/ssube/salty-dog/commit/9a25fb9))
* **rules:** add filename as tag ([0876e72](https://github.com/ssube/salty-dog/commit/0876e72))
* make node selectors work ([282e93d](https://github.com/ssube/salty-dog/commit/282e93d))
* make rule filters optional (fixes [#4](https://github.com/ssube/salty-dog/issues/4)) ([9a7f882](https://github.com/ssube/salty-dog/commit/9a7f882))
* write to stdout or file ([a68975c](https://github.com/ssube/salty-dog/commit/a68975c))
* **config:** stream type for bunyan config ([24f91aa](https://github.com/ssube/salty-dog/commit/24f91aa))
* count errors, improve error messaging ([f50f2f1](https://github.com/ssube/salty-dog/commit/f50f2f1))
* project, build, and bundle ([8be80c3](https://github.com/ssube/salty-dog/commit/8be80c3))
* run schema, do everything but select nodes ([29aaa93](https://github.com/ssube/salty-dog/commit/29aaa93))
* working bundle, example config ([e8173d4](https://github.com/ssube/salty-dog/commit/e8173d4))
