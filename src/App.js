import './App.css';
import Navbar from './components/Navbar1';
import SearchBar from './components/SearchBar'
import { Route, BrowserRouter as Router, Link, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navbar />
      {/* <SearchBar /> */}

      <Routes>
        {/* <Route path="/" exact component={Home} /> */}
      </Routes>
    </Router>
  );
}

export default App;
