import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';


import dashboardReducer from './dashboard/dashboardReducer'
import tasksReducer from './tasks/tasksReducer'

export const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    tasks: tasksReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));
export default store