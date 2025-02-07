import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="overflow-x-hidden antialiased">
  {/* Background Blur Effect */}
  <div className="fixed top-0 -z-10 h-full w-full bg-white">
    <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]">
    </div>
  </div>

  {/* Visible Content */}
  <div className="container mx-auto px-8 relative z-10">
    <Navbar />
    <Hero />
    <About />
    <Technologies />
    <Projects></Projects>
    <Contact></Contact>
  </div>
</div>

    
    
   
  )
}

export default App