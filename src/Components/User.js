function User(props) { // stateless komponenta

    // lifting state up (https://beta.reactjs.org/learn/sharing-state-between-components)
    const { user, handleNameChange } = props;

    return (
        <>
            <p>Pozdrav, moje ime je {user.name} i imam {user.age} godina.</p>
            <input type={"text"} onChange={handleNameChange} />
        </>
    )
}

export default User; 