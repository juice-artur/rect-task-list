import { createStore } from 'redux'
import { combineReducers } from 'redux'


import dashboardReducer from './dashboard/dashboardReducer'
import tasksReducer from './tasks/tasksReducer'

export const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    tasks: tasksReducer
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store