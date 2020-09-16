import React from 'react';
import './App.css';
import Input from './containers/Input/Input';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import MainInfo from './containers/MainInfo/MainInfo';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Input} />
          <Route path='/shows/:id/' component={MainInfo}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
