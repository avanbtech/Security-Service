import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import DatePicker from 'material-ui/DatePicker';
import s from './RequestView.scss';
import TextField from "material-ui/TextField"

class OfficerAssignedDate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      guard_id: props.guard_id,
      assignedDate: props.assignedDate === undefined ? new Date() : props.assignedDate,
      assignedDateError: '',
      startTime: props.startTime === undefined ? '' : props.startTime,
      startTimeError: '',
      endTime: props.endTime === undefined ? '' : props.endTime,
      endTimeError: '',
    };
  }

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleAssignedDateChange = (event, date) => {
    this.setState({
      assignedDate: date,
    });
  };

  handleChangeStartTime = (event, value) => {
    this.setState({startTime: value});
  };

  handleChangeEndTime = (event, value) => {
    this.setState({endTime: value});
  };

  validate = () => {
    let isError = false;
    const errors = {};

    if (this.state.assignedDate.length == 0) {
      isError = true;
      errors.assignedDateError = 'A date must be specified.';
    } else {
      errors.assignedDateError = '';
    }

    var isValidStartTime = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])?$/.test(this.state.startTime);
    if (!isValidStartTime) {
      isError = true;
      errors.startTimeError = 'A valid start time must be specified.';
    } else {
      errors.startTimeError = '';
    }

    var isValidEndTime = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])?$/.test(this.state.endTime);
    if (!isValidEndTime) {
      isError = true;
      errors.endTimeError = 'A valid end time must be specified.';
    } else {
      errors.endTimeError = '';
    }

    if(isValidEndTime && isValidStartTime) {
      let str1 = this.state.startTime + ':00';
      let str2 = this.state.endTime + ':00';
      if(str1 > str2) {
        isError = true;
        errors.startTimeError = 'Start time should be before end time.';
      }
    }

    this.setState({
      ...this.state,
      ...errors,
    });
    return isError;
  };

  render() {
    return (
      <Form.Group widths='equal'>
        <Form.Field required>
          <label> Start date </label>
          <DatePicker
            name={'guard' + this.state.guard_id + '[assignedDate]'}
            errorText={this.state.assignedDateError}
            hintText="Start Date"
            value={this.state.assignedDate}
            onChange={this.handleAssignedDateChange}
            container="inline"
            className={s.date_body}
          />
        </Form.Field>
        <Form.Field required>
          <label> Start Time </label>
          <TextField
            fullWidth={true}
            name={'guard' + this.state.guard_id + '[startTime]'}
            placeholder='HH:MM'
            onChange = {this.handleChangeStartTime}
            value = {this.state.startTime}
            errorText={this.state.startTimeError}/>
        </Form.Field>
        <Form.Field required>
          <label> End Time </label>
          <TextField
            fullWidth={true}
            name={'guard' + this.state.guard_id + '[endTime]'}
            placeholder='HH:MM'
            onChange = {this.handleChangeEndTime}
            value = {this.state.endTime}
            errorText={this.state.endTimeError}/>
        </Form.Field>
      </Form.Group>
    );
  }
}

export default OfficerAssignedDate
