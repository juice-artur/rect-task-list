import taskApi from "../../Api/TaskListApi";

export const DASHBOARD_LOADED = 'dashboard/loaded'
export const loadDashboard = dispatch => {
        taskApi.getDashboard()
            .then(dashboard => dispatch({
                type: DASHBOARD_LOADED,
                payload: dashboard
            }))
}