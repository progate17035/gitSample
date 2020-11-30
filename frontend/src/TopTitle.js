import React from 'react';
import { useHistory } from 'react-router-dom';

const TopTitle = (props) => {
  const history = useHistory();
  const goList = (e) => {
    e.preventDefault();//イベントの処理を止める
    history.push('/list');
  }
  return (
    <div className="top-detail">
        <h2 className="subtitle">買い物リストアプリ</h2>
        <h1 className="title">LIST APP</h1>
        <p className="description">
            LIST APPは、買い物をリストアップするサービスです。
            <br/>
            買いたいものをリストに登録してみましょう。
        </p>
        {/* <a href="/index" className="index-button">一覧を見る</a> */}
        {/* 
        以下の記載でもページ遷移できるが表示されるURLに「#」が表示される(localhost:3000/list/#)
        <a href="#" className="index-button" onClick={() => history.push('/list')}>一覧を見る</a>
        */}
        <a href="#/" className="index-button" onClick={goList}>一覧を見る</a>
    </div>
  );
};
export default TopTitle;