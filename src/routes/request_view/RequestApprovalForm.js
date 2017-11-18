import React, { Component } from 'react'
import { Button,  Form, Message } from 'semantic-ui-react'
import TextField from "material-ui/TextField"

import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import OfficerAssignment from './OfficerAssignment';
import s from './RequestView.scss'

const styles = {
  customWidth: {
    width: 600,
  },
};



class RequestApprovalForm extends Component {

  state = {
    supervisor:'',
    supervisorError:'',
    distribution:'Security Finance',
    distributionOther:'',
    distributionList:'Security Finance',
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
    totalGuardBillable:'0',
    totalGuardBillableError:'',
    totalSCSPBillable:'0',
    totalSCSPBillableError:'',
    grandTotal:'0',
    preparedBy:'',
    preparedByError:'',
    signature:'',
    signatureError:'',
    remarks:'',
    guardForms:[{
      id:0}],
    officerObjects:[
      {id: 0, toBeRendered: true, instance: null}
    ],
    lastOfficerID:0
  }

  onSubmit = e => {
    const error = this.validate();
    if (error) {
      e.preventDefault();
    }
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleChangeDistribution = (event, index, value) => {
    this.setState({distributionList: value});
    this.setState({distribution: value});
  }

  handleChangeGuardTotal = e => {
    this.change(e);
    this.state.grandTotal = '0';
    if(!isNaN(e.target.value) && !isNaN(this.state.totalSCSPBillable)) {
      let total = parseFloat(e.target.value) + parseFloat(this.state.totalSCSPBillable);
      if(!isNaN(total)){
        this.state.grandTotal = '0';
      }
    }
  }

  handleChangeSCSPTotal = e => {
    this.change(e);
    if(!isNaN(e.target.value) && !isNaN(this.state.totalGuardBillable)) {
      let total = parseFloat(e.target.value) + parseFloat(this.state.totalGuardBillable);
      this.state.grandTotal = '' + total;
    }
    else {
      this.state.grandTotal = '0';
    }
  }

  validate = () => {
    let isError = false;
    const errors = {};

    if(this.state.supervisor.replace('/\s/g','').length == 0) {
      isError = true;
      errors.supervisorError = "This field cannot be empty";
    }
    else {
      errors.supervisorError = "";
    }

    if(this.state.distributionList.replace('/\s/g','').length == 0) {
      isError = true;
      errors.distributionError = "This field cannot be empty";
    }
    else {
      errors.distributionError = "";
    }

    if (isNaN(this.state.guardRegularRate) || this.state.guardRegularRate.replace(/\s/g, "").length == 0) {
      isError = true;
      errors.guardRegularRateError = 'Guard regular rate should be numeric';
    }
    else {
      errors.guardRegularRateError = '';
    }

    if (isNaN(this.state.guardRegularHours) || this.state.guardRegularHours.replace(/\s/g, "").length == 0) {
      isError = true;
      errors.guardRegularHoursError = 'Guard regular hours should be numeric';
    }
    else {
      errors.guardRegularHoursError = '';
    }

    if (isNaN(this.state.guardOTRate) || this.state.guardOTRate.replace(/\s/g, "").length == 0) {
      isError = true;
      errors.guardOTRateError = 'Guard overtime rate should be numeric';
    }
    else {
      errors.guardOTRateError = '';
    }

    if (isNaN(this.state.guardOTHours) || this.state.guardOTHours.replace(/\s/g, "").length == 0) {
      isError = true;
      errors.guardOTHoursError = 'Guard overtime hours should be numeric';
    }
    else {
      errors.guardOTHoursError = '';
    }

    if (isNaN(this.state.scspRegularRate) || this.state.scspRegularRate.replace(/\s/g, "").length == 0) {
      isError = true;
      errors.scspRegularRateError = 'SCSP regular rate should be numeric';
    }
    else {
      errors.scspRegularRateError = '';
    }

    if (isNaN(this.state.scspRegularHours) || this.state.scspRegularHours.replace(/\s/g, "").length == 0) {
      isError = true;
      errors.scspRegularHoursError = 'SCSP regular hours should be numeric';
    }
    else {
      errors.scspRegularHoursError = '';
    }

    if (isNaN(this.state.scspOTRate) || this.state.scspOTRate.replace(/\s/g, "").length == 0) {
      isError = true;
      errors.scspOTRateError = 'SCSP overtime rate should be numeric';
    }
    else {
      errors.scspOTRateError = '';
    }

    if (isNaN(this.state.scspOTHours) || this.state.scspOTHours.replace(/\s/g, "").length == 0) {
      isError = true;
      errors.scspOTHoursError = 'SCSP overtime hours should be numeric';
    }
    else {
      errors.scspOTHoursError = '';
    }

    if (isNaN(this.state.totalGuardBillable) || this.state.totalGuardBillable.replace(/\s/g, "").length == 0) {
      isError = true;
      errors.totalGuardBillableError = 'Total guard billable should be numeric';
    }
    else {
      errors.totalGuardBillableError = '';
    }

    if (isNaN(this.state.totalSCSPBillable) || this.state.totalSCSPBillable.replace(/\s/g, "").length == 0) {
      isError = true;
      errors.totalSCSPBillableError = 'Total guard billable should be numeric';
    }
    else {
      errors.totalSCSPBillableError = '';
    }

    if (this.state.preparedBy.replace('/\s/g','').length == 0){
      isError = true;
      errors.preparedByError = "This field cannot be empty";
    }
    else {
      errors.preparedByError = "";
    }

    if (this.state.signature.replace('/\s/g','').length == 0){
      isError = true;
      errors.signatureError = "This field cannot be empty";
    }
    else {
      errors.signatureError = "";
    }

    let hasChildError = false;
    this.state.officeObjects.map(officer => {
      if (officer !== null) {
        hasChildError = hasChildError || officer.validate();
      }
    });
    isError = isError || hasChildError;
    this.setState({
        ...this.state,
        ...errors,
    });

    return isError;
  };

  removeGuard = (officerId, e) => {
    e.preventDefault();
    const newOfficerObjects = this.state.officerObjects;
    let indexToBeRemoved = -1;
    for (let i = 0; i < newOfficerObjects.length; i++) {
      if (newOfficerObjects[i].id === officerId) {
        indexToBeRemoved = i;
        break;
      }
    }
    if (indexToBeRemoved > -1) {
      for (let j = indexToBeRemoved; j < newOfficerObjects.length - 1; j++) {
        newOfficerObjects[j].instance.setState({
          ...newOfficerObjects[j + 1].instance.state,
        });
      }
      newOfficerObjects.splice(newOfficerObjects.length - 1, 1);
      this.setState({
        officerObjects: newOfficerObjects,
      });
    }
  };

  addGuard = e => {
    e.preventDefault();
    ++this.state.lastOfficerID;
    // adding a new officer
    const newOfficerObjects = this.state.officerObjects;
    newOfficerObjects.push({
      id: this.state.lastOfficerID,
      toBeRendered: true,
      instance: null,
    });
    this.setState({
      officerObjects: newOfficerObjects
    });
  }

  render() {
    const { value } = this.state;
    let officerRows = [];
    for (let i = 0; i < this.state.officerObjects.length; i++) {
      const currentOfficerObject = this.state.officerObjects[i];
      officerRows.push(
        <div>
          <div className={s.action_container}>
            <Form.Button onClick = {e => this.removeGuard(this.state.officerObjects[i].id, e)}>
              Remove Guard
            </Form.Button>
          </div>
          <OfficerAssignment
            ref={
              instance => {
                currentOfficerObject.instance = instance;
              }
            }
          />
        </div>
      );
    }

    return (
      <Form action="/ServiceView/approve" method="post">
        <br/>
        <h4>Please fill out following form</h4>
        <Form.Group widths='equal'>
          <Form.Field required>
            <label> Receiving Security Supervisor </label>
            <TextField
              fullWidth={true}
              name='supervisor'
              placeholder='Receiving Security Supervisor'
              onChange = {e => this.change(e)}
              value = {this.state.supervisor}
              errorText={this.state.supervisorError}/>
          </Form.Field>
          <Form.Field required>
            <label> Distribution </label>
            <SelectField
              maxHeight={300}
              name='distributionList'
              value={this.state.distributionList}
              onChange={this.handleChangeDistribution}
              style={styles.customWidth}
              autoWidth={true}
            >
              <MenuItem key={1} primaryText={'Security Finance'} value={'Security Finance' } />
              <MenuItem key={2} primaryText={'Security - Supervisor'} value={'Security - Supervisor' } />
              <MenuItem key={3} primaryText={'Dispatch'} value={'Dispatch' } />
              <MenuItem key={4} primaryText={'SOC Supervisor'} value={'SOC Supervisor' } />
              <MenuItem key={5} primaryText={'Concord Rep'} value={'Concord Rep' } />
              <MenuItem key={6} primaryText={'Other'} value={'Other' } />
            </SelectField>
            <Form.Field>
              <label> Please specify distribution if Other is selected: </label>
              <TextField
                fullWidth={true}
                name='distributionOther'
                placeholder=''
                onChange = {e => this.change(e)}
                disabled={this.state.distribution !== 'Other'}
                value = {this.state.distributionOther}
                errorText={this.state.distributionOtherError}/>
            </Form.Field>
            <Form.Input type="hidden" name="distribution" value={this.state.distribution} />
          </Form.Field>
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Field required>
            <label> Guard regular rate </label>
            <TextField
              fullWidth={true}
              name='guardRegularRate'
              placeholder='Rate'
              onChange={e => this.change(e)}
              value={this.state.guardRegularRate}
              errorText={this.state.guardRegularRateError}/>
          </Form.Field>
          <Form.Field required>
            <label> # Regular hours </label>
            <TextField
              fullWidth={true}
              name='guardRegularHours'
              placeholder='Regular Hours'
              onChange = {e => this.change(e)}
              value = {this.state.guardRegularHours}
              errorText={this.state.guardRegularHoursError}/>
          </Form.Field>
          <Form.Field required>
            <label> Guard overtime rate </label>
            <TextField
              fullWidth={true}
              name='guardOTRate'
              placeholder='OT Rate'
              onChange = {e => this.change(e)}
              value = {this.state.guardOTRate}
              errorText={this.state.guardOTRateError}/>
          </Form.Field>
          <Form.Field required>
            <label> # Overtime hours </label>
            <TextField
              fullWidth={true}
              name='guardOTHours'
              placeholder='Overtime Hours'
              onChange = {e => this.change(e)}
              value = {this.state.guardOTHours}
              errorText={this.state.guardOTHoursError}/>
          </Form.Field>
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Field required>
            <label> SCSP regular rate </label>
            <TextField
              fullWidth={true}
              name='scspRegularRate'
              placeholder='Rate'
              onChange = {e => this.change(e)}
              value = {this.state.scspRegularRate}
              errorText={this.state.scspRegularRateError}/>
          </Form.Field>
          <Form.Field required>
            <label> # Regular hours </label>
            <TextField
              fullWidth={true}
              name='scspRegularHours'
              placeholder='Regular Hours'
              onChange = {e => this.change(e)}
              value = {this.state.scspRegularHours}
              errorText={this.state.scspRegularHoursError}/>
          </Form.Field>
          <Form.Field required>
            <label> SCSP overtime rate </label>
            <TextField
              fullWidth={true}
              name='scspOTRate'
              placeholder='OT Rate'
              onChange = {e => this.change(e)}
              value = {this.state.scspOTRate}
              errorText={this.state.scspOTRateError}/>
          </Form.Field>
          <Form.Field required>
            <label> # Overtime hours </label>
            <TextField
              fullWidth={true}
              name='scspOTHours'
              placeholder='Overtime Hours'
              onChange = {e => this.change(e)}
              value = {this.state.scspOTHours}
              errorText={this.state.scspOTHoursError}/>
          </Form.Field>
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Field required>
            <label> Total billable for guard </label>
            <TextField
              fullWidth={true}
              name='totalGuardBillable'
              placeholder='Total billable'
              onChange = {e => this.handleChangeGuardTotal(e)}
              value = {this.state.totalGuardBillable}
              errorText={this.state.totalGuardBillableError}/>
          </Form.Field>
          <Form.Field required>
            <label> Total billable for SCSP </label>
            <TextField
              fullWidth={true}
              name='totalSCSPBillable'
              placeholder='Regular Hours'
              onChange = {e => this.handleChangeSCSPTotal(e)}
              value = {this.state.totalSCSPBillable}
              errorText={this.state.totalSCSPBillableError}/>
          </Form.Field>
          <Form.Field>
            <label> Grand total: </label>
            <TextField
              fullWidth={true}
              disabled={true}
              value = {this.state.grandTotal}/>
          </Form.Field>
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Field required>
            <label> Prepared By </label>
            <TextField
              fullWidth={true}
              name='preparedBy'
              placeholder='Prepared By'
              onChange = {e => this.change(e)}
              value = {this.state.preparedBy}
              errorText={this.state.preparedByError} />
          </Form.Field>
          <Form.Field required>
            <label> Signature </label>
            <TextField
              fullWidth={true}
              name='signature'
              placeholder='Signature'
              onChange = {e => this.change(e)}
              value = {this.state.signature}
              errorText={this.state.signatureError} />
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
        {officerRows}
        <div className={s.action_container}>
          <Form.Button
            onClick = {e => this.addGuard(e)}>Add Guard</Form.Button>
        </div>
        <input type='hidden' name='requestID' value={this.props.requestID}/>
        <input type='hidden' name='email' value={this.props.email}/>
        <Form.Button
          onClick = {e => this.onSubmit(e)}>Submit</Form.Button>
      </Form>
    )
  }
}

export default RequestApprovalForm
