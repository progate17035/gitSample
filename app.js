const express = require('express');
const mysql = require('mysql');
const app = express();

app.use(express.static('public'));
app.use(express.json());//POSTパラメータを受け取る為の記述 この記述がないとPOSTで送られたbodyが空になる
app.use(express.urlencoded({extended: false}));//フォームの値を受け取るための定型文 extended: trueにすると複数のフォーム値が送られてた際に配列になる?

//localhost:4000（express側）とlocalhost:3000（React側）と分けた為、接続がCORSとなりエラーが発生：下記の記述が必要
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'KitaharaMySQL',
  database: 'list_app'
});

connection.connect((err) => {
  if (err) {
    console.log('error connecting: ' + err.stack);
    return;
  }
  console.log('success');
});

//localhost:4000/postsにアクセスするとitemsテーブルの内容を返す
app.get('/posts', (req, res) => {
  connection.query(
    'SELECT * FROM items',
    (error, results) => {
      res.send(results);
    }
  );
});

//localhost:4000/createにアクセスするとitemsテーブルにデータを登録
app.post('/create', (req, res) => {
  console.log(req.body.inp);
  connection.query(
    'INSERT INTO items (name) VALUES (?)',
    [req.body.inp],
    (error, results) => {
      res.send(results);
    }
  );
});

//localhost:4000/deleteにアクセスしデータ削除しlocalhost:4000/postsにリダイレクト
app.post('/delete/:id', (req, res) => {
  connection.query(
    'DELETE FROM items WHERE id = ?',
    [req.params.id],
    (error, results) => {
      res.redirect('/posts');
    }
  );
});

//localhost:4000/updateにアクセスするとitemsテーブルにデータを更新
app.post('/update', (req, res) => {
  connection.query(
    'UPDATE items set name = ? WHERE id = ?',
    [req.body.name, req.body.id],
    (error, results) => {
      res.send(results);
    }
  );
});

/*************テスト用*********************
app.post('/posts', (req, res) => {
  connection.query(
    'SELECT * FROM items',
    (error, results) => {
      res.send(results);
    }
  );
});

app.get('/hello', (req, res) => {
  connection.query(
    'SELECT * FROM users',
    (error, results) => {
      res.render('hello.ejs',{user:results[0]});
    }
  );
});

app.post('/create', (req, res) => {
  console.log(req.body.inp);
  connection.query(
    'INSERT INTO items (name) VALUES (?)',
    [req.body.inp],
    (error, results) => {
      res.send(results);
    }
  );
});

app.post('/delete/:id', (req, res) => {
  console.log("呼び出し成功");
  console.log(req.params.id);
  connection.query(
    'DELETE FROM items WHERE id = ?',
    [req.params.id],
    (error, results) => {
      res.send(results);
    }
  );
});
*/

//reactの3000と分けるために4000を指定
app.listen(4000);