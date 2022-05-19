// import logo from './logo.svg';
import './App.scss';
import { Route, Routes, BrowserRouter, Navigate, HashRouter } from 'react-router-dom';
import ContactUs from './components/InnerPages/Contact';
import Home from './components/Home';
import AboutUs from './components/InnerPages/AboutUs';
import Donations from './components/InnerPages/Donations';
import MainLayout from './components/MainLayout';
import OnboardingLayout from './components/OnBoarding/OnBoardingLayout';
import Login from './components/OnBoarding/Login';
import ForgotPassword from './components/OnBoarding/ForgotPassword';
import SignUp from './components/OnBoarding/SignUp';
import OurDoctors from './components/InnerPages/OurDoctors';
import Gallery from './components/InnerPages/Gallery';
import InnerPageLayout from './components/InnerPages/InnerPageLayout';
import OurServices from './components/InnerPages/OurServices';

function App() {
  return (
    // <BrowserRouter basename="/sadhcare">
    <HashRouter>
      <Routes>
        <Route path="user" element={<OnboardingLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="sign-up" element={<SignUp />} />
        </Route>

        <Route path="" element={<MainLayout />} >
          <Route path="" element={<Home />} />
        </Route>

        <Route path="" element={<InnerPageLayout />} >
          <Route path="about-us" element={<AboutUs />} />
          <Route path="our-doctors" element={<OurDoctors />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="our-services" element={<OurServices />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="donations" element={<Donations />} />
        </Route>

        <Route path="*" element={<Navigate to='/' replace />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
