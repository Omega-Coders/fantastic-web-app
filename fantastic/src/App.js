
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import Intro from './Screens/Intro';
import Form from './Screens/form';


function App() {
  return (
     <div className="App">
       <Router>
         

         <Routes>
          <Route path="/" element={<Intro />}/>
          <Route path="/form" element={<Form />}/>
         
         </Routes>
         
          </Router>
       
        
          
       </div>

    
  );
}

export default App;
