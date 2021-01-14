import './listPageStyles.css';
import Task from './components/Task';
import React, { useState } from 'react';

const List = props => {
    const [id, createId] = useState(0);
    const [task, saveText] = useState('');
    const [inputValue, changeInput] = useState('');
    
    const { list,
            setTask,
            checkTask,
            deleteTask } = props;

    const  saveTask = event => {
        event.preventDefault();
        saveText(event.target.value);
        changeInput(event.target.value);
    }

    const addTask = () => {
        createId(id + 1);
        (task.length !== 0) ? 
        setTask({ task, id }) : 
        alert('enter some text');

        changeInput('');
        saveText('');
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
                    <span className={'list-header__button'} 
                        children={'Add'}
                        onClick={() => addTask()}>
                    </span>
                </div>
                <div className={'tasks-container'}>
                        { 
                            list.map((task, index) => (
                                <Task id={task.id}
                                      key={index}
                                      text={task.task}
                                      checked={task.checked}
                                      checkTask={checkTask}
                                      deleteTask={deleteTask}/>
                            ))
                        }
                </div>
            </div>
            )
    
}

export default React.memo(List);
