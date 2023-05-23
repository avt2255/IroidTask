import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login'
import Home from './Components/Home/Home';
import './App.css';
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
