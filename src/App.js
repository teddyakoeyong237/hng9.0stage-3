import './App.css';
import Footer from './component/footer/Footer';
import Navbar from './component/navbar/Navbar';
import Homepage from './pages/homepage/Homepage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
