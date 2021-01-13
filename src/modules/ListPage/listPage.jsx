import './listPageStyles.css';
import Task from './components/Task';
import constants from '../../constants/index';
import React, { useState, useReducer } from 'react';
import listReducer, { initialState } from "../../manager/listManager/reducer";

const List = () => {
    const [task, saveText] = useState('');
    const [id, createId] = useState(0);
    const [inputValue, changeInput] = useState('');
    const [state, dispatch] = useReducer(listReducer, initialState);

    const  saveTask = event => {
        saveText(event.target.value);
        changeInput(event.target.value);
        event.preventDefault();
    }

    const addTask = () => {
        createId(id + 1);
        (task.length !== 0) ? 
        dispatch({ type: constants.SET_TASK, payload: {task, id} }) : 
        alert('enter some text');

        changeInput('');
        saveText('');
    }

    const deleteTask = id => {
        dispatch({ type: constants.DELETE_TASK, payload: id }) 
    }

    const checkTask = id => {
        console.log(id);
        dispatch({ type: constants.CHECK_TASK, payload: id }) 
    }

    return ( 
            <div className={'list'}>
                <div className={'list__header'}>
                    <h1 className={'list-header__name'} 
                        children={'ToDo List'}>
                    </h1>
                    <input className={'list-header__input'} 
                        type={'text'} 
                        value={inputValue} 
                        placeholder={'Enter text..'} 
                        onChange={event => saveTask(event)}/>
                    <button className={'list-header__button'} 
                        children={'Add'}
                        onClick={() => addTask()}>
                    </button>
                </div>
                <div className={'tasks-container'}>
                        { 
                            state.list.map((task, index) => (
                                <Task key={index}
                                      id={task.id}
                                      text={task.task}
                                      checkTask={checkTask}
                                      checked={task.checked}
                                      deleteTask={deleteTask}/>
                            ))
                        }
                </div>
            </div>
            )
    
}

export default React.memo(List);
