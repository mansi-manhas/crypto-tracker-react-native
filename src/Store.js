import { Platform } from 'react-native' /* for our remote dev tools */
import {
    createStore, /* is needed to creat an initial store, this is then passed to the  <Provider> */
    applyMiddleware, /* for applying the middleware */
    compose /* composes function from right to left */
    /* functional programming utility ~ apply several store enhancers in a row */
} from 'redux' //redux lib
//import devTools from 'remote-redux-devtools' //redux debugging middleware
import promise from 'redux-promise' //allows us to resolve async actions with redux
import thunk from 'redux-thunk' //lets us return a function inside an action instead of an object
import logger from 'redux-logger' //logs the previous state, action and the next state in console
/* logger must be the last middleware in the chain, otherwise it will log thunk, promise (not actual actions)*/

import RootReducer from './Reducers';

const middleware = applyMiddleware(thunk, promise, logger);

const Store = createStore(
    RootReducer,
    compose(
        middleware
    )
    /* we pass our middleware and devTools as the arguments */
);
/* 
        createStore accepts - reducer, preloaded state, enhancer
        this createStore is passed to the PROVIDER (react-redux) as an argument
        Provider is used to glue react & redux
*/

export default Store;

/**
 * Package.json
 * scripts -
 *     //"postinstall": "remotedev-debugger --hostname localhost --port 5678 --injectserver"
 * 
 * devDependencies
 * 
 * //"remote-redux-devtools": "^0.5.16",
    //"remotedev-rn-debugger": "^0.8.4"



    middle ware,
    devTools({
            name: Platform.OS,
            hostname: 'localhost',
            port: 5678
        }),
 */