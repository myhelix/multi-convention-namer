const { JsiiProject, TextFile, FileBase } = require('projen');

const project = new JsiiProject({
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
  repository: 'github:myhelix/multi-convention-namer',

  // JSII options
  compat: true,
  catalog: true,
  releaseToNpm: true,
  //publishToGo: { moduleName: 'multi-convention-namer-go' }, // Note GO_GITHUB_TOKEN in repo secrets

  // packageName: undefined,            /* The "name" in package.json. */
  // projectType: ProjectType.UNKNOWN,  /* Which type of project this is (library/app). */
  // releaseWorkflow: undefined,        /* Define a GitHub workflow for releasing from "main" when new versions are bumped. */
});

// include prettier
project.eslint.config.extends = [...project.eslint.config.extends, 'plugin:prettier/recommended'];
const prettierrc = new TextFile(project, '.prettierrc.js', {
  lines: [
    `// ${FileBase.PROJEN_MARKER}`,
    'module.exports =  {',
    'semi:  true,',
    "trailingComma:  'all',",
    'singleQuote:  true,',
    'printWidth:  120,',
    'tabWidth:  2,',
    '};',
  ],
});

project.synth();
