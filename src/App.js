// import logo from './logo.svg';
import './App.scss';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import ContactUs from './components/Contact';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Donations from './components/Donations';
import MainLayout from './components/MainLayout';

function App() {
  return (
    // <BrowserRouter basename="/sadhcare">
    <BrowserRouter>
      <Routes >
        <Route path="" element={<MainLayout />} >
          <Route path="" element={<Home />} />
          <Route path="About-us" element={<AboutUs />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="Donations" element={<Donations />} />
        </Route>

        <Route path="*" element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
