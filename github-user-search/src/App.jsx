import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <header>
          <h1>GitHub User Search</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<p>Home Page (Search Component goes here)</p>} />
            {/* We will add more routes later */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;