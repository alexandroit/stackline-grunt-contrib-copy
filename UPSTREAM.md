# Upstream review

Exact source: [grunt-contrib-copy@1.0.0](https://www.npmjs.com/package/grunt-contrib-copy/v/1.0.0), [85150c7bfef1279911cb844eefdcd7b2c31ad9d1](https://github.com/gruntjs/grunt-contrib-copy/commit/85150c7bfef1279911cb844eefdcd7b2c31ad9d1). Runtime task files match the integrity-checked upstream npm tarball byte-for-byte. Original authors and license are retained.

## Issue review (2026-09-29)

- [#300: Dotfile glob behavior](https://github.com/gruntjs/grunt-contrib-copy/issues/300): Preserve Grunt glob behavior. Upstream copy fixtures cover structures, flattening, processing, permissions and timestamps.
- [#308: futime EPERM](https://github.com/gruntjs/grunt-contrib-copy/issues/308): Filesystem permissions are environment-specific. Preserve the original timestamp option and execute actual filesystem checks.
- [#165: Overwrite filtering](https://github.com/gruntjs/grunt-contrib-copy/issues/165): Keep the existing file filters and copy semantics; no new overwrite policy is imposed.

No issue response or upstream contact was made. These are scoped compatibility decisions, not claims that every reported issue is fixed.

## Development maintenance

The original Grunt task fixtures and Nodeunit assertion bodies run unchanged. A small Node assert adapter preserves expected assertion counts and asynchronous done timeouts; it replaces obsolete Nodeunit/TAP dependencies. Obsolete JSHint and release-only grunt-contrib-internal tooling were removed. The current Grunt runner is development-only; package engines and runtime dependencies retain the upstream declarations. The same full fixture suite runs against an installed package archive.

Run `npm ci --ignore-scripts`, `npm test`, `npm run test:package`, and `npm audit --audit-level=low`. GitHub CI and CodeQL gate exact artifact publication with provenance and immutable release evidence.
