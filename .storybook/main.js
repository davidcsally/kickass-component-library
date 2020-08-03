module.exports = {
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y/preset',
    '@storybook/addon-knobs/preset',
    '@storybook/addon-viewport/register',
  ],
  stories: [
    './**/*.stories.mdx',
    '../src/**/*.stories.tsx',
  ],
};
