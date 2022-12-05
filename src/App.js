import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Landing from './Pages/Landing';
import './index.css';
import ProductPage from './Pages/ProductPage';

function App() {
  return (
    <div className="App font-manrope">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/prod" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
