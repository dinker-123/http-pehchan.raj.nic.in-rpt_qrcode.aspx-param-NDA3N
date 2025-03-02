import React from 'react';
import middle from './Image/img_peh_header.png';
import front from './Image/logo.png';
import last from './Image/BirthAndDeathLogo.png';
import footer from './Image/niclogo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <img src={front} alt="Rajasthan Emblem" className="emblem" />
          <img src={middle} alt="Rajasthan Emblem" className="emblem-middle" />
          <img src={last} alt="Rajasthan Emblem" className="emblem-end" />
          <p className="buttomFont">
            Rajasthan Civil Registration System<br />
            Government Of Rajasthan<br />
            Directorate of Economics and Statistics
          </p>
        </div>
      </header>

      {/* Certificate Section */}
      <main className="certificate">
      <h1 style={{ color: "white" }}>Birth Registration</h1>
        <div className="certificate-details">
          <p><strong>Registration No. :</strong> 08100002000001200175 / 2023</p>
          <p ><strong style={{ color: "Black" }}>Registration Date :</strong> 25/04/2023</p>
          <p><strong >Date of Birth :</strong> 07/04/2023</p>
          <p><strong>Child Name :</strong> कैवल्य पेड़ीवाल / KEVALYA PERIWAL</p>
          <p><strong>Gender :</strong> पुरूष</p>
          <p><strong>Father's Name :</strong> मोहित पेड़ीवाल / MOHIT PERIWAL</p>
          <p><strong>Mother's Name :</strong> प्रियंका देवी / PRIYANKA DEVI</p>
          <p><strong>Place of Birth :</strong> राजकीय सामुदा‍यिक स्‍वास्‍थय केन्‍द्र , नोहर</p>
          <p><strong>Signer's Name/Designation :</strong> VED PRAKASH, Registrar</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <img src={footer}></img>
        <p>Contact Us:</p>
        <p>Helpline (Toll Free): 1800-180-6785</p>
        <p>Email: pehchan.raj@gov.in</p>
        <p>© 2025 Chief Registrar (Birth-Death), Rajasthan</p>
      </footer>
    </div>
  );
}

export default App;