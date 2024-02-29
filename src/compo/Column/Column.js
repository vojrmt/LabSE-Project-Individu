import './Column.css';
import Task from '../Task/Task';
import { useState, useEffect, useRef } from 'react';

const Column = (props) => {
    const [isShowAddTask, setIsShowAddTask] = useState(false);
    const inputRef = useRef(null);
    const [valueInput, setValueInput] = useState("");

    useEffect(()=> { 
        if(isShowAddTask === true && inputRef && inputRef.current){
            inputRef.current.focus();
        }

    }, [isShowAddTask]);

    const handleAddTask = () => {
        if(!valueInput) {
            if(inputRef && inputRef.current)
                inputRef.current.focus();
            return;
        }
        
        const _tasks = tasks
        _tasks.push({
            id: 'task-'+ (tasks.length+1),
            boardId: 'board-1',
            title: valueInput,
            tasks: []
        });
        console.log(_tasks)
    }

    const {column} = props;
    const tasks = column.tasks;
return (
    <>
        <div className="column">
            <header>{column.title}</header>
            <ul className="task-list">
                {tasks && tasks.length > 0 && tasks.map((task, index) => {
                    return(
                        <Task key={task.id} task={task}/>
                    )
                })}
            </ul>

            {isShowAddTask === false ?
                    <div className='add-new-task' onClick={() => setIsShowAddTask(true)}>
                        <footer>Add another card</footer>
                    </div>
                    :
                    <div className='content-add-task'>
                        <input type="text" ref={inputRef} value={valueInput} onChange={(event)=> setValueInput(event.target.value)}/>
                        <div>
                            <button className='button' onClick={() => handleAddTask()}>Add list</button>
                            <button className='cancel' onClick={() => setIsShowAddTask(false)}>Cancel</button>
                        </div>
                    </div>
            }
        </div>
    </>
)

}

export default Column;