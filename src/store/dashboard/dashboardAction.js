import taskApi from "../../Api/TaskListApi";
import {DASHBOARD_LOADED} from "../actions/types";

export const loadDashboard = dispatch => {
    taskApi.getDashboard()
        .then(dashboard => dispatch({
            type: DASHBOARD_LOADED,
            payload: dashboard
        }))
};