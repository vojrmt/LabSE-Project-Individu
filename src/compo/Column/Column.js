import './Column.css';
import Task from '../Task/Task';

const Column = () => {
return (
    <>
          <div className="column">

<header>Board title</header>
<ul className="task-list">
    <Task />

  <li className='task-item'>Test2</li>
  <li className='task-item'>Test3</li>
  <li className='task-item'>Test1</li>
  <li className='task-item'>Test2</li>
  <li className='task-item'>Test3</li>
  <li className='task-item'>Test1</li>
  <li className='task-item'>Test2</li>
  <li className='task-item'>Test3</li>
  <li className='task-item'>Test1</li>
  <li className='task-item'>Test2</li>
  <li className='task-item'>Test3</li>
  <li className='task-item'>Test3 scbjsnfdkj</li>
</ul>
<footer>Add another card</footer>
</div>
    </>
)

}

export default Column;