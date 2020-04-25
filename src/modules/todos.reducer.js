import { ACTION_TYPES } from "./todos.action";

const INITIAL_STATE = {
    taskList: [],
    isLoading: true,
    isError: false,
    displayAll: true,
    displayDoneOnly: false,
    displayUndoneOnly: false,
    inputNewTask: "",
    inputSearchTask: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ACTION_TYPES.SET_FETCHED_TASKS:
            return state = {    
                ...state,
                taskList: action.value,
                isLoading: false,
                isError: false,
            };
        case ACTION_TYPES.SET_LOADING_TASKS:
            return state = {
                ...state,
                taskList: [],
                isLoading: true,
                isError: false,
            };
        case ACTION_TYPES.SET_ERROR_TASKS:
            return state = {
                ...state,
                taskList: [],
                isLoading: false,
                isError: true,
            };
        case ACTION_TYPES.DISPLAY_ALL:
            return state = {
                ...state,
                displayAll: true,
                displayDoneOnly: false,
                displayUndoneOnly: false,
            };
        case ACTION_TYPES.DISPLAY_DONE:
            return state = {
                ...state,
                displayAll: false,
                displayDoneOnly: true,
                displayUndoneOnly: false,
            };
        case ACTION_TYPES.DISPLAY_UNDONE:
            return state = {
                ...state,
                displayAll: false,
                displayDoneOnly: false,
                displayUndoneOnly: true,
            };
        case ACTION_TYPES.INPUT_NEW_TASK:
            return state = {
                ...state,
                inputNewTask: action.value,
            };
        case ACTION_TYPES.INPUT_SEARCH_TASK:
            return state = {
                ...state,            
                inputSearchTask: action.value,
            };
        default:
            return state;
    }
}