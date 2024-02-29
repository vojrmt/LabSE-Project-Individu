import './Column.css';
import Task from '../Task/Task';

const Column = (props) => {

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
            <footer>Add another card</footer>
        </div>
    </>
)

}

export default Column;