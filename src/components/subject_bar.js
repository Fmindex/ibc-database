import React, { Component } from 'react';

class SubjectBar extends Component {
    render() {
            if(this.props.period == 0) {
                return (
                    <div className="col-xs-1 grayline"><p> </p></div>
                );
            }
            let per = "col-xs-" + this.props.period.toString() + " no-padding";
            return (

                 <div className={per}><p className="rcorners1 grayline">{this.props.name}</p></div>
                 
            );
    }
}

export default SubjectBar;
