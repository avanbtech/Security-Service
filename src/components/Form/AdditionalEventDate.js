import React, { Component } from 'react';
import { Button,  Form, Message } from 'semantic-ui-react';
import TextField from "material-ui/TextField";
import DatePicker from "material-ui/DatePicker";
import s from './EventDates.scss';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  customWidth: {
    width: 600,
  },
};



class AdditionalEventDate extends Component {
  constructor(props) {
    super(props);


    this.state = {
      secondDate: props.secondDate === undefined ? '' : props.secondDate,
      secondDateError: '',
      thirdDate: props.thirdDate === undefined ? '' : props.thirdDate,
      thirdDateError:'',
      fourthDate: props.fourthDate === undefined ? '' : props.fourthDate,
      fourthDateError: '',
      fifthDate: props.fifthDate === undefined ? '' : props.fifthDate,
      fifthDateError: '',
    };
  }

  change = e =>{
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSecondDateChange = (event, date) => {
    this.setState({
      secondDate: date,
    });
  };

  handleThirdDateChange = (event, date) => {
    this.setState({
      thirdDate: date,
    });
  };

  handleFourthDateChange = (event, date) => {
    this.setState({
      fourthDate: date,
    });
  };

  handleFifthDateChange = (event, date) => {
    this.setState({
      fifthDate: date,
    });
  };

  validate = () => {
    let isError = false;
    const errors = {};
    var todaysDate = new Date();
    todaysDate.setHours(0,0,0,0);


    if (Date.parse(this.state.secondDate) - Date.parse(todaysDate) < 0) {
      isError = true;
      errors.secondDateError = "The Second Event date can not be the past day";
    } else {
      errors.startDateError = "";
    }


    if (Date.parse(this.state.thirdDate) - Date.parse(todaysDate) < 0) {
      isError = true;
      errors.thirdDateError = "The Third Event date can not be the past day";
    } else {
      errors.thirdDateError = "";
    }

    if (Date.parse(this.state.fourthDate) - Date.parse(todaysDate) < 0) {
      isError = true;
      errors.fourthDateError = "The Fourth Event date can not be the past day";
    } else {
      errors.fourthDateError = "";
    }
    if (Date.parse(this.state.fifthDate) - Date.parse(todaysDate) < 0) {
      isError = true;
      errors.fifthDateError = "The Fifth Event date can not be the past day";
    } else {
      errors.fifthDateError = "";
    }


    if ((Date.parse(this.state.secondDate) - Date.parse(this.state.thirdDate)) == 0){
      isError = true;
      errors.secondDateError = "The Second Event date can not be the same the third";
    }
    else if ((Date.parse(this.state.secondDate) - Date.parse(this.state.fourthDate)) == 0){
      isError = true;
      errors.secondDateError = "The Second Event date can not be the same the fourth";
    }
    else if ((Date.parse(this.state.secondDate) - Date.parse(this.state.fifthDate)) == 0){
      isError = true;
      errors.secondDateError = "The Second Event date can not be the same the fifth";
    }
    else {
      errors.secondDateError = '';
    }

    if ((Date.parse(this.state.thirdDate) - Date.parse(this.state.fourthDate)) == 0){
      isError = true;
      errors.thirdDateError = "The Third Event date can not be the same the fourth";
    }
    else if ((Date.parse(this.state.thirdDate) - Date.parse(this.state.fifthDate)) == 0){
      isError = true;
      errors.thirdDateError = "The Third Event date can not be the same the fifth";
    }
    else {
      errors.thirdDateError = '';
    }

    if ( (Date.parse(this.state.fourthDate) - Date.parse(this.state.fifthDate)) == 0){
      isError = true;
      errors.fourthDateError = "The Fourth Event date can not be the same the fifth";
    }
    else {
      errors.fourthDateError = '';
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
          <Form.Field>
            <label> Second date </label>
            <DatePicker
              name='secondDate'
              hintText="secondDate"
              value={this.state.secondDate}
              onChange={this.handleSecondDateChange}
              errorText={this.state.secondDateError}
              container="inline" />
          </Form.Field>
          <Form.Field>
            <label> Third date </label>
            <DatePicker
              name='thirdDate'
              hintText="thirdDate"
              value={this.state.thirdDate}
              onChange={this.handleThirdDateChange}
              errorText={this.state.thirdDateError}
              container="inline" />
          </Form.Field>
          <Form.Field>
            <label> Fourth date </label>
            <DatePicker
              name='fourthDate'
              hintText="fourthDate"
              value={this.state.fourthDate}
              onChange={this.handleFourthDateChange}
              errorText={this.state.fourthDateError}
              container="inline" />
          </Form.Field>
          <Form.Field>
            <label> Fifth date </label>
            <DatePicker
              name='fifthDate'
              hintText="fifthDate"
              value={this.state.fifthDate}
              onChange={this.handleFifthDateChange}
              errorText={this.fifthDateError}
              container="inline" />
          </Form.Field>
        </Form.Group>
      </div>
    )
  }
}

export default AdditionalEventDate
