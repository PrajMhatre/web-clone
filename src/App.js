import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import Footer from './components/Footer/Footer';
import HeaderBar from './components/HomePage/HeaderBar';
import Navbar from './components/HomePage/Navbar';
import HeroSection from './components/HomePage/HeroSection';
import Sidebar from "./components/HomePage/Sidebar";
import WhyChooseUs from "./components/HomePage/WhyChooseUs";
import Introduction from "./components/Introduction/Introduction";
import Action from "./components/Action/Action";
import Work from "./components/Work/Work";
import ProjectList from './components/ProjectList/ProjectList'; 
import Services from "./components/Services/ServicesPage";
import Clients from "./components/Clients/Clients";
import Contact from "./components/Contact/ContactPage";

const App = () => {
  return (
    <Router>
      {/* <Header /> */}
      <Sidebar />
      <HeaderBar />
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      <Introduction />
      <Services/>
      <Clients />
      <Action />
      <ProjectList />
      <Work />
      <Contact />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
