import React, { Component } from 'react';
import { Button,  Form, Message } from 'semantic-ui-react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePicker from 'material-ui/DatePicker';
import s from './ServiceView.scss';


function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function addYear(date, addYear) {
  var year = date.getFullYear();
  var month = date.getMonth();
  var day = date.getDate();
  return new Date(year + addYear, month, day)
}

class FilterForm extends Component {

  constructor(props) {
    super(props);

    let start_date = new Date();
    if (props.filterObject.start_date !== '') {
      start_date = addDays(new Date(props.filterObject.start_date), 1);
    }
    else {
      start_date = addYear(start_date, -1);
    }
    start_date.setFullYear(start_date.getFullYear());
    start_date.setHours(0, 0, 0, 0);
    let end_date = new Date();
    if (props.filterObject.end_date !== '') {
      end_date = addDays(new Date(props.filterObject.end_date), 1);
    }
    else {
      end_date = addYear(end_date, 1);
    }

    end_date.setFullYear(end_date.getFullYear());
    end_date.setHours(0, 0, 0, 0);

    this.state = {
      start_date:start_date,
      end_date:end_date
    };
  }

  handleChangeStartDate = (event, date) => {
    this.setState({
      start_date: date,
    });
  }

  handleChangeEndDate = (event, date) => {
    this.setState({
      end_date: date,
    });
  }

  render(){
    return (
      <MuiThemeProvider>
        <Form action="/ServiceView" method="GET">
          <div className={s.filter}>
            <h4 className={s.filter_title}>Request Date</h4>
            <div className={s.filter_options}>
              <DatePicker
                hintText="From"
                container="inline"
                name="start_date"
                defaultDate={this.state.start_date}
                onChange={this.handleChangeStartDate}
                textFieldStyle={{
                  width: '100%',
                }}
              />
              <DatePicker
                hintText="To"
                container="inline"
                name="end_date"
                defaultDate={this.state.end_date}
                onChange={this.handleChangeEndDate}
                textFieldStyle={{
                  width: '100%',
                }}
              />
            </div>
          </div>
          <div className={s.filter}>
            <h4 className={s.filter_title}>Location</h4>
            <div className={s.filter_options}>
              <Form.Checkbox defaultChecked={this.props.filterObject.includeBurnaby}
                             name = "include_burnaby" label='Burnaby' value="yes"/>
              <Form.Checkbox defaultChecked={this.props.filterObject.includeSurrey}
                             name = "include_surrey" label='Surrey' value="yes"/>
              <Form.Checkbox defaultChecked={this.props.filterObject.includeVancouver}
                             name = "include_vancouver" label='Vancouver' value="yes"/>
            </div>
          </div>
          <div className={s.button_container}>
            <Form.Button>Refine</Form.Button>
          </div>
        </Form>
      </MuiThemeProvider>
    );
  }
}

export default FilterForm
