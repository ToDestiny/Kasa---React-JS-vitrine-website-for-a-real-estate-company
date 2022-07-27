import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Pages
import Home from './pages/Home/Home.jsx';
import Error from './pages/Error/Error.jsx';
import APropos from './pages/APropos/APropos.jsx';
import ApartmentCard from './pages/ApartmentCard/ApartmentCard.jsx';

// Utils
import './index.scss';
//import './utils/fonts.css';

// Test related
// import reportWebVitals from './reportWebVitals';

// eslint-disable-next-line no-undef
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/apropos" element={<APropos />} />
      <Route path=":apartmentId" element={<ApartmentCard />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
