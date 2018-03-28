# enye-react-template
This is a boilerplate code to help you focus on developing your react app without worrying too much about the infrastructural parts of building web applications.

## Setup Development Environment
Make sure that you have the latest version of node/npm
```
npm install -g npm
```

Install eslint in atom code editor. From `git bash`, run the below code:
```
apm install linter-eslint
```
* restart your atom if you had it open
* atom will ask you to install other dependencies (i.e `linter`, `linter-ui-default` etc.), just keep clicking `yes`.
> `eslint` main fucntion is to alert you if your javascript isn't written correctly

## Application Commands
If you look in the `package.json`, there are a 5 commands under `scripts`. You only really need to run `npm run dev`.
This will do three things, It will:
1. Build your application into a bundle that can be found at `build/bundle.js`
2. Start your express server.
3. Watch for any code change that you make and restart the browser with the new code.
> contains live reload - which means when you add new code, the browser will automatically update

## Writing Application Code
The `app` folder is where you will be writing most of the code for your application.
* If you open the `app` folder you will see a `components` folder. The components folder provides you an example to writing your own React code.

> If you need to add additional routes to your application, do so in the `router.js`;
