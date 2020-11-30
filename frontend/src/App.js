import React from "react";
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Top from './Top';
import List from './List';
import New from "./New";
import Edit from "./Edit";
//テスト用ページ
import Test from './Test';


/*
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };

    //サーバーサイド(expressのapp.js[app.get('/posts'・・・])を呼び出している
    fetch("http://localhost:4000/posts")
      .then(response => response.json())
      .then(posts => this.setState({ posts }));
  }

  render() {
    return (
      <div>
        <h1>This is your todo list!</h1>
        <ul>
          {this.state.posts.map(post => (
            <li>
              <p>{post.id}</p>
              <p>{post.name}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
*/
const App = (props) => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path='/' component={Top} />
          <Route path='/list' component={List} />
          <Route path='/new' component={New} />
          <Route path='/edit' component={Edit} />
          {/* パラメータを受け取るパターン　受け取り側はprops.match.params.idで値を受け取れる
          <Route path='/edit/:id' component={Edit} /> 
          */}
          {/* テスト用*/}
            <Route path='/test' component={Test} />
          
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default App;