import { Route, Routes } from 'react-router-dom';
import Navber from './Components/Navber/Navber';
import Home from './pages/Home/Home';
import Hotel from './pages/Hotel/Hotel';
import List from './pages/List/List';

function App() {
  return (
    <div className="App">
      <Navber></Navber>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/hotels' element={<List/>}></Route>
        <Route path='/hotels/:id' element={<Hotel/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
