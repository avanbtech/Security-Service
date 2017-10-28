import React, { Component } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './form.scss';

const styles = {
  customWidth: {
    width: 600,
  },
};



class RequestApproval extends Component {

  constructor(props) {
    super(props);
    this.state = { visible: false };
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({ visible: ! this.state.visible });
  }

  render() {
    const { value } = this.state;
    return (
      <div>
        <div>
          <table className={s.req_detail_table}>
            <tbody>
            <tr>
              <td>Date: {this.props.requestInfo.date}</td>
              <td>Department: {this.props.requestInfo.user.department}</td>
            </tr>
            <tr>
              <td>Requested By: {this.props.requestInfo.user.requestBy}</td>
              <td>SFU ID: {this.props.requestInfo.user.sfuBCID}</td>
            </tr>
            <tr>
              <td>Type/Name of Event: {this.props.requestInfo.event.nameOfEvent}</td>
              <td>Licensed: {this.props.requestInfo.user.licensed}</td>
            </tr>
            <tr>
              <td>Location of Event: {this.props.requestInfo.event.location}</td>
              <td># of Attendees: {this.props.requestInfo.event.numberOfAttendees}</td>
            </tr>
            <tr>
              <td>Event Date: {this.props.requestInfo.event.eventDates}</td>
              <td></td>
            </tr>
            <tr>
              <td>Authorized By: {this.props.requestInfo.authorizedBy}</td>
              <td>Phone: {this.props.requestInfo.authorizedPhone}</td>
            </tr>
            <tr>
              <td>
                <div className={s.action_container}>
                  <p><a href={"ServiceView/approve/" + this.props.requestID}>Approve</a></p>
                </div>
                <div className={s.action_container}>
                  <p><a href={"ServiceView/reject/" + this.props.requestID}>Reject</a></p>
                </div>
              </td>
              <td></td>
            </tr>
            </tbody>
          </table>
        </div>
    </div>
    )
  }
}

export default withStyles(RequestApproval, s);
