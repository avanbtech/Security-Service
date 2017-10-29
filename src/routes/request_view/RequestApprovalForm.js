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
        <MuiThemeProvider>
          <Form action="ServiceView/approve" method="post">
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
                  value={this.state.value}
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
              </Form.Field>
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Field required>
                <label> Guard regular rate </label>
                <TextField
                  fullWidth={true}
                  name='guard_regular_rate'
                  placeholder='Rate'
                  onChange = {e => this.change(e)}
                  value = {this.state.guardRegularRate}
                  errorText={this.state.guardRegularRateError}/>
              </Form.Field>
              <Form.Field required>
                <label> # Regular hours </label>
                <TextField
                  fullWidth={true}
                  name='guard_regular_hours'
                  placeholder='Regular Hours'
                  onChange = {e => this.change(e)}
                  value = {this.state.guardRegularRate}
                  errorText={this.state.guardRegularRateError}/>
              </Form.Field>
              <Form.Field required>
                <label> Guard overtime rate </label>
                <TextField
                  fullWidth={true}
                  name='guard_ot_rate'
                  placeholder='OT Rate'
                  onChange = {e => this.change(e)}
                  value = {this.state.guardOTRate}
                  errorText={this.state.guardOTRateError}/>
              </Form.Field>
              <Form.Field required>
                <label> # Overtime hours </label>
                <TextField
                  fullWidth={true}
                  name='guard_ot_hours'
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
                  name='scsp_regular_rate'
                  placeholder='Rate'
                  onChange = {e => this.change(e)}
                  value = {this.state.scspRegularRate}
                  errorText={this.state.scspRegularRateError}/>
              </Form.Field>
              <Form.Field required>
                <label> # Regular hours </label>
                <TextField
                  fullWidth={true}
                  name='scsp_regular_hours'
                  placeholder='Regular Hours'
                  onChange = {e => this.change(e)}
                  value = {this.state.scspRegularRate}
                  errorText={this.state.scspRegularRateError}/>
              </Form.Field>
              <Form.Field required>
                <label> SCSP overtime rate </label>
                <TextField
                  fullWidth={true}
                  name='scsp_ot_rate'
                  placeholder='OT Rate'
                  onChange = {e => this.change(e)}
                  value = {this.state.scspOTRate}
                  errorText={this.state.scspOTRateError}/>
              </Form.Field>
              <Form.Field required>
                <label> # Overtime hours </label>
                <TextField
                  fullWidth={true}
                  name='scsp_ot_hours'
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
                  name='total_guard_billable'
                  placeholder='Total billable'
                  onChange = {e => this.change(e)}
                  value = {this.state.totalGuardBillable}
                  errorText={this.state.totalGuardBillableError}/>
              </Form.Field>
              <Form.Field required>
                <label> Total billable for SCSP </label>
                <TextField
                  fullWidth={true}
                  name='total_scsp_billable'
                  placeholder='Regular Hours'
                  onChange = {e => this.change(e)}
                  value = {this.state.totalSCSPBillable}
                  errorText={this.state.totalSCSPBillableError}/>
              </Form.Field>
              <Form.Field required>
                <label> Grand total: 0 </label>
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
              <Form.Field required>
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
            <Form.Button onClick = {e => this.onSubmit(e)} onChange = {this.FormExampleSuccess}>Submit</Form.Button>
          </Form>
        </MuiThemeProvider>
      )
    }
}

export default RequestApprovalForm
