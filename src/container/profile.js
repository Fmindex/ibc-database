import React, { Component } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';

export default class Profile extends Component {
  render = () => {
    return (
      <div className="col-xs-12" style={{ overflow: 'scroll', height: '100%' }}>
        <Table>
          <TableBody displayRowCheckbox={false}>
            {this.props.columnData.map(item => (
              <TableRow>
                <TableRowColumn style={{ fontSize: 16, width: 150 }}>{item.text} :</TableRowColumn>
                <TableRowColumn style={{ fontSize: 16 }}>
                  {this.props.userInfo[item.value] ? this.props.userInfo[item.value] : undefined}
                </TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="row" style={{ marginLeft: '64px' }}>
          <RaisedButton
            label="Edit"
            primary={false}
            onClick={() => this.props.onModeChange('Edit')}
          />
        </div>
      </div>
    );
  };
}
