import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const EditArea = (props) => {
  const item = props.item;
  const formerText = item.name;
  const [text, setText] = useState(item.name);
  const history = useHistory();

  const handleInputChange = e => {
    setText(e.target.value);
  };

  const editData = (event) => {
    event.preventDefault();//submitの機能を止めておかないとalert完了後にページが再レンダリングされる
    if(text === formerText){
        alert("入力内容が変更されていません");
        return;
    }else if(text === ''){
      alert("入力内容が空です");
      return;      
    }else{
        const data = { name: text , id: item.id };
        window.fetch("http://localhost:4000/update",{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {'Content-Type': 'application/json'}
            }).then(res => res.json())
              .then(response => console.log('データを更新しました。', JSON.stringify(response)))
              .catch(error =>  console.error('データを更新できませんでした。:', error)
        );
        history.push('/list');
    }
  };

  return (
    <>
        <p className="form-label">買うもの</p>
        <form onSubmit={editData}>
            <input type="text" autoFocus value={text} onChange={handleInputChange} />
            <input type="submit" value="更新する"/>
        </form>
    </>
  );
};
export default EditArea;