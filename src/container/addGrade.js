import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
import { Flex, Box } from 'rebass';
class ShowList extends Component {
  state = {
    editedInfo: this.props.userInfo,
    errorIntNo: false,
  };

  handleUpdateInput = (key, value) => {
    this.setState({
      editedInfo: {
        ...this.state.editedInfo,
        [key]: value,
      },
    });
  };

  handleSubmit = async () => {
    this.setState({ errorIntNo: true });
    if (this.props.mode == 'Add') {
      const res = await axios.post('http://localhost:3000/student/addMember', {
        id: this.props.nextId + 1,
        ...this.state.editedInfo,
      });
    } else {
      console.log(this.state.editedInfo);
      const res = await axios.post('http://localhost:3000/student/edit', {
        id: this.props.userInfo.ID,
        editedInfo: { ...this.props.mock, ...this.state.editedInfo },
      });
    }

    this.props.onSubmit(this.state.editedInfo);
  };

  render() {
    const { editedInfo, errorIntNo } = this.state;
    return (
      <div style={{ overflow: 'scroll', fontSize: '16px' }}>
        <Flex flexWrap="wrap" mt={4} my={3}>
          {this.props.columnData.map(item => (
            <Box width={1 / item.w} my={2} px={3}>
              <div style={{ fontSize: '14px', color: 'grey' }}>{item.text}</div>
              <TextField
                error={errorIntNo && item.value == 'intNo'}
                id="name-error"
                onChange={i => this.handleUpdateInput(item['value'], i.target.value)}
                value={editedInfo[item.value]}
                style={{ fontFamily: 'Courier New', width: '100%', fontWeight: 'bold' }}
              />
            </Box>
          ))}
        </Flex>
        <Flex justifyContent="flex-end" mb={4} my={3}>
          <Box align="right" mx={3}>
            {errorIntNo && (
              <div
                style={{ display: 'inline', color: 'red', fontSize: '12px', marginRight: '8px' }}
              >
                กรุณากรอกเลขรุ่น (intania)
              </div>
            )}
            <RaisedButton
              label="Cancel"
              primary={true}
              onClick={() => this.props.onCancel(this.props.mode === 'Edit' ? 'Profile' : '')}
              style={{ marginRight: '16px' }}
            />
            <RaisedButton label="Submit" primary={true} onClick={() => this.handleSubmit()} />
          </Box>
        </Flex>
      </div>
    );
  }
}

export default ShowList;
