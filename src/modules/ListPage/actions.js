import constants from '../../constants/index';

export const setTask = payload => ({
    type: constants.SET_TASK,
    payload,
});

export const deleteTask = payload => ({
    type: constants.DELETE_TASK,
    payload,
});

export const checkTask = payload => ({
    type: constants.CHECK_TASK,
    payload,
});