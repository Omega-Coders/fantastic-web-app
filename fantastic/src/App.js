
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import Intro from './Screens/Intro';
import Form from './Screens/form';

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from './Screens/login.js';
import Intro from './Screens/Intro';
import Form from './Screens/form';
import FileUploadPage from './Screens/cropper';
 e71a34e1a8e9bfb936d5da815df67cdb24797b7a

function App() {
  return (
     <div className="App">

       <Router>
         

         <Routes>
          <Route path="/" element={<Intro />}/>
          <Route path="/form" element={<Form />}/>
         
         </Routes>
         
          </Router>
       
        
          

         <Router>
           <Routes>
             <Route path="/" element={<Intro />} />
             <Route path="/login" element={<Login />} />
             <Route path="/form" element={<Form />} />
             <Route path="/cropper" element={<FileUploadPage />} />
           </Routes>
         </Router>

       </div>
    
  );
}

export default App;
