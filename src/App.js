import './App.css';
import SignUp from './forms/SignUp'
import Login from './forms/Login'
import Home from './home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<SignUp/>}></Route>
      </Routes>     
      </BrowserRouter>    
    </div>
  );
}

export default App;
