module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          // '@src': './src',
          '@navigators': './src/navigators',
          '@components': './src/components',
          '@screens': './src/screens',
          '@shared': './src/shared',
          '@config': './src/config',
          '@assets': './src/assets',
          '@reduxCore': './src/reduxCore',
        },
      },
    ],
  ],
};
