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

project.synth();
