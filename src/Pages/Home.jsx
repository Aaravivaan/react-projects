import React from 'react'
import HeroSection from '../components/HeroSection'

function Home() {

  const heroData = {
    topPara:'This is Home',
    heading: "Manish Kumar",
    paragraph  : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum cum quae tempore modi provident magnam! Qui deserunt accusamus,',
    btnText: "Hire Me",
    imageName:"home.png"
  };

  return (
    <>
      <HeroSection heroData={heroData} />
    </>
  )
}

export default Home