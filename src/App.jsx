import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Sobre from './pages/Sobre';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}

export default App