import React from "react";

function Input(props) {
  const { addTask } = props;
  const [inputData , setInputData] = React.useState('');

  function handleInputChange(e) {
    setInputData(e.target.value);
  }

  function handelSubmit(e) {
    e.preventDefault();
    const newTask = {
      id : Math.floor(Math.random() * 1000000000000),
      task: inputData,
      status : true
    }
    addTask(newTask);
    setInputData('');
  }

    return <>
        <div className='inputField'>
          <form onSubmit={handelSubmit}>
            <input placeholder="Add Task" onChange={handleInputChange} value={inputData} />
            <button className='addBtn'>Add</button>
          </form>
        </div>
    </>
}

export default Input;