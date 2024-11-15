import './CreateTodoButtom.css'
function CreateTodoButtom( ){
    return(
        <button className="createButtom"
        onClick={ (event) => {
            console.log('le diste click al boton');
            console.log(event);
            console.log(event.target);
        }
    }
        >+</button>
    );
}

export {CreateTodoButtom}