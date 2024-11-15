import './TodoItem.css'

function TodoItem(props) {
  return (
    <li>
      <span className='check'></span>
      <p className='p-todoItem'>{props.text}</p>
      <span className='close'></span>
    </li>
  );
}

export {TodoItem}