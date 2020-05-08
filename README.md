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
    - `mapStateToProps` : takes state and return an obejct for the component to use
    - `mapDispatchToProps`

```
Store sets the state ->
Event or user interaction happens ->
An action creator is called and dispatches an action ->
Actions tell us about the changes from the event ->
Reducers handle those actions and replace the store accordingly.
```

- When you have several `reducers` ==> make new dir `reducers`
    - for `authReducer`
    ```js
    const initialState = {}
    const authReducer = (state = initialState, action) => {
        // where you manipulate `state
        return state
    }
    // combineReducers in rootReducer.js
    import { combineReducer } from 'redux';
    const rootReducer = combineReducers({
        auth: authReducer,
        project: projectReducer
    });
    export default rootReducer
    ```

- HOC `connect()` : pass mapStateToProps as a first argument (mapDispatchToProps is second argument)
    ```js
    const DashBoard = props => {
        console.log(props) // initial state from projectReducer
        return (
            <ProjectList projects={props.projects} />
        )
    }
    const mapStateToProps = state => {
        return {
            projects: state.project.pojects
        }
    }
    export default connect(mapStateToProps)(Dashboard)
    ```

- `asyn Redux` : able to receive/update/delete data from database
    - use `middleware` Thunk between DISPATCH and REDUCER : `action creator` 
    - Thunk: halts the dispatch // perform asyn request // resume dispatch
    - install
    ```
    npm install redux-thunk
    ```
    - use thunk inside of store
    ```js
    // index.js
    import { createStore, applyMiddleware } from 'redux';
    import thunk from 'redux-thunk';
    const store = createStore(rootReducer, applyMiddleware(thunk));
    ```
    - mkdir `actions` ==> `projectActions.js
        - due to Thunk, now we can return a function insideof action creator // normally (without Thunk), it would return an object with `TYPE`, `PAYLOAD` stuffs
    ```js
    export const createProject = project => {
        return (dispatch, getState) => {
            // make aysnc call to database - will use `firebase`
            dispatch({ type: 'CREATE_PROJECT', project });
        }
    }
    // in child component where you want to use data fro 'action creator'
    const mapDispatchToProps = dispatch => {
        return {
            createProject: project => dispatch(createProject(project))
        }
    }
    // projectReducer
    const projectReducer = (state = initialState, action) => {
        switch (action.type) {
            case 'CREATE_PROJECT':
                console.log('created project', action.project)
        }
        return state
    }
    ```

- Firebase
    - Install
    ```
    npm install firebase
    ```
    - Add firebase to your web app : mkdir `./src/config/fbConfig.js`
    ```js
    import firebase from 'firebase/app';
    import 'firebase/firesotre'; // database
    import 'firebase/auth'; // auth
    // initialize firebase : will be available firebase website once you create a project there
    var config = {
        apikey: '',
        authDoamin: '',
        databaseURL: '',
        projectID: '',
        storageBucket: '',
        messagingSenderId: ''
    }
    firebase.initializaApp(config);
    export default firebase;
    ```
    - Develop - Database - start a collection - document
        - create field with all data you want like (field, type, value)
        - 1 Doc : 1 datapoint
    - Connect firestore data to Redux
        - start from actionCreator
        ```
        npm install react-redux-firebase redux-firestore
        ```
        ```js
        // index.js
        import { reduxFirestore, getFirestore, createFirestoreInstance } from "redux-firestore";
        import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
        import fbConfig from "./config/fbConfig";
        import firebase from "firebase/app";

        const store = createStore(rootReducer,
            compose(
                applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
                reduxFirestore(fbConfig)
            )
        ); // compose from 'redux' will combine many stores like combinedRedux
        const rrfProps = {
            firebase,
            config: fbConfig,
            dispatch: store.dispatch,
            createFirestoreInstance
        };
        ReactDOM.render(
            <Provider store={store}>
                <ReactReduxFirebaseProvider {...rrfProps}>
                    <App />
                </ReactReduxFirebaseProvider>
            </Provider>,
            document.getElementById("root")
        );

        // actionCreator
        export const createProject = project => {
            return (dispatch, getState, { getFirestore, getFirebase }) => {
                // make aysnc call to database - will use `firebase`
                const firestore = getFirestore();
                firestore.collection('projects').add({ 
                    ...project, // can add more fields likd author info
                }).then(() => { // adding collection will take time so use `then()`
                    dispatch({ type: 'CREATE_PROJECT', project });
                }).catch(err => {
                    dispatch({ type: 'CREATE_PROJECT_ERROR', err }); // add this type to Reducer under `switch`
                })
            }
        }
        ```
    - Retrieving data from firebase db collection
        - add firestoreReducer