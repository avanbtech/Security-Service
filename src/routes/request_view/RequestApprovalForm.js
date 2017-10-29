import React, { Component } from 'react'
import { Button,  Form, Message } from 'semantic-ui-react'
import TextField from "material-ui/TextField"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import s from './form.scss';

const styles = {
  customWidth: {
    width: 600,
  },
};



class RequestApprovalForm extends Component {
  state = {
    supervisor:'',
    supervisorError:'',
    distribution:'',
    distributionError:'',
    guardRegularRate:'',
    guardRegularRateError:'',
    guardRegularHours:'',
    guardRegularHoursError:'',
    guardOTRate:'',
    guardOTRateError:'',
    guardOTHours:'',
    guardOTHoursError:'',
    scspRegularRate:'',
    scspRegularRateError:'',
    scspRegularHours:'',
    scspRegularHoursError:'',
    scspOTRate:'',
    scspOTRateError:'',
    scspOTHours:'',
    scspOTHoursError:'',
    totalGuardBillable:'',
    totalGuardBillableError:'',
    totalSCSPBillable:'',
    totalSCSPBillableError:'',
    preparedBy:'',
    preparedByError:'',
    signature:'',
    signatureError:'',
    remarks:''
  }


  change = e =>{
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  validate = () => {
    let isError = false;
    const errors = {};

    this.setState({
        ...this.state,
        ...errors
    });
    return isError;
  };

  onSubmit = e =>{
    const error = this.validate();
    if (error){
      e.preventDefault();
    }
  };


  handleChange = (e, { value }) => this.setState({ value })


  handleChangeMenu = (event, index, value) => this.setState({value});

  handleDistibutionChange = (e, {value}) => {
    this.setState({distribution: {value}.value});
  }

    render() {
      const { value } = this.state;
      return (
        <table style={{width:"100%"}}>
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
          </tbody>
        </table>

      )
    }
}

export default RequestApprovalForm
