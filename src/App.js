import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/footer/Footer';
import Navbar from './component/navbar/Navbar';
import Homepage from './pages/homepage/Homepage';
import PlaceToStay from './pages/placetostay/PlaceToStay';

function App() {
  return (
    <div className="App">
        <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/placetostay' element={<PlaceToStay />} />
      </Routes>
        <Footer />
    </div>
  );
}

export default App;
