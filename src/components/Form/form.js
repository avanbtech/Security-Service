import React from 'react';
import Main from '../../components/Main';
import s from './form.scss';

export default class From extends React.Component{
	state={
		date:'',
		department:'',
		requestBy:'',
		phone:'',
		fax:'',
		nameOfEvent:'',
		licensed:'',
		location:'',
		eventDate:'',
		detail:'',
		firstName: '',
		lastName:'',
		userName:'',
		email:'',
		id:'',
		numberOfAttendees:'',
		time:''

	}

	change = e =>{
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	onSubmit = e =>{
		e.preventDefault();
	}

	render() {
		return (
			<div className={s.root}>
      			<div className={s.container}>
					<form
            action="/customer"
            method="post">
							<input
								name = "date"
								placeholder = "Date"
								value = {this.state.date}
								onChange = {e => this.change(e)}
							/>
							<input
								name = "department"
								placeholder = "Department"
								value = {this.state.department}
								onChange = {e => this.change(e)}
							/>
							<br />
							<input
								name = "firstName"
								placeholder = "First name"
								value = {this.state.firstName}
								onChange = {e => this.change(e)}
							/>
							<input
								name = "requestBy"
								placeholder = "Request By"
								value = {this.state.requestby}
								onChange = {e => this.change(e)}
							/>
							<input
								name = "id"
								placeholder = "SFU ID or BCDL"
								value = {this.state.id}
								onChange = {e => this.change(e)}
							/>
							<br />
							<input
								name = "phone"
								placeholder = "Phone"
								value = {this.state.phone}
								onChange = {e => this.change(e)}
							/>
							<input
								name = "fax"
								placeholder = "Fax"
								value = {this.state.fax}
								onChange = {e => this.change(e)}
							/>
							<input
								name = "email"
								placeholder="Email"
								value={this.state.email}
								onChange={e => this.change(e)}
							/>
							<br />
							<input
								name = "nameOfEvent"
								placeholder="Name of Event"
								value={this.state.nameOfEvent}
								onChange={e => this.change(e)}
							/>
							<input
								name = "licensed"
								placeholder = "Licensed"
								value = {this.state.licensed}
								onChange = {e => this.change(e)}
							/>
							<br />
							<input
								name = "location"
								placeholder = "Location of Event"
								value = {this.state.location}
								onChange = {e => this.change(e)}
							/>
							<input
								name = "location"
								placeholder = "Location of Event"
								value = {this.state.location}
								onChange = {e => this.change(e)}
							/>
							<input
								name = "numberOfAttendees"
								placeholder = "# of Attendees"
								value = {this.state.numberOfAttendees}
								onChange = {e => this.change(e)}
							/>
							<br />
							<input
								name = "eventDate"
								placeholder = "Event Date"
								value = {this.state.eventDate}
								onChange = {e => this.change(e)}
							/>
							<input
								name = "time"
								placeholder = "Time(s)"
								value = {this.state.time}
								onChange = {e => this.change(e)}
							/>
							<br />
							<input
								name = "detail"
								placeholder = "Details"
								value = {this.state.detail}
								onChange = {e => this.change(e)}
							/>


							<p> Authorized Deatils </p>

							<input
								name = "firstName"
								placeholder = "First name"
								value = {this.state.firstName}
								onChange = {e => this.change(e)}
							/>
							<input
								name = "lastName"
								placeholder = "Last name"
								value = {this.state.lastName}
								onChange = {e => this.change(e)}
							/>
							<input
								name = "userName"
								placeholder = "User name"
								value = {this.state.firstName}
								onChange = {e => this.change(e)}
							/>

							<br />
							<button>Submit </button>
					</form>
				</div>
			</div>
		);
	}
}
