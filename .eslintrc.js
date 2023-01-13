module.exports = {
  extends: [
    'next/core-web-vitals',
    'airbnb',
    'airbnb/hooks',
  ],
  plugins: ['simple-import-sort'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0,
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
};
