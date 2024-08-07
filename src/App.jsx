import { useEffect } from 'react';
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Experience from './Components/Experience/Experience';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Project from './Components/Project/Project';
import Services from './Components/Services/Services';
import data from './Utils/data';
import { keepTheme } from './Utils/themes';

function App() {
  const { home, about, experience, services, projects, contact } = data;

  useEffect(() => {
    keepTheme();
  });

  return (
    <>
      <Header />
      <main className='main'>
        <Home home={home} />
        <About about={about} />
        <Services services={services} />
        <Project projects={projects} />
        <Experience experience={experience} />
        <Contact contact={contact} />
      </main>
      <Footer />
    </>
  );
}

export default App;
