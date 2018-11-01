import React from 'react'
import ReactDOM from 'react-dom'
import Login from './component/login'
import Main from './component/main'
import Register from './component/register'
import {Provider} from 'react-redux';
import {HashRouter , Route ,Switch} from 'react-router-dom';
import store from './redux/store';

ReactDOM.render(
  (
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
          <Route  component={Main}/>
        </Switch>
      </HashRouter>
    </Provider>

  )
  ,document.getElementById('root')
);


