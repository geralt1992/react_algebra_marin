import './App.css';

function App() {

  const name = 'marin';

  const element1 = <p>{name} i dalje pišem</p>

  const user = {
    firstName: 'nina',
    lastName: 'boro'
  }

  const spoji = (data) => {
    return `${data.firstName}  ${data.lastName}`
  }

  let cities = ['osijek' , 'zagreb' , 'županja'];

  return (
    <div>

      {cities.join(' ,')}
        <br></br><br></br>
      {spoji(user)}
        <br></br>
      {element1}
      
    </div>
  );
}

export default App;
