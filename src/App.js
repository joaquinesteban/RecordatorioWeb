import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import {TodoItem} from './TodoItem';
import { CreateTodoButtom } from './CreateTodoButtom';
import { TodoParagraph } from './TodoParagraph';
import { TodoUser } from './TodoUser';

import './App.css';
import React from 'react';

const defaultTodos = [
  
  {text: 'Estudiar Curso de Reac.js', completed: false},
  {text: 'Juntar plata para la mudanza ', completed: false},
  {text: 'Sacar a pasear a huma', completed: false}
]

function App() {
  return (
    <React.Fragment>
      <div className='box1'>
        <div className='hoja1'></div>
        <div className='hoja2'></div>
        <div className='hoja3'></div>
      </div>

      <div className='box2'>
      <TodoParagraph/>
      <TodoList>
        {defaultTodos.map(todo =>(
          <TodoItem
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          />
        ))}
      </TodoList>
      </div>

      <div className='box3'>
      <TodoUser/>

      <div className='box3-box'>
      <TodoCounter total={25} completed={14}/>
      <TodoSearch/>
      </div>
     
      <CreateTodoButtom/>
      </div>

    </React.Fragment>
  );
}

export default App;


//05/09/24 en esta clase aprendimos a como importar y exportar modulos, tambien como crear modulos
