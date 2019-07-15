import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReduxPromise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux'; // named import
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './App';
import { rootReducer } from './reducers/root.reducer';

import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login/Login';
import Logout from './Components/Logout/Logout';
import Parts from './Components/Parts/parts';
import auth from './security/HOC/auth.hoc';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>

    <BrowserRouter>
      <App>
        <Switch>
          <Route path="/(|login)" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/parts" component={auth(Parts)} />

        </Switch>

      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
