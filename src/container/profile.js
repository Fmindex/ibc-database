import React, { Component } from 'react';
import axios from 'axios';
import { Flex, Box } from 'rebass';
import RaisedButton from 'material-ui/RaisedButton';

export default class Profile extends Component {
  render = () => {
    return (
      <div>
        <div
          style={{
            overflow: 'scroll',
            height: '100%',
            fontSize: '18px',
            padding: '16px',
          }}
        >
          <Flex flexWrap="wrap" justifyContent="flex-end">
            {this.props.columnData.map(item => (
              <Box width={1 / item.w} my={3}>
                <div style={{ color: 'grey', display: 'inline' }}> {item.text} : </div>
                <div style={{ display: 'inline', fontWeight: 'bold' }}>
                  {this.props.userInfo[item.value] ? this.props.userInfo[item.value] : undefined}
                </div>
              </Box>
            ))}
            <Box align="center" mt={1}>
              <RaisedButton
                label="Edit"
                primary={true}
                onClick={() => this.props.onModeChange('Edit')}
              />
            </Box>
          </Flex>
        </div>
      </div>
    );
  };
}
