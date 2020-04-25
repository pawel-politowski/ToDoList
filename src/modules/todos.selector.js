export const selectAllTasks = (state) => {
    return state.taskList;
};

export const selectDoneTasks = (state) => {
    return state.taskList.filter(task => task.done === true);
};

export const selectUndoneTasks = (state) => {
    return state.taskList.filter(task => task.done === false);
};

export const selectFilteredTasks = (state) => {
    let results = [];
    if (state.displayAll) {
        results = selectAllTasks(state);
    } else if (state.displayDoneOnly) {
        results = selectDoneTasks(state);
    } else if (state.displayUndoneOnly) {
        results = selectUndoneTasks(state);
    }
    return results.filter(task => {
        return task.title.toLowerCase().includes(state.inputSearchTask.toLowerCase());
    });
};

export const selectIsLoading = (state) => {
    return state.isLoading;
};

export const selectIsError = (state) => {
    return state.isError;
};

export const selectDisplayAll = (state) => {
    return state.displayAll;
};

export const selectDisplayDone = (state) => {
    return state.displayDone;
};

export const selectDisplayUndone = (state) => {
    return state.displayUndone;
};

export const selectInputNewTask = (state) => {
    return state.inputNewTask;
};

export const selectInputSearchTask = (state) => {
    return state.inputSearchTask;
};