# React-App-Implementing

## (ساختن قالب پروژه بسیار مهمه)

### قالب اول
![Screenshot (25)](https://user-images.githubusercontent.com/53907570/89124336-7dba8400-d4eb-11ea-9809-00d06072d154.png)

### قالب دوم
![Screenshot (26)](https://user-images.githubusercontent.com/53907570/89124380-c6723d00-d4eb-11ea-8ab7-0f720862ea88.png)

### قالب سوم
`index.html`
![Screenshot (27)](https://user-images.githubusercontent.com/53907570/89124514-ddfdf580-d4ec-11ea-8c0d-eaa798972d02.png)
as you can see here I just changed the body `dir='rtl'`

### قالب چهارم
`manifest.json`
![Screenshot (28)](https://user-images.githubusercontent.com/53907570/89124569-4e0c7b80-d4ed-11ea-8df7-708a8da452bf.png)

### eslint.rc
```js
{
  "extends": [
    "airbnb",
    "airbnb/hooks",
    "plugin:prettier/recommended",
    "prettier/react",
    "prettier/standard"
  ],
  "plugins": ["prettier"],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018
  },
  "rules": {
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [".js", ".jsx"]
      }
    ],
    "react/prop-types": 0,
    "import/imports-first": ["error", "absolute-first"],
    "import/newline-after-import": "error",
    "import/prefer-default-export": "off",
    "react/jsx-props-no-spreading": "off"
  },
  "globals": {
    "window": true,
    "document": true,
    "localStorage": true,
    "FormData": true,
    "FileReader": true,
    "Blob": true,
    "navigator": true,
    "fetch": true
  }
}
```

### .gitignore
```js
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
```

### .prettierrc
```js
{
  "singleQuote": true,
  "semi": false,
  "endOfLine": "auto",
  "trailingComma": "none"
}
```

### package.json
```js
{
  "name": "goodreads",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@material-ui/core": "^4.11.0",
    "@material-ui/icons": "^4.9.1",
    "@material-ui/lab": "^4.0.0-alpha.52",
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.5.0",
    "@testing-library/user-event": "^7.2.1",
    "jss-rtl": "^0.3.0",
    "moment-jalaali": "^0.9.2",
    "prettier": "^2.0.5",
    "react": "^16.13.1",
    "react-code-input": "^3.9.0",
    "react-dom": "^16.13.1",
    "react-ga": "^2.7.0",
    "react-helmet": "^6.0.0",
    "react-material-ui-carousel": "^1.5.1",
    "react-router-dom": "^5.2.0",
    "react-scripts": "3.4.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "eslint": "^6.8.0",
    "eslint-config-airbnb": "^18.1.0",
    "eslint-config-prettier": "^6.11.0",
    "eslint-plugin-import": "^2.20.1",
    "eslint-plugin-jsx-a11y": "^6.2.3",
    "eslint-plugin-prettier": "^3.1.3",
    "eslint-plugin-react": "^7.19.0",
    "eslint-plugin-react-hooks": "^2.5.0"
  }
}
```

### Now the most important section `src` folder

#### قالب فولدر `src`
![Screenshot (29)](https://user-images.githubusercontent.com/53907570/89124800-fcfd8700-d4ee-11ea-99c1-a2ccc20cf387.png)
