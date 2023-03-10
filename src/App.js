import './App.css';
import { Link, Route, Routes } from 'react-router-dom'; 

function Index() {
  return (
    <div>
      <h2>Home</h2>
      <p>Stranica se može navigirati preko URL-a</p>
      <p>za Kontakt stranicu u URL traku upišite http://localhost:3000/kontakt/</p>
      <p>za stranicu Adresa u URL traku upišite http://localhost:3000/adresa/</p>
    </div>);
}

const Kontakt = () => {
  return (
    <div>
      <h2>Kontakt</h2>
      <p>Tel: +385 1 2332 861</p>
      <p>E-mail: info@algebra.hr</p>
    </div>);
}

function Adresa() {
  return (
    <div>
      <h2>Adresa</h2>
      <p>Zagreb – Ilica 242, Maksimirska 58a (Testni centar)</p>
    </div>);
} 

const HOME_ROUTE = '/';
const ADDRESS = '/address';
const CONTACTS = '/contacts';



function App() {
  return (
    <>
      <nav>
        <ul>
          <li><Link  to={HOME_ROUTE}>Home </Link></li>
          <li><Link  to={ADDRESS}>Adresa </Link></li>
          <li><Link  to={CONTACTS}>Kontakt </Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path={HOME_ROUTE} element={<Index />} />
        <Route path={ADDRESS} element={<Adresa />}/>
        <Route path={CONTACTS} element={<Kontakt />}/>
      </Routes>
    </>
  );
}

export default App;
