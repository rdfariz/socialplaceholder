import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../elements/Navbar'
import Footer from '../elements/Footer';

function Component ({ children }) {
  return(
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="pt-24 px-2 flex-1 mx-auto lg:max-w-screen-lg container">
        {children}
      </main>
      <Footer/>
    </div>
  );
}

Component.defaultProps = {
};

Component.propTypes = {
  children: PropTypes.node.isRequired
};

export default Component;