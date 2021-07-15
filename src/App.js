//  react-router-dom 추가
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom';


import ProductList from './components/ProductList';
import Register from './components/register/Register';

function App() {
  return (
    <BrowserRouter>
      <div className="Menu">
        <div>
          <Link to=''>HOME</Link>
        </div>
        <div>
          <Link to='/productList'>상품목록</Link>
        </div>
        <div>
          <Link to='/register'>회원가입</Link>
        </div>
      </div>

      <Switch>
        <Route path="/" exact></Route>
        <Route path="/productList" component={ProductList}></Route>
        <Route path="/register" component={Register}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
