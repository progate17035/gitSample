import React from 'react';
import { useHistory } from 'react-router-dom';

const ListHeader = (props) => {
  const history = useHistory();
  const goNew = (e) => {
    e.preventDefault();
    history.push('/new');
  }
  return (
    <div className="container-header">
        <h1>買い物リスト</h1>
        <a href="#/" className="new-button" onClick={goNew}>+ 新規登録</a>
    </div>
  );
};
export default ListHeader;