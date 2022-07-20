// import logo from './logo.svg';
import './App.scss';
import { Route, Routes, BrowserRouter, Navigate, HashRouter } from 'react-router-dom';

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
import OurProgrammes from './components/InnerPages/OurProgrammes';
import LoggedInPage from './components/OnBoarding/LoggedInPage';
import BookAppointment from './components/InnerPages/BookAppointment';

function App() {
  return (
    // <BrowserRouter basename="/sadhcare">
    <HashRouter>
      <ToastContainer autoClose={3000} />
      <Routes>

        <Route path="user" element={<OnboardingLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="logged" element={<LoggedInPage />} />
        </Route>

        <Route path="" element={<MainLayout />} >
          <Route path="" element={<Home />} />
        </Route>

        <Route path="" element={<InnerPageLayout />} >
          <Route path="about-us" element={<AboutUs />} />
          <Route path="our-programmes" element={<OurProgrammes />} />
          <Route path="our-doctors" element={<OurDoctors />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="our-services" element={<OurServices />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="donations" element={<Donations />} />
          <Route path="book-appointment" element={<BookAppointment />} />

        </Route>

        <Route path="*" element={<Navigate to='/' replace />} />

      </Routes>
    </HashRouter>
  );
}

export default App;
