import {
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MoviesList from "./components/MoviesList";
import Homepage from "./pages/Homepage";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/movies-list" element={<MoviesList/>}/>
      </Routes>

      <Footer />
    
    </div>
  );
}

export default App;
