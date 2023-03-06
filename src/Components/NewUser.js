import React from "react";

function NewUser(props) {

    const { handleNewUser } = props;

    //STATEs
    const [name , setName] = React.useState('');
    const [age , setAge] = React.useState(0);
 
    function handleSubmit(e) {
        e.preventDefault();
        
        //TO TO ŠALJEŠ POVEZUJES SA STEJTOM
        const newUser = {
            id : new Date().getTime(),
            name : name,
            age : age
        }

        handleNewUser(newUser);
        setName('');
        setAge(0);
    }

    //TO DVOJE SAMO ZA POVEZATI INPUTE SA STATOM - TO SE TAKO RADI U REACTU
        function STATEnameOnChange(e) {
            setName(e.target.value);
        }

        function STATEageOnChange(e) {
            setAge(e.target.value)
        }


    //JSX
    return <form onSubmit={handleSubmit}> 
        <label>Ime: <input value={name} onChange={STATEnameOnChange} type="text" /></label>
        <label>Dob: <input value={age} onChange={STATEageOnChange} type="number" /></label>
        <input type="submit"  value="Dodaj" />
    </form>

}

export default NewUser;