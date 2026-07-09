const { cdk, javascript } = require('projen');

const project = new cdk.JsiiProject({
  name: 'multi-convention-namer',
  description: 'A string manipulation library to facilitate dealing with multiple naming conventions',
  authorName: 'Andrew Hammond',
  authorEmail: 'andrew.george.hammond@gmail.com',
  copyrightOwner: 'Helix OpCo LLC',
  copyrightPeriod: '2021',

  devDeps: ['esbuild', 'eslint-config-prettier', 'eslint-plugin-prettier', 'jsii-release', 'prettier'],

  pullRequestTemplateContents: [
    '---',
    'By submitting this pull request, I confirm that my contribution is made under the terms of the Apache 2.0 license.',
  ],

  // docgen: true,
  codeCov: true,
  defaultReleaseBranch: 'main',
  repository: 'https://github.com/myhelix/multi-convention-namer',

  // JSII options
  compat: true,
  catalog: true,
  releaseToNpm: true,
  //publishToGo: { moduleName: 'multi-convention-namer-go' }, // Note GO_GITHUB_TOKEN in repo secrets
  python: {
    distName: 'multi-convention-namer',
    module: 'multi_convention_namer',
  },

  prettier: true,
  prettierOptions: {
    settings: {
      printWidth: 120,
      singleQuote: true,
      trailingComma: javascript.TrailingComma.ALL,
    },
  },
});

// Jest's v8 coverage reporter (via v8-to-istanbul) pulls in source-map@0.7.3, whose
// read-wasm.js takes the *browser* branch whenever a global `fetch` exists. Node >=18
// has global fetch, so under Node 22 CI it demands SourceMapConsumer.initialize() and
// crashes the coverage reporter with "must provide the URL of lib/mappings.wasm".
// 0.7.4 detects the browser via `window` instead, fixing it under Node. Scoped to
// v8-to-istanbul so the top-level source-map@0.6.1 (different, sync API) is untouched.
project.package.addPackageResolutions('v8-to-istanbul/source-map@0.7.4');

// The lockfile pins eslint@8.14.0, but @typescript-eslint@7 requires eslint@^8.56.0.
// On a clean install the eslint plugin fails to load ("Class extends value undefined").
// Pin to the final 8.x so the plugin's peer is satisfied without a major eslint bump.
project.package.addPackageResolutions('eslint@8.57.1');

project.synth();
