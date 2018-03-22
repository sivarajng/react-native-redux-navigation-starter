import { createStore, applyMiddleware } from 'redux';
import { createReactNavigationReduxMiddleware, } from 'react-navigation-redux-helpers';
import thunk from 'redux-thunk';

import getRootReducer from './rootReducer';

// Note: createReactNavigationReduxMiddleware must be run before createReduxBoundAddListener
const middleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
);

export default function getStore(navReducer) {
    const store = createStore(
        getRootReducer(navReducer),
        undefined,
        applyMiddleware(middleware, thunk)
    );
    return store;
}