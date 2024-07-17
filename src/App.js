import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Error } from './pages/404';

function App() {
  return (
  
   <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
   </Router>
   
  );
}

export default App;
