import React from 'react';
import Page1 from './Page/Page1';
 import Formfield2 from './Page/Page2'
 import Thankyou from './Page/page3'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div >
      <Router>
        <Routes>
          {/* home page route  */}
          <Route exact path='/' element={<Page1/>}></Route>
          <Route exact path='/formfield2' element={<Formfield2/>}></Route>
          <Route exact path='/thankyou' element={<Thankyou/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;