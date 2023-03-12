import './App.css';
import { gql , useQuery } from '@apollo/client';


function App() {

  const { loading , error, data } = useQuery(gql`
    {
      rates(currency: "USD") {
        currency
        rate
      }
    } 
  `);

  if(loading) return <p>Loading...</p>
  if(error) return <p>{error.message}</p>


  return (
    <ul>
      {data.rates.map((rate, index) => {
        return <li key={index}>{rate.currency}: {rate.rate}</li>
      })}
    </ul>
  );
}

export default App;
