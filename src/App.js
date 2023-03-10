import { useEffect } from 'react';
import './App.css';
import React from 'react';

//ZVATI API PREKO USEEFFECT HOOKA i SPOJITI SA STATOM
function App() {

  const [dataGettedFromServer , setData] = React.useState({});

  useEffect(() => {
    
    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setData(data);
    }) 

  }, []);




  if(!dataGettedFromServer) {
    return 'Loding NASA data...';
  }
  else {
    // const [title , url , explanation] = dataGettedFromServer;
    return (
      <div>
        <h3>{dataGettedFromServer.title}</h3>
        <img src={dataGettedFromServer.url} alt="opis_u_slucaju_da_slika_nije_ucitana" />
        <p>{dataGettedFromServer.explanation}</p>
      </div>
    );
  }
}

export default App;
