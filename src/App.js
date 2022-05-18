// import logo from './logo.svg';
import './App.scss';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import ContactUs from './components/Contact';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Donations from './components/Donations';
import MainLayout from './components/MainLayout';
import OnboardingLayout from './components/OnBoarding/OnBoardingLayout';
import Login from './components/OnBoarding/Login';
import ForgotPassword from './components/OnBoarding/ForgotPassword';
import SignUp from './components/OnBoarding/SignUp';

function App() {
  return (
    // <BrowserRouter basename="/sadhcare">
    <BrowserRouter>
      <Routes>
        <Route path='' element={OnboardingLayout}>
          <Route path="login" element={<Login />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="sign-up" element={<SignUp />} />
        </Route>

        <Route path="" element={<MainLayout />} >
          <Route path="home" element={<Home />} />
          <Route path="About-us" element={<AboutUs />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="Donations" element={<Donations />} />
        </Route>

        <Route path="*" element={<Navigate to='/home' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
