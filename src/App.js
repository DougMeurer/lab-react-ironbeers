
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AllBeers from './pages/AllBeers';
import HomePage from './pages/HomePage';
import NewBeerPage from './pages/NewBeerPage';
import PageDetails from './pages/PageDetails';
import RandomBeerPage from './pages/RandomBeerPage';

function App() {

  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/beers" element={<AllBeers />}/>
      <Route path="/random-beer" element={<RandomBeerPage />}/>
      <Route path="/new-beer" element={<NewBeerPage />}/>
      <Route path="/beers/:beerId" element={<PageDetails/>}/>
    </Routes>
  
    </div>
  );
}

export default App;
