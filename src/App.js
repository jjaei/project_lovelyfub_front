import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import './App.css';
import Mainpage from './pages/Mainpage'
import Marketpage from './pages/Marketpage'
import Cafepage from './pages/Cafepage'
import Mappage from './pages/Mappage';
import Userpage from './pages/Userpage'

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/main' element={<Mainpage/>} />
          <Route path='/market' element={<Marketpage/>}/>
          <Route path='/cafe' element={<Cafepage/>}/>
          <Route path='/map' element={<Mappage/>}/>
          <Route path='/user/mypage' element={<Userpage/>}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
