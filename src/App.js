import { Route, Routes } from 'react-router-dom';
import Register from './Components/Register/Register';
import SignIn from './Components/SignIn/SignIn';
import Home from './pages/Home/Home';
import List from './pages/List/List';

function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/hotels' element={<List/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/signin' element={<SignIn/>}></Route>
        
      </Routes>

    </div>
  );
}

export default App;
