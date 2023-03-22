import Checkbox from './Checkbox'
import Delete from './Delete';

function Tasks(props) {
    const { tasks } = props;

    return <>
        <div className='tasks'>

            {tasks.map((task) => {
                return  <> 
                    <div className='oneTask' >
                        <label style={{float: 'left', padding:'1rem'}}>
                        <Checkbox task={task} />
                            {
                                task.status ? (
                                    <span>{task.task}</span>
                                   
                                ) : (
                                    <span style={{textDecoration:" line-through"}}>{ task.task}</span>
                                )
                            }
                        </label>
                        <Delete itemId={task.id} />
                    </div>
                </>
            })}
            
        </div>
    </>
}

export default Tasks;