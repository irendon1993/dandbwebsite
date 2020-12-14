import logo from './logo.svg';
import './App.css';
import IconContact from './Icons/IconContact.svg';
import cmm from './Images/ImageCMM.png';
import kanban from './Images/ImageKanban.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <nav>
         <ul>
           <li>
             Home
           </li>
           <li>
             About
           </li>
           <li>
             Solutions
           </li>
           <li>
             Quality
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
