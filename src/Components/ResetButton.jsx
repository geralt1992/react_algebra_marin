function ClearCompleted(props) {
    const { removeCompleted } = props;

    return <>
        <p onClick={removeCompleted} className="clearCompleted">Clear completed</p>
    </>
}

export default ClearCompleted;
