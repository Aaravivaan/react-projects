import React, {useContext} from 'react'
import HeroSection from '../components/HeroSection';
import { AppContext } from '../context';

function About() {
  const heroData = {
    topPara:'This is About us',
    heading: "About Us",
    paragraph  : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum cum quae tempore modi provident magnam! Qui deserunt accusamus, mollitia vitae dolore ut minus consectetur, dolor, illo cumque repudiandae nostrum expedita.',
    btnText: "Hire Me",
    imageName:"about.jpg"
  };

  return (
    <>
        <HeroSection heroData={heroData} />
    </>
  )
}

export default About