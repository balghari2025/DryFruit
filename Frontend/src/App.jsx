import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Slider from './components/Slider';

function App() {
  return (
    <>  
   <div className='overflow-x-hiddens'>
     <Router>
      <Navbar />
      <Slider />
      
      {/* Other components and routes would go here */}
    </Router>
   </div>
    </>
  )
}

export default App
