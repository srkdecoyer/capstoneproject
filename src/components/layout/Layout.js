import React from 'react';
import Footer from './Footer';
import Header from './Header';
// import Testing from './testing';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {/* <Testing /> */}
      <div>
      <main className="text-gray-900">{children}</main>
      </div>
      <div className="home-background-footer">
        <Footer/>
      </div>
    </>
  );
};

export default Layout;
