import React from 'react';

const Test = (props) => {
    const handleSubmit = (event) => {
        //postWebApi();post送信確認
        //insertWebApi();
        //paramWebApi();
        event.preventDefault();
    }
    /*
    //post送信疎通確認用
    const postWebApi = () => {
        window.fetch("http://localhost:4000/posts",{
        method: 'POST',
        body: JSON.stringify(),
        headers: {'Content-Type': 'application/json'
        }
        }).then(res => res.json())
          .then(response => console.log('データを取得しました。', JSON.stringify(response)))
          .catch(error =>  console.error('データを取得できませんでした。:', error));
    };
    //postデータ送信確認用
    const data = { inp: 'example' };
    const insertWebApi = () => {
      window.fetch("http://localhost:4000/create",{
      method: 'POST',
      body: JSON.stringify(data),
      headers: {'Content-Type': 'application/json'}
      }).then(res => res.json())
        .then(response => console.log('データを更新しました。', JSON.stringify(response)))
        .catch(error =>  console.error('データを更新できませんでした。:', error));
    };
    //postリクエストパラメータ送信確認用
    const data = { id: 32 };
    const paramWebApi = () => {
      window.fetch(`http://localhost:4000/delete/${data.id}`,{
      method: 'POST',
      body: JSON.stringify(data),
      headers: {'Content-Type': 'application/json'}
      }).then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(response => console.log('データを削除しました。', JSON.stringify(response)))
      .catch(error =>  console.error('データを削除できませんでした。:', error));
    };
    */
  return (
    <>
        <form onSubmit={handleSubmit}>
            <input type="submit" value="送信"></input>
        </form> 
    </>
  );
};
export default Test;