# fcc-07-random-quote

## Install 
### Create React App
```
npx create-react-app my-app || npm install -g create-react-app ||
cd my-app
npm start
```
```
yarn create react-app my-app
cd my-app
yarn start
```

### Axios
```
yarn add axios || npm install axios
```

### Font awesome for twitter icon
- install font awesome
    ```
    npm i --save @fortawesome/fontawesome-svg-core
    npm i --save @fortawesome/free-solid-svg-icons
    npm i --save @fortawesome/free-brands-svg-icons // for social media icon
    npm i --save @fortawesome/react-fontawesome
    ```
- import 
    ```js
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import {  faTwitter } from '@fortawesome/free-brands-svg-icons';
    ```
- use the icon
    ```js
    <FontAwesomeIcon 
        icon={faFacebookF} 
        size="3x"
        color="anycolor" />
    ```

### Share the quote Twitter
- this link will take users to their Twitter accounts with tweet box opend
```html
<a href="https://twitter.com/intent/tweet?text="></a>
```
- this link will include the quote and author from our `Random Quote Machine
```js
<a id='tweet-quote' href={`https://twitter.com/intent/tweet?text=${quote} ${author}`} target='_blank'></a>
```

## React App [Deployment](https://create-react-app.dev/docs/deployment)
### Github Pages
- Step 1: add `homepage` to `package.json`
```js
"homepage": "https://myusername.github.io/my-app",
```

- Step 2: install `gh-pages` and add `deploy` to `scripts` in `package.json`
    - for gh-pages
    ```
    npm install --save gh-pages
    yarn add gh-pages
    ```
    - `package.json`
    ```js
    "scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
    ```

- Step 3: Deploy the site by runnin `npm run deploy`
```
npm run deploy
```

- Step 4: For a project page, ensure your project’s settings use gh-pages


## Redux
### Redux
- A predictable state management library for JS application and the most popular `state` container for React
- The core principles
    1. The `Store` : everything that changes within your application is represented by a single SJ `object` known as the store
        - the store contains our state
    2. Application state is `immutable` : when the app state changes, we clone the state object (in store), modify the clone, and `replace` the original state with the new copy
        - never mutate the original object
        - never write to our store object
    3. `Pure functions` change our state
        - pure functions take in some state and description of what changes took place and return a copy of our state

### React-Redux
- We need a second helper package (`React-Redux`) that will allow us to string together Redux within React because Recus is astandalone library.
    - can also write Redux apps with Angular, Ember, jQuery, or vanilla JS

- Install
```
npm install react-redux redux
```

- Set up the `store`
    - `createStore` : take in a single `reducer` that represents the state 
    ```js
    import { createStore } from 'redux';
    const store = createStore(reducer);
    ```
    - `Provider` : makes the `store` available to any nested component that have been wrapped in the `connect()`
        - will wrap our application and pass the store (just built) as a prop
    ```js
    import { Provider } from 'react-redux';
    <Provider store={store}>
        <App/>
    </Provider>
    ```
    - `connect()` : higher order component
    - `mapStateToProps` 

```
Store sets the state ->
Event or user interaction happens ->
An action creator is called and dispatches an action ->
Actions tell us about the changes from the event ->
Reducers handle those actions and replace the store accordingly.
```