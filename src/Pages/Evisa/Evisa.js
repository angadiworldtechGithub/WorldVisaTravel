import React from 'react'
import "./Evisa.css"
import { Link } from 'react-router-dom'

function Evisa() {
  return (
    <div className='Evisa-full-page'>
    <h3 className='Evisa-heading'>E-Visa</h3>
    <p className='Evisa-paragraph'>
     E-visas streamline the application process, allowing online
     applications for efficient entry authorization without physical 
     embassy visits,enhancing accessibility, and expediting approval
      for tourism, business, or other purposes
      </p>
    <div className="Evisa-container">
       <div className="Evisa-item-left">
         <h4>Tourist E-Visa</h4>
         <p>Tourist e-visas streamline entry with online applications, 
         eliminating embassy visits and promoting accessible tourism.</p>
         <div>
          <img src="/assets/visa/visa1.png"></img>
         </div>
         <Link to="/visas/e-visa/Tourist_e-visa"><button className='Evisa-button'>More Info</button></Link>
       </div>
       <div className="Evisa-item-right">
       <h4>Business E-Visa</h4>
       <p>Business e-visas streamline entry for travelers with a 
       simplified online process, fostering international mobility.</p>
       <div>
       <img src="/assets/visa/visa2.png"></img>
       </div>
       <Link to="/visas/e-visa/Business_e-visa"><button className='Evisa-button'>More Info</button></Link>
       </div>
    </div>
    </div>
  )
}

export default Evisa
