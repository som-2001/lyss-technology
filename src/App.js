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
import { Crcs } from './pages/Crcs';
import { Samp } from './pages/Samp';
import { UnderDevelopment } from './pages/Underdevelopment';
import { Technologies } from './pages/Technologies';
import { RefundPolicy } from './pages/RefundPolicy';
import { DashboardEmployee } from './pages/DashboardEmployee';
import { DashboardIntern } from './pages/DashboardIntern';
import InternCertificate from './pages/InternCertificate';


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
      <Route path='/CRCS' element={<Crcs/>}/>
      <Route path='/Samp' element={<Samp/>}/>
      <Route path='/technologies' element={<Technologies/>}/>
      <Route path='/refund-policy' element={<RefundPolicy/>}/>
      <Route path='/dashboard-employee' element={<DashboardEmployee/>}/>
      <Route path='/dashboard-intern' element={<DashboardIntern/>}/>
      <Route path='/underdevelopment' element={<UnderDevelopment/>}/>
      <Route path='/intern-certificate' element={<InternCertificate/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
   </Router>
   
  );
}

export default App;
