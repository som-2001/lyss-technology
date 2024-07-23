import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Error } from './pages/404';
import { Contact } from './pages/Contact';
import { Gallary } from './pages/Gallary';
import { Login } from './pages/Login';
import { Product } from './pages/Product';
import { SmartOne } from './components/SmartOne';
import { Atplc } from './pages/Atplc';

function App() {
  return (
  
   <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/gallary' element={<Gallary/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/products' element={<Product/>}/>
      <Route path='/smartOne' element={<SmartOne/>}/>
      <Route path='/atplc' element={<Atplc/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
   </Router>
   
  );
}

export default App;
