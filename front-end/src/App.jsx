import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Movies" element={<Index />} />
            <Route path="/Movies/new" element={<New />} />
            <Route exact path="/Movies/:id" element={<Show />} />
            <Route path="/Movies/:id/edit" element={<Edit />} />
            <Route path="/Favorites" element={<Favorites />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
