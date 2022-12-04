import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Landing from './Pages/Landing';
import './index.css';

function App() {
  return (
    <div className="App font-manrope">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
