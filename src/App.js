import React, { Component } from 'react';

import DashboardStudent from './pages/DashboardStudent';
import DashboardTeacher from './pages/DashboardTeacher';
import NavBar from './container/nav_bar';
import axios from 'axios';
import Cookies from 'universal-cookie';

class App extends Component {
  render() {
    return (
      <div style={{ overflow: 'hidden', height: '80%', paddingLeft: '10%', paddingRight: '10%' }}>
        <DashboardStudent id="focus" />
      </div>
    );
  }
}

export default App;
