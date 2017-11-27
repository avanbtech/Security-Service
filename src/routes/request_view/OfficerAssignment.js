import React, { Component } from 'react'
import { Button,  Form, Message } from 'semantic-ui-react'
import TextField from "material-ui/TextField"
import DatePicker from "material-ui/DatePicker"
import s from './RequestView.scss'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  customWidth: {
    width: 600,
  },
};



class OfficerAssignment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name === undefined ? '' : props.name,
      nameError: '',
      location: props.location === undefined ? '' : props.location,
      locationError:'',
      guardType: props.guardType === undefined ? 'Regular' : props.guardType,
      grdType: props.guardType === undefined ? 'Regular' : props.guardType,
      dispatchNumber: props.dispatchNumber === undefined ? '' : props.distpachNumber,
      dispatchNumberError:'',
      phone: props.phone === undefined ? '' : props.phone,
      phoneError:'',
      remarks: props.remarks === undefined ? '' : props.remarks,
      officerAssignedDatesObjects: [
        { id: 0, instance: null },
      ],
    };
  }

  change = e =>{
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleChangeGuardType = (event, index, value) => {
    this.setState({guardType: value});
    this.setState({grdType: value});
  };

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
    const { value } = this.state;
    return (
      <div className={s.officer}>
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
          <Form.Field required>
            <label> Guard Type </label>
            <SelectField
              maxHeight={300}
              name='guardType'
              value={this.state.guardType}
              onChange={this.handleChangeGuardType}
              style={styles.customWidth}
              autoWidth={true}
            >
              <MenuItem key={1} primaryText={'Regular'} value={'Regular' } />
              <MenuItem key={2} primaryText={'Special'} value={'Special' } />
              <MenuItem key={3} primaryText={'SSEP'} value={'SSEP' } />
            </SelectField>
            <Form.Input type="hidden" name="grdType" value={this.state.grdType} />
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
