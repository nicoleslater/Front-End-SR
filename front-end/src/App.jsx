import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import FourOFour from "./Pages/FourOFour";
import Edit from "./Pages/Edit";
import Index from "./Pages/Index";
import Home from "./Pages/Home";
import New from "./Pages/New";
import Show from "./Pages/Show";

import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
       <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Index />} />
            <Route path="/movies/new" element={<New />} />
            <Route exact path="/movies/:id" element={<Show />} />
            <Route path="/movies/:id/edit" element={<Edit />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
