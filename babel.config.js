module.exports = {
  presets: [
    // preset-env is a "smart" transformer
    '@babel/preset-env',
    // preset-react handles jsx transformation
    '@babel/preset-react',
    // preset-typescript will transform our .ts and .tsx files
    '@babel/preset-typescript',
  ],
  plugins: [
    // might not be necessary, lets you define classes with auto-bound methods
    '@babel/plugin-proposal-class-properties',
    // transforms { a, b, ...rest } syntax
    '@babel/plugin-proposal-object-rest-spread',
    // useful plugin for styled-components :)
    'babel-plugin-styled-components',
  ],
}
