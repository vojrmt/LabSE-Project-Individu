import './Task.css'

const Task = (props) => {
    const {task} = props;
    return (
        <>
            <li className='task-item'>{task.title}</li>
        </>
    )

}

export default Task;