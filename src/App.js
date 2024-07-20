import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Error } from './pages/404';
import { Contact } from './pages/Contact';
import { Gallary } from './pages/Gallary';
import { Login } from './pages/Login';

function App() {
  return (
  
   <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/gallary' element={<Gallary/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
   </Router>
   
  );
}

export default App;
