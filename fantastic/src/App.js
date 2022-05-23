
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from './Screens/login.js';
import Intro from './Screens/Intro';
import Form from './Screens/form';
import FileUploadPage from './Screens/cropper';

function App() {
  return (
     <div className="App">
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
