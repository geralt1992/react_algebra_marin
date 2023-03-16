import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setData } from './nasaSlice';


function Nasa() {
  
  const dispatch = useDispatch();
  const data = useSelector((state) => state.nasa.data);


  useEffect(() => {
    
    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then((res) => res.json())
    .then((data) => {
      dispatch(setData(data));
    }) 

  }, [dispatch]);



  if(!data) {
    return 'Loding NASA data...';
  }
  else {
    // const [title , url , explanation] = dataGettedFromServer;
    return (
      <div>
        <h3>{data.title}</h3>
        <img src={data.url} alt="opis_u_slucaju_da_slika_nije_ucitana" />
        <p>{data.explanation}</p>
      </div>
    );
  }
}


export default Nasa;