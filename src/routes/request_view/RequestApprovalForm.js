import React, { Component } from 'react'
import { Button,  Form, Message } from 'semantic-ui-react'
import TextField from "material-ui/TextField"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';

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
      const { value } = this.state
      return (
        <MuiThemeProvider>
          <Form action="/security_view/approve"
                method="post">
            <h2> Request Information </h2>
            <Form.Group width='equal'>
              <Form.Field>
                <p>Date: {this.props.requestInfo.date}</p>
              </Form.Field>
              <Form.Field>
                <p>Department: {this.props.requestInfo.user.department}</p>
              </Form.Field>
            </Form.Group>

            <Form.Group width='equal'>
              <Form.Field>
                <p>Requested By: {this.props.requestInfo.user.requestBy}</p>
              </Form.Field>
              <Form.Field>
                <p>SFU ID: {this.props.requestInfo.user.sfuBCID}</p>
              </Form.Field>
            </Form.Group>

            <Form.Group width='equal'>
              <Form.Field>
                <p>Type/Name of Event: {this.props.requestInfo.event.nameOfEvent}</p>
              </Form.Field>
              <Form.Field>
                <p>Licensed: {this.props.requestInfo.user.licensed}</p>
              </Form.Field>
            </Form.Group>

            <Form.Group width='equal'>
              <Form.Field>
                <p>Location of Event: {this.props.requestInfo.event.location}</p>
              </Form.Field>
              <Form.Field>
                <p># of Attendees: {this.props.requestInfo.event.numberOfAttendees}</p>
              </Form.Field>
            </Form.Group>

            <Form.Group width='equal'>
              <Form.Field>
                <p>Event Date: {this.props.requestInfo.event.eventDates}</p>
              </Form.Field>
            </Form.Group>

            <Form.Group width='equal'>
              <Form.Field>
                <p>Authorized By: {this.props.requestInfo.authorizedBy}</p>
              </Form.Field>
              <Form.Field>
                <p>Phone: {this.props.requestInfo.authorizedPhone}</p>
              </Form.Field>
            </Form.Group>

            <Form.Button onClick = {e => this.onSubmit(e)} onChange = {this.FormExampleSuccess}>Submit</Form.Button>
          </Form>
        </MuiThemeProvider>
      )
    }
}

export default RequestApprovalForm
