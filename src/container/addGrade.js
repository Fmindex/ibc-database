import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Cookies from 'universal-cookie';
import axios from 'axios';
import { userInfo } from 'os';

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
    this.props.onSubmit();
  };

  render() {
    const { editedInfo } = this.state;
    return (
      <div style={{ overflow: 'scroll', padding: '32px', fontSize: '16px' }}>
        {this.props.columnData.map(item => (
          <div className="row">
            {item.text} :
            <TextField
              hintText="ex. 2110101"
              onChange={i => this.handleUpdateInput(item['value'], i.target.value)}
              value={editedInfo[item.value]}
              style={{ marginLeft: '16px' }}
            />
          </div>
        ))}
        <div className="row" style={{ marginLeft: '64px' }}>
          <RaisedButton
            label="Cancel"
            primary={true}
            onClick={() => this.props.onCancel('Profile')}
          />

          <RaisedButton label="Submit" primary={true} onClick={() => this.handleSubmit()} />
        </div>
      </div>
    );
  }
}

export default ShowList;
