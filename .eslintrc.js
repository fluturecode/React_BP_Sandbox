{
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
                ecmaVersion: 2018,
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
            },
            rules: {
                'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
            },
            settings: {
                react: {
                    version: 'detect',
                },
            },
            plugins: ['react', '@typescript-eslint', 'prettier', 'react-hooks'],
            env: {
                browser: true,
                jest: true,
            },
        };
    });
}
