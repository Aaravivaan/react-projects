import './App.css'
import Home from './Pages/Home'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import About from './Pages/About'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './GlobalStyle'

function App() {

  const theme ={
    colors:{
      heading: "rgb(24 24 29)",
      text:"rgb(24 24 29)",
      white:"#fff",
      black:"#212529",
      helper:"#8490ff",
      bg:"rgb(249 249 255)",
      footer_bg:"#0a1335",
      btn:"rgb(98 84 243)",
      border:"rgba(98, 84, 243, 0.5)",
      hr:"#fff",
      gradient:"liner-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:"rgba(0,0,0,0.2) 0px 1px 3px 0px, rgba(27, 31, 55, 0.15) 0px 0px 0px 1px;",
      shadow_support:"rgba(0,0,0,0.16) 0px 1px 4px",
    },
    media:{
      mobile:"786px",
      tab: "998px"
    },
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <BrowserRouter>
          <Header/>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/service' element={<Services />}/>
              <Route path='/contact' element={<Contact />}/>
              <Route path='/about' element={<About />}/>
            </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
