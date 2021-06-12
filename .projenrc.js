const { TypeScriptProject, TextFile, FileBase, License } = require('projen');

const project = new TypeScriptProject({
  name: 'namer',
  description: 'A string manipulation library to facilitate dealing with multiple naming conventions',
  authorName: 'Andrew Hammond',
  authorEmail: 'andrew.george.hammond@gmail.com',
  stability: 'experimental',

  deps: ['@aws-crypto/client-node', '@types/aws-lambda', '@types/uuid', 'axios', 'aws-sdk', 'zlib', 'uuid'],
  devDeps: ['esbuild', 'eslint-config-prettier', 'eslint-plugin-prettier', 'jsii-release', 'prettier'],

  pullRequestTemplateContents: [
    '---',
    'By submitting this pull request, I confirm that my contribution is made under the terms of the Apache 2.0 license.',
  ],

  releaseToNpm: true,
  codeCov: true,
  defaultReleaseBranch: 'main',



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
