import React, { Component } from 'react'
import { Button,  Form, Message } from 'semantic-ui-react'
import TextField from "material-ui/TextField"
import DatePicker from "material-ui/DatePicker"
import s from './RequestView.scss'

const styles = {
  customWidth: {
    width: 600,
  },
};



class OfficerAssignment extends Component {
  state = {
    name:'',
    nameError:'',
    location:'',
    locationError:'',
    dispatchNumber:'',
    dispatchNumberError:'',
    startDate:'',
    endDate:'',
    phone:'',
    phoneError:'',
    remarks:'',
  }

  change = e =>{
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  validate = () => {
    let isError = false;
    const errors = {};

    if(this.state.name.replace('/\s/g','').length == 0){
      isError = true;
      errors.nameError = "This field cannot be empty";
    }
    else {
      errors.nameError = "";
    }

    if(this.state.location.replace('/\s/g','').length == 0){
      isError = true;
      errors.locationError = "This field cannot be empty";
    }
    else {
      errors.locationError = "";
    }

    if (isNaN(this.state.dispatchNumber) || this.state.dispatchNumber.replace(/\s/g, "").length == 0){
      isError = true;
      errors.dispatchNumberError = 'Dispatch number should be numeric';
    }
    else {
      errors.dispatchNumberError = '';
    }

    var phoneno = /^\d{10}$/;
    var phone2 = /^\d{3}-\d{3}-\d{4}$/;
    if(!this.state.phone.match(phoneno) && !this.state.phone.match(phone2))
    {
      isError = true;
      errors.phoneError = "Phone number should be in XXXXXXXXXX or XXX-XXX-XXXX format";
    }
    else
    {
      errors.phoneError = "";
    }

    this.setState({
        ...this.state,
        ...errors
    });
    return isError;
  };
  render() {
    console.log('OfficeAssign');
    const { value } = this.state;
    return (
      <div className={s.officer}>
        <h4>Security Officer/SCSP Information</h4>
        <Form.Group widths='equal'>
          <Form.Field required>
            <label> Dispatch number </label>
            <TextField
              fullWidth={true}
              name='dispatchNumber'
              placeholder='Dispatch Number'
              onChange = {e => this.change(e)}
              value = {this.state.dispatchNumber}
              errorText={this.state.dispatchNumberError}/>
          </Form.Field>
          <Form.Field required>
            <label> Location </label>
            <TextField
              fullWidth={true}
              name='location'
              placeholder='Location'
              onChange = {e => this.change(e)}
              value = {this.state.location}
              errorText={this.state.locationError}/>
          </Form.Field>
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Field required>
            <label> Start date </label>
            <DatePicker
              name='startDate'
              hintText="Start Date"
              container="inline" />
          </Form.Field>
          <Form.Field required>
            <label> End date </label>
            <DatePicker
              name='endDate'
              hintText="End Date"
              container="inline" />
          </Form.Field>
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Field required>
            <label> Name </label>
            <TextField
              fullWidth={true}
              name='name'
              placeholder='Name'
              onChange = {e => this.change(e)}
              value = {this.state.name}
              errorText={this.state.nameError}/>
          </Form.Field>
          <Form.Field required>
            <label> Telephone </label>
            <TextField
              fullWidth={true}
              name='phone'
              placeholder='xxx-xxx-xxxx'
              onChange = {e => this.change(e)}
              value = {this.state.phone}
              errorText={this.state.phoneError}/>
          </Form.Field>
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Field>
            <label> Remarks </label>
            <TextField
              fullWidth={true}
              name='remarks'
              placeholder=''
              onChange = {e => this.change(e)}
              value = {this.state.remarks}
            />
          </Form.Field>
        </Form.Group>
      </div>
    )
  }
}

export default OfficerAssignment
