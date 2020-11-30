import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { LContext } from './List';

const ListData = (props) => {
  //分割代入を利用してpropsからitemを取得(propsのプロパティ値を指定して取得するには→const item = props.item;)
  const {item} = props;
  const history = useHistory();
  const [,setItems] = useContext(LContext);

　//データ削除＆データ再取得
  const deleteData = (event) => { 
    　  event.preventDefault();     
        window.fetch(`http://localhost:4000/delete/${item.id}`,{
            method: 'POST',
            body: JSON.stringify(item),
            headers: {'Content-Type': 'application/json'}
            }).then(res => res.json())
              //.then(response => console.log('データを削除しました。', JSON.stringify(response)))
              .then(posts => setItems([...posts]))
              .catch(error =>  console.error('データを削除できませんでした。:', error)
        );
        history.push('/list');
  };
　
  //編集画面に遷移
  const goEdit = (e) => {
    e.preventDefault();

    //history.push(`/edit/${item.id}`); パラメータで値を渡すパターン
    history.push({ pathname: '/edit', state: { item }});//遷移先にデータを渡す

  }

  return (
    <li>
        <div className="item-data">
            <span className="id-column">{item.id}</span>
            <span className="name-column">{item.name}</span>
        </div>
        <div className="item-menu">
            <form onSubmit={deleteData}>
                <input type="submit" value="削除" />
            </form>
            <a href="#/" onClick={goEdit}>編集</a>
        </div>     
   </li>
  );
};
export default ListData;