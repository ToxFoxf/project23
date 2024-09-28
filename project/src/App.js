import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login/login';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<div />} />
          <Route path="/products" element={ <div/> } />
          <Route path="/product" element={ <div/> } />
          <Route path="/login" element={ <Login/> } />
          <Route path="/registration" element={ <div/> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

