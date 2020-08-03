module.exports = {
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y/preset',
    '@storybook/addon-knobs/preset',
  ],
  stories: [
    './**/*.stories.mdx',
    '../src/**/*.stories.tsx',
  ],
};
