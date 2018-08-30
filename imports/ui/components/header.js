import React from 'react';

const Header = ()=>{
  return(
    <nav className="nav navbar-default">
      <div className="navbar-header">
        <a className="navbar-brand">Authentication System</a>
      </div>
      <ul className="nav navbar-nav">
      	<li><a href="#">Sign Up</a></li>
      </ul>
    </nav>
  );
};

export default Header;
