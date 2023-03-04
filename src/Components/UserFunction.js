function UserFunction(props) {
    // const {user , handleNameChange} = props; - DEKONSTRUKTOR FORICA

    return  <div>
        <p>hy i am {props.user.name} and j'ai {props.user.age} age</p>
        <input type={"text"} onChange={props.handleNameChange} />
     </div> 
   
}

export default UserFunction;