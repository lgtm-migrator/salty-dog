# node options
NODE_CMD ?= $(shell env node)
NODE_DEBUG ?= --inspect-brk=$(DEBUG_BIND):$(DEBUG_PORT) --nolazy

export NODE_VERSION := $(shell node -v 2>/dev/null || echo "none")
export PACKAGE_NAME := $(shell jq -r '.name' package.json)
export PACKAGE_VERSION := $(shell jq -r '.version' package.json)

# directory targets
node_modules: deps

out: build

# phony targets
build: ## build the app
build: node_modules
	yarn tsc
	cat $(TARGET_PATH)/src/version.js | envsubst > $(TARGET_PATH)/src/version-out.js
	mv $(TARGET_PATH)/src/version-out.js $(TARGET_PATH)/src/version.js

bundle: build
	node config/esbuild.mjs

clean-deps: ## clean up the node_modules directory
	rm -rf node_modules/

COVER_ARGS := --all \
	--check-coverage \
	--exclude ".eslintrc.js" \
	--exclude "bundle/**" \
	--exclude "config/**" \
	--exclude "docs/**" \
	--exclude "examples/**" \
	--exclude "out/bundle/**" \
	--exclude "out/coverage/**" \
	--exclude "vendor/**" \
	--reporter=text-summary \
	--reporter=lcov \
	--report-dir=out/coverage

cover: ## run tests with coverage
cover: node_modules out
	yarn c8 $(COVER_ARGS) yarn mocha $(MOCHA_ARGS) "out/**/Test*.js"

deps:
	yarn

docs:
	yarn api-extractor run -c config/api-extractor.json
	yarn api-documenter markdown -i out/api -o docs/api

lint: ## run eslint
lint: node_modules
	yarn eslint src/ --ext .ts,.tsx

MOCHA_ARGS := --async-only \
	--check-leaks \
	--forbid-only \
	--require source-map-support \
	--require out/test/setup.js \
	--recursive \
	--sort

test: ## run tests
test: node_modules out
	yarn mocha $(MOCHA_ARGS) "out/**/Test*.js"

yarn-global: ## install bundle as a global tool
	yarn global add file:$(ROOT_PATH)

yarn-update: ## check yarn for outdated packages
	yarn upgrade-interactive --latest
