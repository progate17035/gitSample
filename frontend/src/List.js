import React,{ useState, useEffect } from 'react';
import Header from './Header';
import ListHeader from './ListHeader';
import ListTitle from './ListTitle';
import ListData from './ListData';

// Contextの生成
export const LContext = React.createContext();

const List = (props) => {
  const itemsTbl = [];
  const [items,setItems] = useState(itemsTbl);
  useEffect(() => {
  //サーバーサイド(expressのapp.js[app.get('/posts'・・・])を呼び出している
  fetch("http://localhost:4000/posts")
  .then(response => response.json())
  .then(posts => setItems([...posts]))
  .catch(() => console.error('データを取得できませんでした'));
  },[]);//useEffectの第2引数にどのプロパティが変化したとき実行するかを指定しておかないと無限ループになる itemsをしてしても無限ループになる(setItems([...posts])で配列の参照先が変わるため)
  
  return (
  <>{/*JSXの最上位要素は一つにしなければいけない為追加*/}
  <Header />
  <LContext.Provider value={[items,setItems]}>
    <div className="container">
        <ListHeader />
        <div className="index-table-wrapper">
            <ListTitle />
        　　<ul className="table-body">
            　{items.map(item => 
                <ListData key={item.id} item={item}/>
            　)}
            </ul>
        </div>
    </div>
  </LContext.Provider>
  </>
  );
};
export default List;