import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import Reactotron from 'reactotron-react-native';
import thunk from 'redux-thunk';
import {
  createReactNavigationReduxMiddleware,
  createNavigationReducer
} from 'react-navigation-redux-helpers';
import { fetchMiddleware, configureMergeState } from 'redux-recompose';

import Navigator from '../app/screens';

import auth from './auth/reducer';

const nav = createNavigationReducer(Navigator);

configureMergeState((state, diff) => state.merge(diff));

const reducers = combineReducers({
  auth,
  nav
});

const middlewares = [];
const enhancers = [];

/* ------------- React Navigation Middleware ------------- */
middlewares.push(createReactNavigationReduxMiddleware(state => state.nav));

/* ------------- Thunk Middleware ------------- */
middlewares.push(thunk);

/* ------------- Redux-Recompose Middleware ------------- */
middlewares.push(fetchMiddleware);

/* ------------- Assemble Middleware ------------- */
enhancers.push(applyMiddleware(...middlewares));

// in dev mode, we'll create the store through Reactotron
const store = createStore(
  reducers,
  __DEV__
    ? compose(
        ...enhancers,
        Reactotron.createEnhancer()
      )
    : compose(...enhancers)
);

export default store;
