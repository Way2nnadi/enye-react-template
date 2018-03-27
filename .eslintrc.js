module.exports = {
    "env": {
        "es6": true,
        "browser": true,
        "node": true,
    },
    "parserOptions": {
        "ecmaVersion": 7,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
        }
    },
    "plugins": ["react"],
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "rules": {
        "comma-dangle" : 0,
    },
};
