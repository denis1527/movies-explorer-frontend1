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
      <main className='app__main'>
        <Outlet />
      </main>
      {shouldShowFooter && <Footer />}
    </div>
  );
};

export default App;
