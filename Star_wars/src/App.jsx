import React, { useState, useEffect } from 'react';
import LandingPage from './Pages/LandingPage';
import { Route , Routes } from 'react-router-dom';
import Planet from './Pages/Planet';
import Page_Details from './Pages/Page_Detail'

const App = () => {
  return (
   <div>
    <Routes>
      <Route path="/" element={ <LandingPage></LandingPage>}></Route>
      <Route path="/planets" element={<Planet></Planet>}></Route>
      <Route path="/planetDetail" element={<Page_Details></Page_Details>}></Route>
    </Routes>
   </div>
  );
}

export default App;
