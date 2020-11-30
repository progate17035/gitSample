import React from 'react';
import { useHistory } from 'react-router-dom';

const Header = (props) => {
  const history = useHistory();
  const backTop = (e) => {
      e.preventDefault();
      history.push('/');
  }
  return (
    <header>
        <a href="#/" className="header-logo" onClick={backTop}>LIST APP</a>
    </header>
  );
};
export default Header;