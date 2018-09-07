import 'react-select/dist/react-select.css';

import React, { Component } from 'react';
import Select from 'react-select';
import RaisedButton from 'material-ui/RaisedButton';

class SearchPanel extends Component {
  render() {
    return (
      <div
        style={{
          overflow: 'scroll',
          height: '100%',
          fontSize: '100px',
          textAlign: 'center',
          paddingTop: '150px',
        }}
      >
        บาสนายช่าง
        <div
          style={{
            overflow: 'scroll',
            height: '100%',
            fontSize: '32px',
            textAlign: 'center',
            paddingTop: '0px',
          }}
        >
          9/9/2561
        </div>
      </div>
    );
  }
}

export default SearchPanel;
