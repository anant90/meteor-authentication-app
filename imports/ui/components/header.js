import React from 'react';
import Account from './accounts';

const Header = ()=>{
  return(
    <nav className="nav navbar-default">
      <div className="navbar-header">
        <a className="navbar-brand">Authentication System</a>
      </div>
      <ul className="nav navbar-nav">
      	<li><Account/></li>
      </ul>
    </nav>
  );
};

export default Header;
