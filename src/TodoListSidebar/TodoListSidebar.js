import React from "react";

import TaskListApi from './Api/TaskListApi'
TaskListApi.getOpenTasks().then(r => console.log(r));