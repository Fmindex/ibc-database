import '../style/dashboard.css';

import { Card, CardActions, CardHeader, CardMedia, CardText, CardTitle } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import React, { Component } from 'react';
import axios from 'axios';

import ActionDescription from 'material-ui/svg-icons/action/description';
import ActionPayment from 'material-ui/svg-icons/action/payment';
import ActionSchedule from 'material-ui/svg-icons/action/schedule';
import ActionUser from 'material-ui/svg-icons/action/face';
import ActionToc from 'material-ui/svg-icons/action/toc';
// import Grade from '../container/grade';
import HomePage from './HomePage';
import Request from '../container/request';
import Payment from '../container/payment';
import UserProfile from '../container/profile';
import SearchPanel from '../container/search_panel';
import SocialSchool from 'material-ui/svg-icons/social/school';
import Table from '../container/new_table';
import Divider from 'material-ui/Divider/Divider';
import Grade from '../container/addGrade';

class DashboardStudent extends Component {
  state = {
    userInfo: {},
    mode: '',
    list: [
      {
        intNo: '',
        fname: 'ekkalak',
        lname: 'leelasornchai',
        nname: 'fm',
        address: 'adsfvbfdgedasdgnhmfyjnhtdgfsdftyjgh',
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
      },
    ],
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

  componentDidMount() {
    // axios.get('http://localhost:3000/course/all').then(res => {

    // 	this.setState({
    // 		courses: res.data.courses
    // 	}, () => {
    // 		let pickSection = [];
    // 		res.data.courses.map((course, index) => {
    // 			pickSection.push(course.sections[0].section_id);
    // 		});
    // 		this.setState({
    // 			pickSection: pickSection
    // 		}, () => this.updateResult());
    // 	});
    // });
    this.setState({
      resultList: this.state.list,
    });
  }

  handleSearch = data => {
    const keyword = data.target.value;
    let temp = [];
    temp = this.state.list.filter(item => {
      return (
        item.fname.includes(keyword) || item.lname.includes(keyword) || item.nname.includes(keyword)
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
              userInfo={userInfo}
              onCancel={this.handleModeChanged}
              onSubmit={this.handleEdit}
              columnData={columnData}
              mode={mode}
            />
          )}
          {mode === 'Add' && (
            <Grade
              userInfo={{}}
              onCancel={this.handleModeChanged}
              onSubmit={this.handleEdit}
              columnData={columnData}
              mode={mode}
            />
          )}
        </div>
      </div>
    );
  };
}

export default DashboardStudent;
