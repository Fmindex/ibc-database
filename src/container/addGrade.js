import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Cookies from 'universal-cookie';
import axios from 'axios';
import { userInfo } from 'os';
import { Flex, Box } from 'rebass';
class ShowList extends Component {
  state = {
    editedInfo: this.props.userInfo,
  };

  handleUpdateInput = (key, value) => {
    this.setState({
      editedInfo: {
        ...this.state.editedInfo,
        [key]: value,
      },
    });
  };

  handleSubmit = () => {
    // axios
    //   .post('http://localhost:3000/instructor/course/grade/?token=' + cookies.get('token'), {
    //     course_id: this.state.courseId,
    //     year: this.state.year,
    //     semester: this.state.semester,
    //     section_id: this.state.section,
    //     student_id: this.state.studentId,
    //     grade: grade,
    //   })
    //   .then(res => {
    //     console.log(res.data);
    //     if (res.data == 'DENY') {
    //       alert('You are not teaching this section');
    //     } else if (res.data == 'STUDENT NOT FOUND') {
    //       alert('This student not found');
    //     } else if (res.data == 'OK') {
    //       alert('SUCCESS!');
    //     }
    //   });

    this.props.onSubmit(this.state.editedInfo);
  };

  render() {
    const { editedInfo } = this.state;
    return (
      <div style={{ overflow: 'scroll', fontSize: '16px' }}>
        <Flex flexWrap="wrap" mt={4} my={3}>
          {this.props.columnData.map(item => (
            <Box width={1 / item.w} my={2} px={3}>
              <div style={{ fontSize: '14px', color: 'grey' }}>{item.text}</div>
              <TextField
                onChange={i => this.handleUpdateInput(item['value'], i.target.value)}
                value={editedInfo[item.value]}
                style={{ fontFamily: 'Courier New', width: '100%', fontWeight: 'bold' }}
              />
            </Box>
          ))}
        </Flex>
        <Flex justifyContent="flex-end" mb={4} my={3}>
          <Box align="right" mx={3}>
            <RaisedButton
              label="Cancel"
              primary={true}
              onClick={() => this.props.onCancel('Profile')}
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
