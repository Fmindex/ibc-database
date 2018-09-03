import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../style/style.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const MyApp = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(
  <MyApp />,
  document.getElementById('root')
);
