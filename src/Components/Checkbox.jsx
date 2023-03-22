import React from 'react'
import Context from '../Context/Context.js'

function Checkbox(props) {
    const contextObject = React.useContext(Context);
    const { task } = props
    const { changeStatus } = contextObject;
    
    function handleClick(e) {
        changeStatus(Number(e.target.value));
    }

    return <>
        <input type='checkbox' value={task.id} onClick={handleClick} style={{cursor: 'pointer'}}/> 
    </>
}

export default Checkbox;