import React from 'react';
import PropTypes from 'prop-types';

const Task = props => {
    const { id,
            text,
            checked,
            checkTask,
            deleteTask } = props;
    
    
    return (
            (checked) ?
            <div className={'list__task checked'}>
                <span className={'list_text'} onClick={() => checkTask(id)}>{text}</span>
                <span className={'list_delete-button'} onClick={() => deleteTask(id)}>x</span>
            </div> :
            <div className={'list__task'}>
                <span className={'list_text'} onClick={() => checkTask(id)}>{text}</span>
                <span className={'list_delete-button'} onClick={() => deleteTask(id)}>x</span>
            </div>
    );
};

Task.propTypes = {
    text: PropTypes.string,
    // checked: PropTypes.bool
};

export default React.memo(Task);
