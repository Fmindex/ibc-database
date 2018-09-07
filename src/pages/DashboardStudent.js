import '../style/dashboard.css';
import { List, ListItem } from 'material-ui/List';
import React, { Component } from 'react';
import axios from 'axios';

import UserProfile from '../container/profile';
import SearchPanel from '../container/search_panel';
import Grade from '../container/addGrade';

class DashboardStudent extends Component {
  mock = {
    intNo: '',
    nname: '',
    fname: '',
    lname: '',
    address: '',
    road: '',
    subdistrict: '',
    district: '',
    province: '',
    PostCode: '',
    homeNo: '',
    telNo: '',
    telNo2: '',
    Email: '',
    workplace: '',
    gender: '',
    position: '',
  };
  state = {
    userInfo: {},
    mode: '',
    list: [],
    resultList: [],
    columnData: [
      { value: 'intNo', text: 'Intania', w: 2 },
      { value: 'nname', text: 'Nickname', w: 2 },
      { value: 'fname', text: 'FirstName', w: 2 },
      { value: 'lname', text: 'Lastname', w: 2 },
      { value: 'address', text: 'Address', w: 1 },
      { value: 'road', text: 'Street', w: 2 },
      { value: 'subdistrict', text: 'Subdistrict', w: 2 },
      { value: 'district', text: 'District', w: 2 },
      { value: 'province', text: 'Province', w: 2 },
      { value: 'PostCode', text: 'Zipcode', w: 2 },
      { value: 'homeNo', text: 'Home Number', w: 2 },
      { value: 'telNo', text: 'Tel.', w: 2 },
      { value: 'telNo2', text: 'Tel.2', w: 2 },
      { value: 'Email', text: 'Email', w: 2 },
      { value: 'workplace', text: 'Work', w: 2 },
      { value: 'gender', text: 'Gender', w: 2 },
      { value: 'position', text: 'Position Player', w: 2 },
      // { value: 'status', text: 'status' },
    ],
  };

  async componentDidMount() {
    const res = await axios.get('http://localhost:3000/student');
    console.log(res.data);
    this.setState({
      resultList: res.data,
      list: res.data,
    });
    // for (let i = 0; i < res.data.length; i++) {
    //   const refs = await axios.post('http://localhost:3000/student/edit', {
    //     id: res.data[i].ID,
    //     editedInfo: { id: i + 1 },
    //   });
    //   console.log(refs);
    // }
  }

  handleSearch = data => {
    const keyword = data.target.value;
    console.log(keyword);
    let temp = this.state.list;
    temp = this.state.list.filter(item => {
      return (
        (item.fname ? item.fname.includes(keyword) : false) ||
        (item.lname ? item.lname.includes(keyword) : false) ||
        (item.nname ? item.nname.includes(keyword) : false)
      );
    });
    this.setState({
      resultList: temp,
    });
  };

  handleListClicked = item => {
    this.setState({
      userInfo: item,
      mode: 'Profile',
    });
  };

  handleModeChanged = mode => {
    this.setState({
      mode: mode,
    });
  };

  handleEdit = newInfo => {
    this.setState({
      userInfo: {
        ...this.state.userInfo,
        ...newInfo,
      },
      mode: 'Profile',
    });
  };
  render = () => {
    const { userInfo, list, resultList, columnData, mode } = this.state;
    return (
      <div
        className=" sidenav"
        style={{
          fontSize: '24px',
          marginTop: '20px',
          height: '80vh',
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: 'rgba(256,256,256,0.8)',
        }}
      >
        <div
          className="col-md-4 "
          style={{ overflow: 'scroll', height: '100%', padding: '24px 16px' }}
        >
          <div className="input-group" style={{ margin: 0 }}>
            <span className="input-group-addon">
              <i className="glyphicon glyphicon-search" />
            </span>
            <input
              style={{ borderLeftTopRadius: 0, borderLeftBottomRadius: 0 }}
              type="text"
              className="form-control"
              ref="courseNo"
              placeholder="what's your name?"
              value={this.state.courseNo}
              onChange={data => this.handleSearch(data)}
            />
          </div>
          <List>
            {resultList.map(item => (
              <ListItem onClick={() => this.handleListClicked(item)}>
                <div style={{ fontFamily: 'Courier New' }}>
                  <div style={{ display: 'inline', fontWeight: 'bold' }}>{item.nname + '  '}</div>
                  {item.fname + '  ' + item.lname}
                </div>
              </ListItem>
            ))}
            <ListItem onClick={() => this.handleModeChanged('Add')}>
              <div
                style={{
                  fontFamily: 'Courier New',
                  textAlign: 'center',
                }}
              >
                <i className="glyphicon glyphicon-plus" />
                <div style={{ display: 'inline', fontWeight: 'bold', paddingLeft: '16px' }}>
                  Add new member
                </div>
              </div>
            </ListItem>
          </List>
        </div>
        <div
          className="col-md-8 "
          style={{
            overflow: 'scroll',
            height: '100%',
            marginLeft: '0px',
            backgroundColor: 'rgba(256,256,256,0.9)',
            // borderLeft: '1px solid grey',
          }}
        >
          {mode === '' && <SearchPanel />}
          {mode === 'Profile' && (
            <UserProfile
              userInfo={userInfo}
              onModeChange={this.handleModeChanged}
              columnData={columnData}
            />
          )}
          {mode === 'Edit' && (
            <Grade
              userInfo={{ ...this.mock, ...userInfo }}
              onCancel={this.handleModeChanged}
              onSubmit={this.handleEdit}
              columnData={columnData}
              mode={mode}
              mock={this.mock}
            />
          )}
          {mode === 'Add' && (
            <Grade
              userInfo={this.mock}
              onCancel={this.handleModeChanged}
              onSubmit={this.handleEdit}
              columnData={columnData}
              mode={mode}
              nextId={list.length}
            />
          )}
        </div>
      </div>
    );
  };
}

export default DashboardStudent;
