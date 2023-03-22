import './App.css';
import React from 'react';
import { Input, Tasks, ClearCompleted } from './Components';
import { Link, Route, Routes } from 'react-router-dom';
import Context from './Context/Context.js'

function App() {

//STATE
  const [tasks , setTasks] = React.useState(
    [
      {id: 1, task: 'spremi kuću' , status: true},
      {id: 2, task: 'kupi stvari' , status: false},
      {id: 3, task: 'prodaj plac' , status: true},
      {id: 4, task: 'zahvali se Bogu' , status: true}
  ]);


 //DONE TASKS
  const doneTasks = tasks.filter((task) => {
      if(task.status === false) {
        return task;
      }
  })

 //ACTIVE TASKS
  const activeTasks = tasks.filter((task) => {
      if(task.status === true) {
        return task;
      }
  })

 //ADD TASK
  function addTask(task) {
    const newTasks = [...tasks];
    newTasks.push(task)
    setTasks(newTasks);
  }

 //REMOVE COMPLETED
  function removeCompleted() {
      setTasks(activeTasks);
  }

 //CHANGE TASK STATUS
  function changeStatus(taskId) {
      const updatedTask = tasks.map((task) => {
        if(task.id === taskId) {
          return {...task, status: !task.status}
        } else {
          return {...task}
        }
      })
      setTasks(updatedTask)
  }

 //DELETE ITEM
  function deleteItem(itemId) {
      const itemToDelete = tasks.filter((task) => {
        return task.id !== itemId
      })
      setTasks(itemToDelete);
    }
 

 //ROUTES
  const _ALL = '/';
  const _ACTIVE = '/active';
  const _COMPLETED = '/completed';

  return (
    <>  
      <Context.Provider value={ {changeStatus: changeStatus, deleteItem : deleteItem } }>
        <div className='mainDiv'>
          <h1>My Title</h1>
          <nav className='nav'>
            <Link to={_ALL} ><button>All</button></Link> 
            <Link to={_ACTIVE}><button>Active</button></Link>
            <Link to={_COMPLETED}><button>Completed</button></Link>
          </nav>

          <Input addTask={addTask} />

          <Routes>
            <Route path={_ALL} element={<Tasks tasks={tasks} />} />
            <Route path={_ACTIVE} element={<Tasks tasks={activeTasks} />} />
            <Route path={_COMPLETED} element={<Tasks tasks={doneTasks} />} />
          </Routes>

          <ClearCompleted removeCompleted={removeCompleted}/>
        </div>
      </Context.Provider>
    </>
  );
}

export default App;