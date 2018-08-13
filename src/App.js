import React, { Component } from 'react';
import Header from './components/header/index';
import Form from './routes/form/index';
import List from './routes/list/index';
import companyProfile from './routes/companyprofile/index';
import './style/index.css';
import { Switch, Route } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path='/list' component={List}/>
          <Route path='/' component={Form}/>
          <Route path='/' component={companyProfile}/>
        </Switch>

      </div>
    );
  }
}

export default App;
