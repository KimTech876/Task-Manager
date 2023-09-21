import React from 'react'

import {BiEdit} from 'react-icons/bi'
import {AiFillDelete} from 'react-icons/ai'

const TaskManager = (text, updateMode, deleteTaskManager) => {
    return (
        <div className="taskmanager">
            <div className="text">{text}</div>
            <div className="icons">
                <BiEdit className='icon' onClick={updateMode} />
                <AiFillDelete className='icon' onClick={deleteTaskManager} />
            </div>
        </div>
    )
}

export default TaskManager