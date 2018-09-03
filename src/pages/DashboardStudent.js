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
      },
      {
        intNo: '',
        fname: 'jiraphat',
        lname: 'khupanit',
        nname: 'focus',
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
      },
    ],
    resultList: [],
    columnData: [
      { value: 'intNo', text: 'Intania' },
      { value: 'fname', text: 'FirstName' },
      { value: 'lname', text: 'Lastname' },
      { value: 'nname', text: 'Nickname' },
      { value: 'address', text: 'Address' },
      { value: 'road', text: 'Street' },
      { value: 'subdistrict', text: 'Subdistrict' },
      { value: 'district', text: 'District' },
      { value: 'province', text: 'Province' },
      { value: 'PostCode', text: 'Zipcode' },
      { value: 'homeNo', text: 'Home nu' },
      { value: 'telNo', text: 'Tel.' },
      { value: 'telNo2', text: 'Tel.2' },
      { value: 'Email', text: 'Email' },
      { value: 'workplace', text: 'Work' },
      { value: 'gender', text: 'Gender' },
      { value: 'position', text: 'Position Player' },
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
    const { userInfo, mode, list, resultList, columnData } = this.state;
    return (
      <div className="row" style={{ height: '80%', fontSize: '24px', marginTop: '50px' }}>
        <div className="col-md-4 sidenav" style={{ height: '94vh', paddingLeft: '32px' }}>
          <div style={{ width: '100%', textAlign: 'center', paddingTop: '48px' }}>Student Menu</div>
          <div className="input-group" style={{ margin: 0 }}>
            <span className="input-group-addon">
              <i className="glyphicon glyphicon-tag" />
            </span>
            <input
              style={{ borderLeftTopRadius: 0, borderLeftBottomRadius: 0 }}
              type="text"
              className="form-control"
              ref="courseNo"
              placeholder="Course NO. : 88888888"
              value={this.state.courseNo}
              onChange={data => this.handleSearch(data)}
            />
          </div>
          <Divider />
          <List>
            {resultList.map(item => (
              <ListItem
                primaryText={item.nname + '  ' + item.fname + '  ' + item.lname}
                onClick={() => this.handleListClicked(item)}
              />
            ))}
          </List>
        </div>
        <div className="col-md-8" style={{ paddingRight: '32px' }}>
          <Card>
            {
              <CardText style={{ height: '78vh', width: '100%' }}>
                {/* {this.state.mode === '' && <SearchPanel />} */}
                {this.state.mode === 'Profile' && (
                  <UserProfile
                    userInfo={userInfo}
                    onModeChange={this.handleModeChanged}
                    columnData={columnData}
                  />
                )}
                {this.state.mode === 'Edit' && (
                  <Grade
                    userInfo={userInfo}
                    onCancel={this.handleModeChanged}
                    onSubmit={this.handleEdit}
                    columnData={columnData}
                  />
                )}
              </CardText>
            }
          </Card>
        </div>
      </div>
    );
  };
}

export default DashboardStudent;
