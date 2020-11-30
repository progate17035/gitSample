import React from 'react';
import { useHistory } from 'react-router-dom';

const BackTop = (props) => {
  const history = useHistory();
  const backPage = (e) => {
    e.preventDefault();
    history.push('/');
  }
  return (
    <a href="#/" className="cancel-button" onClick={backPage}><span/>もどる</a>
  );
};
export default BackTop;