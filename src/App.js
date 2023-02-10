import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home';
// import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Footer /> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
