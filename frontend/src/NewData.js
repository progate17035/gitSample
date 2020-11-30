import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const NewData = (props) => {
  const [text, setText] = useState('');
  const history = useHistory();

  const handleInputChange = e => {
    setText(e.target.value);
  };

  const createNewData = (event) => {
    event.preventDefault();
    if(text === ''){
        alert("買うもの欄を入力してください");
        return;
    }else{
        const data = { inp: text };
        window.fetch("http://localhost:4000/create",{
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
    <div className="item-form-wrapper">
        <p className="form-label">買うもの</p>
        <form onSubmit={createNewData}>
            <input type="text" autoFocus value={text} onChange={handleInputChange}/>
            <input type="submit" value="作成する"/>
        </form>
    </div>
  );
};
export default NewData;