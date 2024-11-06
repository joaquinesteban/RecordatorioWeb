import './TodoCounter.css';

function TodoCounter({total, completed}) {
    return(
        <h1 className="title">{completed} de {total} Tareas Completas</h1>
    );
}

export {TodoCounter}