import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import './app.css';

const App = () => {
  const { pathname } = useLocation();
  const shouldShowFooter = pathname !== '/profile';

  return (
    <div className='app'>
      <Header />
      <div className='app__main'>
        <Outlet />
      </div>
      <div className={shouldShowFooter ? 'app__footer' : 'hidden'}>
        <Footer />
      </div>
    </div>
  );
};

export default App;

