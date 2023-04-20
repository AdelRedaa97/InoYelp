module.exports = {
  root: true,
  extends: '@react-native-community',
  overrides: [
    {
      files: ['**/*.tsx', '**/*.ts'],
      rules: {
        'react-hooks/exhaustive-deps': 'off',
        'react/no-unstable-nested-components': 'off',
      },
    },
  ],
};
