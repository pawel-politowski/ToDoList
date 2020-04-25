import mapObjectToArray from '../Components/mapObjectToArray'

export const API_URL = 'https://todolist-f1f9a.firebaseio.com/tasks/'

export const ACTION_TYPES = {
    FETCH_INIT_TASKS: 'FETCH_INIT_TASKS',
    SET_FETCHED_TASKS: 'SET_FETCHED_TASKS',
    SET_LOADING_TASKS: 'SET_LOADIND_TASKS',
    SET_ERROR_TASKS: 'SET_ERROR_TASKS',
    INPUT_NEW_TASK: 'INPUT_NEW_TASK',
    ADD_NEW_TASK_TO_LIST: 'ADD_NEW_TASK_TO_LIST',
    INPUT_SEARCH_TASK: 'INPUT_SEARCH_TASK',
    CHANGE_TASK_STATUS: 'CHANGE_TASK_STATUS',
    DELETE_TASK: 'DELETE_TASK',
    DISPLAY_ALL: 'DISPLAY_ALL',
    DISPLAY_DONE: 'DISPLAY_DONE',
    DISPLAY_UNDONE: 'DISPLAY_UNDONE',
};

export const FETCH_INIT_TASKS = () => {
    return dispatch => {
        return fetch(API_URL + '.json')
        .then(response => response.json())
        .then(tasks => mapObjectToArray(tasks))
        .then(taskList => dispatch(SET_FETCHED_TASKS(taskList)))
        .catch(error => dispatch(SET_ERROR_TASKS()))
    }
};

export const SET_FETCHED_TASKS = (taskList) => {
    return {
        type: ACTION_TYPES.SET_FETCHED_TASKS,
        value: taskList
    }
};

export const SET_LOADING_TASKS = () => {
    return {
        type: ACTION_TYPES.SET_LOADING_TASKS,
    }
};

export const SET_ERROR_TASKS = () => {
    return {
        type: ACTION_TYPES.SET_ERROR_TASKS,
    }
};

export const DISPLAY_ALL = () => {
    return {
        type: ACTION_TYPES.DISPLAY_ALL,
    }
};

export const DISPLAY_DONE = () => {
    return {
        type: ACTION_TYPES.DISPLAY_DONE,
    }
};

export const DISPLAY_UNDONE = () => {
    return {
        type: ACTION_TYPES.DISPLAY_UNDONE,
    }
};

export const INPUT_NEW_TASK = (inputValue) => {
    return {
        type: ACTION_TYPES.INPUT_NEW_TASK,
        value: inputValue,
    }
};

export const INPUT_SEARCH_TASK = (inputValue) => {
    return {
        type: ACTION_TYPES.INPUT_SEARCH_TASK,
        value: inputValue,
    }
};

export const ADD_NEW_TASK_TO_LIST = (taskTitle) => {
    return dispatch => {
        const body = {title: taskTitle, done: false};
        fetch(API_URL + ".json", {
            method: "POST",
            body: JSON.stringify(body)
        })
        .then(() => dispatch(INPUT_NEW_TASK('')))
        .then(() => dispatch(FETCH_INIT_TASKS()))
    }
};

export const CHANGE_TASK_STATUS = (task) => {
    return dispatch => {
        const body = { title: task.title, done: !task.done };
        fetch(API_URL + task.key + ".json", {
            method: "PUT",
            body: JSON.stringify(body)
        })
        .then(() => dispatch(FETCH_INIT_TASKS()))
    }
};

export const DELETE_TASK = (task) => {
    return dispatch => {
        fetch(API_URL + task.key + ".json", {
            method: "DELETE"
        })
        .then(() => dispatch(FETCH_INIT_TASKS()))
    }
};

