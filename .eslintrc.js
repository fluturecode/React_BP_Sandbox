define(function (module) {
    module.exports = {
        parser: '@typescript-eslint/parser',
        extends: [
            'eslint:recommended',
            'plugin:react/recommended',
            'plugin:@typescript-eslint/recommended',
            'prettier/@typescript-eslint',
            'plugin:prettier/recommended',
        ],
        parserOptions: {
            ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
            sourceType: 'module', // Allows for the use of imports
            ecmaFeatures: {
                jsx: true, // Allows for the parsing of JSX
            },
        },
        rules: {
            'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
        },
        settings: {
            react: {
                version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
            },
        },
        plugins: ['react', '@typescript-eslint', 'prettier'],
        env: {
            browser: true,
            jest: true,
        },
    };
});
