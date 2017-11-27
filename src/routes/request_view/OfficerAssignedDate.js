import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import DatePicker from 'material-ui/DatePicker';
import s from './RequestView.scss';


class OfficerAssignedDate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: props.startDate === undefined ? new Date() : props.startDate,
      endDate: props.endDate === undefined ? new Date() : props.endDate,
    };
  }

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleStartDateChange = (event, date) => {
    this.setState({
      startDate: date,
    });
  };

  handleEndDateChange = (event, date) => {
    this.setState({
      endDate: date,
    });
  };

  validate = () => {
    let isError = false;
    const errors = {};

    let startDateValid = true;
    if (this.state.startDate.length == 0) {
      isError = true;
      errors.startDateError = 'An start date must be specified.';
      startDateValid = false;
    } else {
      errors.startDateError = '';
    }

    let endDateValid = true;
    if (this.state.endDate.length == 0) {
      isError = true;
      errors.endDateError = 'An end date must be specified';
      endDateValid = false;
    } else {
      errors.endDateError = '';
    }

    if (startDateValid && endDateValid) {
      const startDate = new Date(this.state.startDate);
      startDate.setHours(0, 0, 0, 0);
      const endDate = new Date(this.state.endDate);
      endDate.setHours(0, 0, 0, 0);
      if (startDate > endDate) {
        errors.startDateError = 'Start date cannot be after end date.';
        isError = true;
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
            name='startDate'
            errorText={this.state.startDateError}
            hintText="Start Date"
            value={this.state.startDate}
            onChange={this.handleStartDateChange}
            container="inline"
            className={s.date_body}
          />
        </Form.Field>
        <Form.Field required>
          <label> End date </label>
          <DatePicker
            name='endDate'
            hintText="End Date"
            errorText={this.state.endDateError}
            value={this.state.endDate}
            onChange={this.handleEndDateChange}
            container="inline"
            className={s.date_body}
          />
        </Form.Field>
      </Form.Group>
    );
  }
}

export default OfficerAssignedDate
