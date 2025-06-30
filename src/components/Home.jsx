import React from 'react';
import Banner from './Banner';
import About from '../pages/About';
import Skill from '../pages/Skill';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
              <Skill></Skill>
            <Projects></Projects>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;