import React from 'react'
import Context from '../Context/Context.js'

function Delete(props) {

    const contextObject = React.useContext(Context);
    const { deleteItem } = contextObject;
    const { itemId } = props;

    function handleClick() {
        deleteItem(Number(itemId));
    }

    return <>
        <span onClick={handleClick} style={{float: 'right' , padding:'1rem', cursor:'pointer'}}>X</span>
    </>
}

export default Delete;