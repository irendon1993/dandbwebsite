import logo from './logo.svg';
import './App.css';
import Logo from './Logos/DBdesktopCopy.jpg'
import IconHome from './Icons/IconHome.svg';
import IconAbout from './Icons/IconAbout.svg';
import IconSolutions from './Icons/IconSolutions.svg';
import IconQuality from './Icons/IconQuality.svg';
import IconContact from './Icons/IconContact.svg';



function App() {
  return (
    <div className="App">
      <header className="App-header">
       <nav>
         <ul>
           <li>
             <img src={Logo} height="100 px"/>
           </li>
           <li>
             <div className="home"><img src={IconHome} /><p>Home</p></div>
           </li>
           <li>
             <div className="about"><img src ={IconAbout}/><p>About</p></div>
           </li>
           <li>
             <div className="solutions"><img src={IconSolutions}/><p>Solutions</p></div>
             </li>
           <li>
             <div className="quality"><img src={IconQuality}/><p>Quality</p></div>
             
           </li>
           <li className="contact">
             <div >
               <div className="contactDiv">
                <img src={IconContact}/>
                <p>Contact Us</p>
               </div>
               <p>941-123-4567</p>
             </div>
           </li>
         </ul>
       </nav>
      </header>
    </div>
  );
}

export default App;
