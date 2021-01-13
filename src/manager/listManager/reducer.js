import constants from '../../constants';

export const initialState = {
        list: [{ task: 'проверка', id: 'id', checked: false}],
}

const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.SET_TASK:
            return {  
                ...state,
                list: [...state.list, action.payload]
            };  
        case constants.DELETE_TASK:
            return {  
                ...state,
                 list: state.list.filter(task => task.id !== action.payload)  
            };  
        case constants.CHECK_TASK:
            return {  
                 ...state,
                list: state.list.map(task => task.id === action.payload ? { ...task, checked: true } : task)  
            };     
        default:
            return state;
    }
}

export default listReducer;
