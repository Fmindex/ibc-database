import React, { Component } from 'react';

import DashboardStudent from './pages/DashboardStudent';
import DashboardTeacher from './pages/DashboardTeacher';
import NavBar from './container/nav_bar';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { Image } from 'rebass';

class App extends Component {
  render() {
    return (
      <div
        style={{
          padding: '30px 10% 30px 10%',
          fontFamily: 'Courier New',
          backgroundImage: 'linear-gradient(#FFFFFF, #8B0000)',
          height: '100vh',
        }}
      >
        <div
          style={{ fontSize: '48px', textAlign: 'center', color: '#000000', fontWeight: 'bold' }}
        >
          Intania basketball club
        </div>
        <DashboardStudent id="focus" />
      </div>
    );
  }
}

export default App;
