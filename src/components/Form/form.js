/* Form.js
** Holds the logic and base HTML and JavaScript for the status form
*/

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



class FormExampleSubcomponentControl extends Component {
  state = {
    date:'',
    dateError:'',
    departmentList:'',
    department:'',
    requestBy:'',
    requestByError:'',
    id:'',
    phone:'',
    phoneError:'',
    fax:'',
    faxError:'',
    email:'',
    emailError:'',
    nameOfEvent:'',
    nameOfEventError:'',
    location:'',
    locationError:'',
    numberOfAttendees:'',
    numberOfAttendeesError:'',
    eventDate:'',
    eventDateError:'',
    time:'',
    timeError:'',
    endtime:'',
    endtimeError:'',
    detail:'',
    accountCode:'',
    accountCodeError:'',
    authorizedBy:'',
    authorizedByError:'',
    authorizedID:'',
    authorizedDate:'',
    authorizedDateError:'',
    authorizedSignature:'',
    authorizedSignatureError:'',
    authorizedPhone:'',
    authorizedPhoneError:'',
    licensed:'',
    licensedError:''
  }


  change = e =>{
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  validateDate = (inputDate) => {
    var requestDate = /([20]\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
    if (!inputDate.match(requestDate) || Date.parse(inputDate) - Date.parse(new Date()) < 0){
      return false;
    }
    return true;
  }

  validate = () => {
    let isError = false;
    const errors = {};
    var todaysDate = new Date();
    todaysDate.setHours(0,0,0,0);

    if (this.state.requestBy.length < 3 ){
      isError = true;
      errors.requestByError = "Full name should be provided";
    }
    else {
      errors.requestByError = "";
    }

    /*if (!this.validateDate(this.state.date)){
      isError = true;
      errors.dateError = "Date should be in YYYY-MM-DD format";
    }
    else{
      errors.dateError = "";
    }*/
    if ((Date.parse(this.state.date) - Date.parse(todaysDate)) < 0 || (this.state.date.length == 0)){
      isError = true;
      errors.dateError = "This field cannot be empty";
    }
    else {
      errors.dateError = "";
    }

    /*if (this.state.id.replace(/\s/g, "").length == 0){
      isError = true;
      errors.idError = "SFU ID or BCDL should be provided";
    }
    else{
      errors.idError = "";
    }*/


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

    if(this.state.fax.length > 0 && !this.state.fax.match(phoneno) && !this.state.fax.match(phone2))
    {
      isError = true;
      errors.faxError = "Fax number should be in XXXXXXXXXX or XXX-XXX-XXXX format";
    }
    else
    {
      errors.faxError = "";
    }

    var emailTest = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!emailTest.test(this.state.email)) {
      isError = true;
      errors.emailError = 'A valid email should be provided';
    }
    else {
      errors.emailError = '';
    }

    if (this.state.nameOfEvent.replace(/\s/g, "").length == 0 ){
      isError = true;
      errors.nameOfEventError = 'Name of event should be provided';
    }
    else {
      errors.nameOfEventError = '';
    }

    if (this.state.location.replace(/\s/g, "").length == 0 ){
      isError = true;
      errors.locationError = 'Event location should be provided';
    }
    else {
      errors.locationError = '';
    }

    if (isNaN(this.state.numberOfAttendees) || this.state.numberOfAttendees.replace(/\s/g, "").length == 0){
      isError = true;
      errors.numberOfAttendeesError = 'Number of attendees should be provided';
    }
    else {
      errors.numberOfAttendeesError = '';
    }

    /*if(!this.validateDate(this.state.eventDate))
    {
      isError = true;
      errors.eventDateError = "Date should be in YYYY-MM-DD format";
    }
    else {
      errors.eventDateError = "";
    }*/

    if ((Date.parse(this.state.eventDate) - Date.parse(todaysDate) < 0) ||this.state.eventDate.length == 0){
      isError = true;
      errors.eventDateError = "This field cannot be empty";
    }
    else {
      errors.eventDateError = "";
    }

    /*var eventTime = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]/;
    if (!this.state.time.match(eventTime) || this.state.time.replace(/\s/g, "").length == 0){
      isError = true;
      errors.timeError = "Time should be in HH:MM format";
    }
    else{
      errors.timeError = "";
    }*/
    if (this.state.time.length == 0){
      isError = true;
      errors.timeError = "Time should be in HH:MM format";
    }
    else{
      errors.timeError = "";
    }
    if (this.state.endtime.length == 0){
      isError = true;
      errors.endtimeError = "Time should be in HH:MM format";
    }
    else{
      errors.endtimeError = "";
    }
    var accountCode1 = /^\d{4}-\d{2}-\d{4}-\d{5}$/;
    var accountCode2 = /^\d{4}-\d{2}-?\d{8}$/;
    if (!this.state.accountCode.match(accountCode1) && !this.state.accountCode.match(accountCode2)){
      isError = true;
      errors.accountCodeError = 'Account code should be in OOOO-FF-DDDD-PPPPP or OOOO-FF-JJJJJJJJ format';
    }
    else {
      errors.accountCodeError = '';
    }

    /*if (!this.validateDate(this.state.authorizedDate)){
      isError = true;
      errors.authorizedDateError = "Date should be in YYYY-MM-DD format";
    }
    else{
        errors.authorizedDateError = "";
    }*/

    if ((Date.parse(this.state.authorizedDate) - Date.parse(todaysDate) < 0)||this.state.authorizedDate.length == 0){
      isError = true;
      errors.authorizedDateError = "This field cannot be empty";
    }
    else {
      errors.authorizedDateError = "";
    }

    if (this.state.authorizedBy.replace(/\s/g, "").length == 0 ){
      isError = true;
      errors.authorizedByError = 'Authorized person should be provided';
    }
    else {
      errors.authorizedByError = '';
    }

    /*if (this.state.authorizedID.replace(/\s/g, "").length == 0 ){
      isError = true;
      errors.authorizedIDError = 'Authorized ID should be provided';
    }
    else {
      errors.authorizedIDError = '';
    }*/

    if(!this.state.authorizedPhone.match(phoneno) && !this.state.authorizedPhone.match(phone2))
    {
      isError = true;
      errors.authorizedPhoneError = "Phone number should be in XXXXXXXXXX or XXX-XXX-XXXX format";
    }
    else {
      errors.authorizedPhoneError = "";
    }

    if(this.state.licensed.length == 0){
      isError = true;
      errors.licensedError = "This field cannot be empty";
    }
    else {
      errors.licensedError = "";
    }

    if(this.state.authorizedSignature.replace('/\s/g','').length == 0){
      isError = true;
      errors.authorizedSignatureError = "This field cannot be empty";
    }
    else {
      errors.authorizedSignatureError = "";
    }

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


  handleLicensedChecked = (e, {value}) => {
    this.setState({licensed: { value }.value});
  }

  handleDepartmentChange = (event, index, value) => {
    this.setState({departmentList: value});
    this.setState({department: value});
  }

  handleChangedate = (event, date) => {
    this.setState({
      date: date,
    });
  }

  handleChangeEvent = (event, date) => {
    this.setState({
      eventDate: date,
    });
  }

  handleChangeAuthorizeDate = (event, date) => {
    this.setState({
      authorizedDate: date,
    });
  }

  handleChangeTimePicker24 = (event, date) => {
    this.setState({time: date});
  };
  handleChangeEndTimePicker24 = (event, date) => {
    this.setState({endtime: date});
  };

  FormExampleSuccess = () => (
    <Form success>
      <Form.Input label='Email' placeholder='joe@schmoe.com' />
      <Message
        success
        header='Form Completed'
        content="You're all signed up for the newsletter"
      />
      <Button>Submit</Button>
    </Form>
  )


    render() {
      const { value } = this.state
      return (
        <MuiThemeProvider>
          <Form action="/customer"
                method="post">
            <h2> Request Information </h2>
            <Form.Group widths='equal'>
              <Form.Field required>
                <label> Date </label>
                  <DatePicker
                    fullWidth={true}
                    name='date'
                    value={this.state.date}
                    placeholder='YYYY-MM-DD'
                    onChange = {this.handleChangedate}
                    errorText={this.state.dateError}/>
                </Form.Field>

                <Form.Field required>
                  <label> Department </label>
                  <SelectField
                    maxHeight={300}
                    value={this.state.departmentList}
                    onChange={this.handleDepartmentChange}
                    style={styles.customWidth}
                    autoWidth={true}
                  >
                    <MenuItem key={1} primaryText={'_'} value={'_' } />
                    <MenuItem key={2} primaryText={'_4D LABS'} value={'_4D LABS' } />
                    <MenuItem key={3} primaryText={'ABORIGINAL PEOPLES, OFFICE FOR'} value={'ABORIGINAL PEOPLES, OFFICE FOR' } />
                    <MenuItem key={4} primaryText={'ACADEMNIC RELATIONS'} value={'ACADEMNIC RELATIONS' } />
                    <MenuItem key={5} primaryText={'Alectos Therapeutics Inc - Leasee in Discovery 1'} value={'Alectos Therapeutics Inc - Leasee in Discovery 1' } />
                    <MenuItem key={6} primaryText={'ALUMNI RELATIONS'} value={'ALUMNI RELATIONS' } />
                    <MenuItem key={7} primaryText={'ANMIAL RESOURCES CENTRE'} value={'ANMIAL RESOURCES CENTRE' } />
                    <MenuItem key={8} primaryText={'APPLIED SCIENCES, FACULTY OF (includes Dean of Applied Sciences)'} value={'APPLIED SCIENCES, FACULTY OF (includes Dean of Applied Sciences)' } />
                    <MenuItem key={9} primaryText={'APSA - Administrative and Professional Staff Association'} value={'APSA - Administrative and Professional Staff Association' } />
                    <MenuItem key={10} primaryText={'ARCHAEOLOGY'} value={'ARCHAEOLOGY' } />
                    <MenuItem key={11} primaryText={'ARCHIVES & RECORDS MANAGEMENT'} value={'ARCHIVES & RECORDS MANAGEMENT' } />
                    <MenuItem key={12} primaryText={'ART GALLERY'} value={'ART GALLERY' } />
                    <MenuItem key={13} primaryText={'ARTS & SOCIAL SCIENCES, FACULTY OF (FASS) / DEAB OF (DOA FASS)'} value={'ARTS & SOCIAL SCIENCES, FACULTY OF (FASS) / DEAB OF (DOA FASS)' } />
                    <MenuItem key={14} primaryText={'ASIS-CANADA PROGRAM'} value={'ASIS-CANADA PROGRAM' } />
                    <MenuItem key={15} primaryText={'BCNET'} value={'BCNET' } />
                    <MenuItem key={16} primaryText={'BEEDIE SCHOOL OF BUSINESS (BUSINESS ADMINISTRATION, FACULTY OF )'} value={'BEEDIE SCHOOL OF BUSINESS (BUSINESS ADMINISTRATION, FACULTY OF )' } />
                    <MenuItem key={17} primaryText={'BEST'} value={'BEST' } />
                    <MenuItem key={18} primaryText={'BIOLOGICAL SCIENCES, DEPARTMENT OF'} value={'BIOLOGICAL SCIENCES, DEPARTMENT OF' } />
                    <MenuItem key={19} primaryText={'BIOMEDICAL PHYSIOLOGY AND KINESIOLOGY'} value={'BIOMEDICAL PHYSIOLOGY AND KINESIOLOGY' } />
                    <MenuItem key={20} primaryText={'BOARD OF GOVERNORS'} value={'BOARD OF GOVERNORS' } />
                    <MenuItem key={21} primaryText={'BOOKSTORE'} value={'BOOKSTORE' } />
                    <MenuItem key={22} primaryText={'BUREAU DES AFFAIRES FRANCOPHONES ET FRANCOPHILES (BAFF)'} value={'BUREAU DES AFFAIRES FRANCOPHONES ET FRANCOPHILES (BAFF)' } />
                    <MenuItem key={23} primaryText={'CAMPUS PLANNING & DEVELOPMENT'} value={'CAMPUS PLANNING & DEVELOPMENT' } />
                    <MenuItem key={24} primaryText={'CAMPUS SECURITY'} value={'CAMPUS SECURITY' } />
                    <MenuItem key={25} primaryText={'CANADIAN STUDIES, CENTRE FOR'} value={'CANADIAN STUDIES, CENTRE FOR' } />
                    <MenuItem key={26} primaryText={'CANADIAN URBAN RESEARCH STUDIES, INSTITUTE FOR'} value={'CANADIAN URBAN RESEARCH STUDIES, INSTITUTE FOR' } />
                    <MenuItem key={27} primaryText={'CEREMONIES & EVENTS OFFICE'} value={'CEREMONIES & EVENTS OFFICE' } />
                    <MenuItem key={28} primaryText={'CHEMISTRY, DEPARTMENT OF'} value={'CHEMISTRY, DEPARTMENT OF' } />
                    <MenuItem key={29} primaryText={'CHILDCARE CENTRE'} value={'CHILDCARE CENTRE' } />
                    <MenuItem key={30} primaryText={'CJSF RADIO'} value={'CJSF RADIO' } />
                    <MenuItem key={31} primaryText={'COASTAL STUDIES, CENTRE FOR'} value={'COASTAL STUDIES, CENTRE FOR' } />
                    <MenuItem key={32} primaryText={'COGNITIVE SCIENCE PROGRAM'} value={'COGNITIVE SCIENCE PROGRAM' } />
                    <MenuItem key={33} primaryText={'COMMUNICATION, SCHOOL OF'} value={'COMMUNICATION, SCHOOL OF' } />
                    <MenuItem key={34} primaryText={'COMPUTING SCIENCE, SCHOOL OF'} value={'COMPUTING SCIENCE, SCHOOL OF' } />
                    <MenuItem key={35} primaryText={'CO-OP - ARTS & SOCIAL SCIENCES (INCLUDES EDUCATION)'} value={'CO-OP - ARTS & SOCIAL SCIENCES (INCLUDES EDUCATION)' } />
                    <MenuItem key={36} primaryText={'CO-OP - BEEDIE SCHOOL OF BUSINESS (BUSINESS ADMINISTRATION)'} value={'CO-OP - BEEDIE SCHOOL OF BUSINESS (BUSINESS ADMINISTRATION)' } />
                    <MenuItem key={37} primaryText={'CO-OP - Biomedical, Physiology & Kinesiology'} value={'CO-OP - Biomedical, Physiology & Kinesiology' } />
                    <MenuItem key={38} primaryText={'CO-OP - BUSINESS PROGRAM'} value={'CO-OP - BUSINESS PROGRAM' } />
                    <MenuItem key={39} primaryText={'CO-OP - COMMUNICATION PROGRAM'} value={'CO-OP - COMMUNICATION PROGRAM' } />
                    <MenuItem key={40} primaryText={'CO-OP - COMPUTING SCIENCE'} value={'CO-OP - COMPUTING SCIENCE' } />
                    <MenuItem key={41} primaryText={'CO-OP - ENGINEERING SCIENCE'} value={'CO-OP - ENGINEERING SCIENCE' } />
                    <MenuItem key={42} primaryText={'CO-OP - Environment'} value={'CO-OP - Environment' } />
                    <MenuItem key={43} primaryText={'CO-OP - Health Sciences'} value={'CO-OP - Health Sciences' } />
                    <MenuItem key={44} primaryText={'CO-OP - SCIENCE AND ENVIRONMENT'} value={'CO-OP - SCIENCE AND ENVIRONMENT' } />
                    <MenuItem key={45} primaryText={'CO-OP - SCIENCE PROGRAM'} value={'CO-OP - SCIENCE PROGRAM' } />
                    <MenuItem key={46} primaryText={'CO-OP - EDUCATION (MBC - STUDENT SERVICES - WORK INTEGRATED LEARNING)'} value={'CO-OP - EDUCATION (MBC - STUDENT SERVICES - WORK INTEGRATED LEARNING)' } />
                    <MenuItem key={47} primaryText={'CRIMINOLOGY RESEARCH CENTRE'} value={'CRIMINOLOGY RESEARCH CENTRE' } />
                    <MenuItem key={48} primaryText={'CRIMINOLOGY, DEPARTMENT OF'} value={'CRIMINOLOGY, DEPARTMENT OF' } />
                    <MenuItem key={49} primaryText={'CSCD - SUSTAINABLE COMMUNITY DEVELOPMENT, CENTRE FOR (C/O FACULTY OF ENVIRONMENT)'} value={'CSCD - SUSTAINABLE COMMUNITY DEVELOPMENT, CENTRE FOR (C/O FACULTY OF ENVIRONMENT)' } />
                    <MenuItem key={50} primaryText={'CUPE 3338'} value={'CUPE 3338' } />
                    <MenuItem key={51} primaryText={'DIAMOND ALUMNI CENTRE [DAC] (FORMERLY DIAMOND UNIVERSITY CLUB)'} value={'DIAMOND ALUMNI CENTRE [DAC] (FORMERLY DIAMOND UNIVERSITY CLUB)' } />
                    <MenuItem key={52} primaryText={'DOCUMENT SOLUTIONS (formerly REPROGRAPHICS)'} value={'DOCUMENT SOLUTIONS (formerly REPROGRAPHICS)' } />
                    <MenuItem key={53} primaryText={'EARTH SCIENCES, DEPARTMENT OF'} value={'EARTH SCIENCES, DEPARTMENT OF' } />
                    <MenuItem key={54} primaryText={'ECONOMICS, DEPARTMENT OF'} value={'ECONOMICS, DEPARTMENT OF' } />
                    <MenuItem key={55} primaryText={'EDUCATION, FACULTY OF'} value={'EDUCATION, FACULTY OF' } />
                    <MenuItem key={56} primaryText={'ENGINEERING SCIENCE, SCHOOL OF'} value={'ENGINEERING SCIENCE, SCHOOL OF' } />
                    <MenuItem key={57} primaryText={'ENGLISH, DEPARTMENT OF'} value={'ENGLISH, DEPARTMENT OF' } />
                    <MenuItem key={58} primaryText={'ENVIRONMENT, FACULTY OF'} value={'ENVIRONMENT, FACULTY OF' } />
                    <MenuItem key={59} primaryText={'ENVIRONMENTAL HEALTH & SAFETY (AKA OCCUPATIONAL HEALTH & SAFETY OFFICE)'} value={'ENVIRONMENTAL HEALTH & SAFETY (AKA OCCUPATIONAL HEALTH & SAFETY OFFICE)' } />
                    <MenuItem key={60} primaryText={'EXCELLENCE: IMMIGRATION, CENTRE FOR'} value={'EXCELLENCE: IMMIGRATION, CENTRE FOR' } />
                    <MenuItem key={61} primaryText={'EXPERIMENMTAL & CONSTRUCTIVE MATHEMATICS, CENTRE OF (CECM)'} value={'EXPERIMENMTAL & CONSTRUCTIVE MATHEMATICS, CENTRE OF (CECM)' } />
                    <MenuItem key={62} primaryText={'FACILITIES SERVICES - ADMINISTRATION'} value={'FACILITIES SERVICES - ADMINISTRATION' } />
                    <MenuItem key={63} primaryText={'FACILITIES SERVICES - Building & grounds'} value={'FACILITIES SERVICES - Building & grounds' } />
                    <MenuItem key={64} primaryText={'FACILITIES SERVICES - CENTRAL STORES/RECEIVING'} value={'FACILITIES SERVICES - CENTRAL STORES/RECEIVING' } />
                    <MenuItem key={65} primaryText={'FACILITIES SERVICES - DEVELOPMENT'} value={'FACILITIES SERVICES - DEVELOPMENT' } />
                    <MenuItem key={66} primaryText={'FACILITIES SERVICES - ELECTRICAL'} value={'FACILITIES SERVICES - ELECTRICAL' } />
                    <MenuItem key={67} primaryText={'FACILITIES SERVICES - Mechanical Services'} value={'FACILITIES SERVICES - Mechanical Services' } />
                    <MenuItem key={68} primaryText={'FACILITIES SERVICES - OPERATIONS'} value={'FACILITIES SERVICES - OPERATIONS' } />
                    <MenuItem key={69} primaryText={'FACILITIES SERVICES - UNKNOWN'} value={'FACILITIES SERVICES - UNKNOWN' } />
                    <MenuItem key={70} primaryText={'FACULTY ASSOCIATION'} value={'FACULTY ASSOCIATION' } />
                    <MenuItem key={71} primaryText={'FEMINIST INSTITUTE FOR STUDENTS ON LAW AND SOCIETY'} value={'FEMINIST INSTITUTE FOR STUDENTS ON LAW AND SOCIETY' } />
                    <MenuItem key={72} primaryText={'FINANCIAL SERVICES'} value={'FINANCIAL SERVICES' } />
                    <MenuItem key={73} primaryText={'FIRST NATIONS STUDENT CENTRE (STUDENT SERVICES - INDIGENOUS STUDENT CENTRE)'} value={'FIRST NATIONS STUDENT CENTRE (STUDENT SERVICES - INDIGENOUS STUDENT CENTRE)' } />
                    <MenuItem key={74} primaryText={'FIRST NATIONS STUDIES'} value={'FIRST NATIONS STUDIES' } />
                    <MenuItem key={75} primaryText={'FRASER INTERNATIONAL COLLEGE (FIC)'} value={'FRASER INTERNATIONAL COLLEGE (FIC)' } />
                    <MenuItem key={76} primaryText={'FRENCH, DEPARTMENT OF'} value={'FRENCH, DEPARTMENT OF' } />
                    <MenuItem key={77} primaryText={'GENDER, SEXUALITY, AND WOMEN"S STUDIES, DEPARTMENT OF (GSWS)'} value={'GENDER, SEXUALITY, AND WOMEN"S STUDIES, DEPARTMENT OF (GSWS)' } />
                    <MenuItem key={78} primaryText={'GEOGRAPHY, DEPARTMENT OF'} value={'GEOGRAPHY, DEPARTMENT OF' } />
                    <MenuItem key={79} primaryText={'GRADUATE STUDIES, DEAN OF'} value={'GRADUATE STUDIES, DEAN OF' } />
                    <MenuItem key={80} primaryText={'HEALTH SCIENCES, FACULTY OF'} value={'HEALTH SCIENCES, FACULTY OF' } />
                    <MenuItem key={81} primaryText={'HELLENIC STUDIES'} value={'HELLENIC STUDIES' } />
                    <MenuItem key={82} primaryText={'HISTORY, DEPARTMENT OF'} value={'HISTORY, DEPARTMENT OF' } />
                    <MenuItem key={83} primaryText={'HUMAN RESOURCES'} value={'HUMAN RESOURCES' } />
                    <MenuItem key={84} primaryText={'HUMAN RIGHTS OFFICE'} value={'HUMAN RIGHTS OFFICE' } />
                    <MenuItem key={85} primaryText={'HUMANITIES, DEPARTMENT OF'} value={'HUMANITIES, DEPARTMENT OF' } />
                    <MenuItem key={86} primaryText={'HUMANITIES, INSTITUTE FOR THE'} value={'HUMANITIES, INSTITUTE FOR THE' } />
                    <MenuItem key={87} primaryText={'I.E.S.S. (INTERNATIONAL & EXCHANGE STUDENT SERVICES)'} value={'I.E.S.S. (INTERNATIONAL & EXCHANGE STUDENT SERVICES)' } />
                    <MenuItem key={88} primaryText={'IELTS TEST CENTRE'} value={'IELTS TEST CENTRE' } />
                    <MenuItem key={89} primaryText={'INFORMATION CHILDREN'} value={'INFORMATION CHILDREN' } />
                    <MenuItem key={90} primaryText={'INNOVATION OFFICE'} value={'INNOVATION OFFICE' } />
                    <MenuItem key={91} primaryText={'INSTITUTE FOR HEALTH RESEARCH & EDUCATION (IHRE) - PART OF HEALTH SCIENCES, FACULTY OF'} value={'INSTITUTE FOR HEALTH RESEARCH & EDUCATION (IHRE) - PART OF HEALTH SCIENCES, FACULTY OF' } />
                    <MenuItem key={92} primaryText={'INSTITUTIONAL RESEARCH & PLANNING (ANALYTICAL STUDIES)'} value={'INSTITUTIONAL RESEARCH & PLANNING (ANALYTICAL STUDIES)' } />
                    <MenuItem key={93} primaryText={'INTERFAITH/CHAP;AOMCY CENTRE (STUDENT SERVICES)'} value={'INTERFAITH/CHAP;AOMCY CENTRE (STUDENT SERVICES)' } />
                    <MenuItem key={94} primaryText={'INTERNAL AUDITOR'} value={'INTERNAL AUDITOR' } />
                    <MenuItem key={95} primaryText={'INTERNATIONAL STUDIES & LATIN AMERICAN STUDIES, SCHOOL FOR'} value={'INTERNATIONAL STUDIES & LATIN AMERICAN STUDIES, SCHOOL FOR' } />
                    <MenuItem key={96} primaryText={'IRMACS (INTERDISCIPLINARY RESEARCH IN THE MATHEMATICAL AND COMPUTATIONAL SCIENCE CENTRE)'} value={'IRMACS (INTERDISCIPLINARY RESEARCH IN THE MATHEMATICAL AND COMPUTATIONAL SCIENCE CENTRE)' } />
                    <MenuItem key={97} primaryText={'IT SERVICES'} value={'IT SERVICES' } />
                    <MenuItem key={98} primaryText={'IT SERVICES - A&T (Applications & Technology), ES (Enterprise Systems [includes SIMS]), PMO (Project Management Office)'} value={'IT SERVICES - A&T (Applications & Technology), ES (Enterprise Systems [includes SIMS]), PMO (Project Management Office)' } />
                    <MenuItem key={99} primaryText={'IT SERVICES - CARS (CLIENT AND RESEARCH SERVICES)'} value={'IT SERVICES - CARS (CLIENT AND RESEARCH SERVICES)' } />
                    <MenuItem key={100} primaryText={'IT SERVICES - CTA (CLASSROOM TECHNOLOGY & AUDIO VISUAL SERVICES)'} value={'IT SERVICES - CTA (CLASSROOM TECHNOLOGY & AUDIO VISUAL SERVICES)' } />
                    <MenuItem key={101} primaryText={'IT SERVICES - ICAT (INSTITUTIONAL, COLLABORATION AND AACADEMICCHNOLOGIES)'} value={'IT SERVICES - ICAT (INSTITUTIONAL, COLLABORATION AND AACADEMICCHNOLOGIES)' } />
                    <MenuItem key={102} primaryText={'IT SERVICES - ITI (INFORMATION TECHNOLOGY INFRASTRUCTURE)'} value={'IT SERVICES - ITI (INFORMATION TECHNOLOGY INFRASTRUCTURE)' } />
                    <MenuItem key={103} primaryText={'IT SERVICES - Network Services (NS)'} value={'IT SERVICES - Network Services (NS)' } />
                    <MenuItem key={104} primaryText={'IT SERVICES - PMO IT Major Projects'} value={'IT SERVICES - PMO IT Major Projects' } />
                    <MenuItem key={105} primaryText={'LANGUAGE LEARNING INSTITUTE'} value={'LANGUAGE LEARNING INSTITUTE' } />
                    <MenuItem key={106} primaryText={'LATIN AMERICAN STUDIES'} value={'LATIN AMERICAN STUDIES' } />
                    <MenuItem key={107} primaryText={'LET"S TALK SCIENCE PARTNERSHIP PROGRAM'} value={'LET"S TALK SCIENCE PARTNERSHIP PROGRAM' } />
                    <MenuItem key={108} primaryText={'LIBRARY, W.A.C. BENNETT'} value={'LIBRARY, W.A.C. BENNETT' } />
                    <MenuItem key={109} primaryText={'LIFELONG LEARNING (includes CODE-DISTANCEEDUCATION, CENTRE FOR and 7FM-7th Floor Media) [FORMERLY CONTINUING STUDIES]'} value={'LIFELONG LEARNING (includes CODE-DISTANCEEDUCATION, CENTRE FOR and 7FM-7th Floor Media) [FORMERLY CONTINUING STUDIES]' } />
                    <MenuItem key={110} primaryText={'LINGUISTICS'} value={'LINGUISTICS' } />
                    <MenuItem key={111} primaryText={'MAJOR PROJECTS OFFICE (FORMERLY RECEARCH RESOURCE GROUP)'} value={'MAJOR PROJECTS OFFICE (FORMERLY RECEARCH RESOURCE GROUP' } />
                    <MenuItem key={112} primaryText={'MATHEMATICS, DEPARTMENT OF'} value={'MATHEMATICS, DEPARTMENT OF' } />
                    <MenuItem key={113} primaryText={'MBC (STUDENT SERVICES)'} value={'MBC (STUDENT SERVICES' } />
                    <MenuItem key={114} primaryText={'MedChem, CDRD (The Centre for Drug Research and Development) - Lease in Discovery 1'} value={'MedChem, CDRD (The Centre for Drug Research and Development) - Lease in Discovery 1' } />
                    <MenuItem key={115} primaryText={'MEETING, EVENT, AND CONFERENCE SERVICES (MECS)'} value={'MEETING, EVENT, AND CONFERENCE SERVICES (MECS)' } />
                    <MenuItem key={116} primaryText={'MOLECULAR BIOLOGY & BIOCHEMISTRY, DEPARTMENT OF (MBB)'} value={'MOLECULAR BIOLOGY & BIOCHEMISTRY, DEPARTMENT OF (MBB)' } />
                    <MenuItem key={117} primaryText={'OMBUDSPERSON, OFFICE OF THE'} value={'OMBUDSPERSON, OFFICE OF THE' } />
                    <MenuItem key={118} primaryText={'OUT ON CAMPUS'} value={'OUT ON CAMPUS' } />
                    <MenuItem key={119} primaryText={'PACIFIC INSTITUTE FOR THE MATHEMATICAL SCIENCES [PIMS/MITACS]'} value={'PACIFIC INSTITUTE FOR THE MATHEMATICAL SCIENCES [PIMS/MITACS]' } />
                    <MenuItem key={120} primaryText={'PARKING SERVICES'} value={'PARKING SERVICES' } />
                    <MenuItem key={121} primaryText={'PAYROLL'} value={'PAYROLL' } />
                    <MenuItem key={122} primaryText={'PEAK PUBLICATIONS SOCIETY'} value={'PEAK PUBLICATIONS SOCIETY' } />
                    <MenuItem key={123} primaryText={'PHIOSOPHY'} value={'PHIOSOPHY' } />
                    <MenuItem key={124} primaryText={'PHYSICS'} value={'PHYSICS' } />
                    <MenuItem key={125} primaryText={'POLITICAL SCIENCE'} value={'POLITICAL SCIENCE' } />
                    <MenuItem key={126} primaryText={'PRAXOS CEMTRE FOR SCREEMWROTERS'} value={'PRAXOS CEMTRE FOR SCREEMWROTERS' } />
                    <MenuItem key={127} primaryText={'PRESIDENT"S OFFICE'} value={'PRESIDENT"S OFFICE' } />
                    <MenuItem key={128} primaryText={'PSYCHOLOGY'} value={'PSYCHOLOGY' } />
                    <MenuItem key={129} primaryText={'PSYCHOLOGY - CLINICAL PSYCHOLOGY CENTRE'} value={'PSYCHOLOGY - CLINICAL PSYCHOLOGY CENTRE' } />
                    <MenuItem key={130} primaryText={'PUBLIC AFFAIRS & MEDIA RELATIONS (FORMERLY MEDIA & PUBLIC RELATIONS)'} value={'PUBLIC AFFAIRS & MEDIA RELATIONS (FORMERLY MEDIA & PUBLIC RELATIONS)' } />
                    <MenuItem key={131} primaryText={'RADIATION SAFETY OFFICE'} value={'RADIATION SAFETY OFFICE' } />
                    <MenuItem key={132} primaryText={'RECREATIONAL SERVICES & ATHLETICES'} value={'RECREATIONAL SERVICES & ATHLETICES' } />
                    <MenuItem key={133} primaryText={'REM - Unknown - TASC 2'} value={'REM - Unknown - TASC 2' } />
                    <MenuItem key={134} primaryText={'REM (FOR TASC II rooms 7410 & 7420)'} value={'REM (FOR TASC II rooms 7410 & 7420)' } />
                    <MenuItem key={135} primaryText={'REM (RESOURCE & ENVIRONMENTAL MANAGEMENT, SCHOOL OF)'} value={'REM (RESOURCE & ENVIRONMENTAL MANAGEMENT, SCHOOL OF)' } />
                    <MenuItem key={136} primaryText={'RESIDENCE & HOUSING (part of STUDENT SERVICES)'} value={'RESIDENCE & HOUSING (part of STUDENT SERVICES)' } />
                    <MenuItem key={137} primaryText={'RIIM - CENTRE FOR EXCELLENCE/IMMIGRATION'} value={'RIIM - CENTRE FOR EXCELLENCE/IMMIGRATION' } />
                    <MenuItem key={138} primaryText={'S.F.P.I.R.G. (SIMON FRASER PUBLIC INTEREST RESEARCH GROUP)'} value={'S.F.P.I.R.G. (SIMON FRASER PUBLIC INTEREST RESEARCH GROUP)' } />
                    <MenuItem key={139} primaryText={'S.F.S.S. (SIMON FRASER STUDENT SOCIETY)'} value={'S.F.S.S. (SIMON FRASER STUDENT SOCIETY)' } />
                    <MenuItem key={140} primaryText={'SAFETY AND RISK SERVICES [SRS]'} value={'SAFETY AND RISK SERVICES [SRS]' } />
                    <MenuItem key={141} primaryText={'SCIENCE ALIVE'} value={'SCIENCE ALIVE' } />
                    <MenuItem key={142} primaryText={'SCIENCE STORES'} value={'SCIENCE STORES' } />
                    <MenuItem key={143} primaryText={'SCIENCE TECHNICAL CENTRE'} value={'SCIENCE TECHNICAL CENTRE' } />
                    <MenuItem key={144} primaryText={'SCIENCE, DEAN OF'} value={'SCIENCE, DEAN OF' } />
                    <MenuItem key={145} primaryText={'SFU COMMUNITY CORPORATION'} value={'SFU COMMUNITY CORPORATION' } />
                    <MenuItem key={146} primaryText={'SFU Dining Services (Chartwells Canada)'} value={'SFU Dining Services (Chartwells Canada)' } />
                    <MenuItem key={148} primaryText={'SFU THEATRE OFFICES'} value={'SFU THEATRE OFFICES' } />
                    <MenuItem key={149} primaryText={'SOCIOLOGY & ANTHROPOLOGY'} value={'SOCIOLOGY & ANTHROPOLOGY' } />
                    <MenuItem key={150} primaryText={'STATISTICS AND ACTURAIAL SCIENCE'} value={'STATISTICS AND ACTURAIAL SCIENCE' } />
                    <MenuItem key={151} primaryText={'STUDENT DEVELOPMENT'} value={'STUDENT DEVELOPMENT' } />
                    <MenuItem key={152} primaryText={'STUDENT SERVICES - MBC (formerly CAMPUS COMMUNITY SERVICES)'} value={'STUDENT SERVICES - MBC (formerly CAMPUS COMMUNITY SERVICES)' } />
                    <MenuItem key={153} primaryText={'T.S.S.U. (TEACHING SUPPORT STAFF UNION)'} value={'T.S.S.U. (TEACHING SUPPORT STAFF UNION)' } />
                    <MenuItem key={154} primaryText={'TEACHING AND LEARNING CENTRE [TLC] (FORMERLY LEARNING AND INSTRUCTIONAL DEVELOPMENT CENTRE [LIDC])'} value={'TEACHING AND LEARNING CENTRE [TLC] (FORMERLY LEARNING AND INSTRUCTIONAL DEVELOPMENT CENTRE [LIDC])' } />
                    <MenuItem key={155} primaryText={'TERRY FOR HUMANITARIAN AWARDS PROGRAM'} value={'TERRY FOR HUMANITARIAN AWARDS PROGRAM' } />
                    <MenuItem key={156} primaryText={'THE GRADUATE STUDENT SOCIETY'} value={'THE GRADUATE STUDENT SOCIETY' } />
                    <MenuItem key={157} primaryText={'TOURISM POLICY AND RESEARCH, CENTRE FOR (CTPR)'} value={'TOURISM POLICY AND RESEARCH, CENTRE FOR (CTPR)' } />
                    <MenuItem key={158} primaryText={'VICE-PRESIDENT, ACADEMIC'} value={'VICE-PRESIDENT, ACADEMIC' } />
                    <MenuItem key={159} primaryText={'Vice-President, External Relations - SFU International [Strand Hall only]'} value={'Vice-President, External Relations - SFU International [Strand Hall only]' } />
                    <MenuItem key={160} primaryText={'VICE-PRESIDENT, EXTERNAL RELATIONS (& Government Relations)'} value={'VICE-PRESIDENT, EXTERNAL RELATIONS (& Government Relations)' } />
                    <MenuItem key={161} primaryText={'VICE-PRESIDENT, FINANCE & ADMINISTRATION'} value={'VICE-PRESIDENT, FINANCE & ADMINISTRATION' } />
                    <MenuItem key={162} primaryText={'VICE-PRESIDENT, LEGAL AFFAIRS'} value={'VICE-PRESIDENT, LEGAL AFFAIRS' } />
                    <MenuItem key={163} primaryText={'Vice-President, Research - OFFICE OF RESEARCH ETHICS (formerly ETHICS POLICY ADMIN)'} value={'Vice-President, Research - OFFICE OF RESEARCH ETHICS (formerly ETHICS POLICY ADMIN)' } />
                    <MenuItem key={164} primaryText={'VICE-PRESIDENT, RESEARCH (INCLUDES UNIVERSITY/INDUSTRY LIAISON OFFICE)'} value={'VICE-PRESIDENT, RESEARCH (INCLUDES UNIVERSITY/INDUSTRY LIAISON OFFICE)' } />
                    <MenuItem key={165} primaryText={'WEST COAST LINE'} value={'WEST COAST LINE' } />
                    <MenuItem key={166} primaryText={'WILDLIFE ECOLOGY (CWE), CENTRE FOR'} value={'WILDLIFE ECOLOGY (CWE), CENTRE FOR' } />
                    <MenuItem key={167} primaryText={'WOMEN"S CENTRE'} value={'WOMEN"S CENTRE' } />
                  </SelectField>
                </Form.Field>
                <Form.Input type="hidden" name="department" value={this.state.department} />
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Field required>
                <label> Request By </label>
                  <TextField
                    fullWidth={true}
                    name='requestBy'
                    placeholder='Request By'
                    onChange = {e => this.change(e)}
                    value = {this.state.requestBy}
                    errorText={this.state.requestByError}/>
                </Form.Field>
                <Form.Field>
                <label> SFU ID </label>
                  <TextField
                    fullWidth = {true}
                    name = "id"
                    placeholder = 'SFU ID'
                    onChange = {e => this.change(e)}/>
                </Form.Field>
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Field required>
                <label> Phone </label>
                  <TextField
                    fullWidth={true}
                    name='phone'
                    placeholder='XXX-XXX-XXXX'
                    onChange = {e => this.change(e)}
                    errorText={this.state.phoneError} />
                </Form.Field>
              <Form.Field>
              <label> Fax </label>
                <TextField
                  fullWidth={true}
                  name='fax'
                  label='Fax'
                  placeholder='XXX-XXX-XXXX'
                  onChange = {e => this.change(e)}
                  errorText={this.state.faxError} />
              </Form.Field>
                <Form.Field required>
                <label> Email </label>
                  <TextField
                    fullWidth={true}
                    name='email'
                    placeholder='Email'
                    onChange = {e => this.change(e)}
                    errorText={this.state.emailError} />
                </Form.Field>
            </Form.Group>
            <Form.Field required>
              <label>  Type/Name of Event </label>
              <TextField
                fullWidth={true}
                name='nameOfEvent'
                placeholder='Type/Name of Event'
                onChange = {e => this.change(e)}
                value={this.state.nameOfEvent}
                errorText={this.state.nameOfEventError} />
            </Form.Field>
            <Form.Field required>
              <Form.Group inline>
              {/* "value" in data package represent the state of this part */}
                  <label> Licensed </label>
                  <Form.Radio
                    name='licensed'
                    label='Yes'
                    value='yes'
                    checked={this.state.licensed === 'yes'}
                    onChange={this.handleLicensedChecked} />
                  <Form.Radio
                    name='licensed'
                    label='No'
                    value='no'
                    checked={this.state.licensed === 'no'}
                    onChange={this.handleLicensedChecked} />
                  <label style={{color:'red'}}>{this.state.licensedError}</label>
              </Form.Group>
            </Form.Field>
            <Form.Group widths='equal'>
              <Form.Field required>
                  <label> Location of Event </label>
                  <TextField
                    fullWidth={true}
                    name='location'
                    placeholder='Location of Event'
                    onChange = {e => this.change(e)}
                    errorText={this.state.locationError} />
                </Form.Field>
                <Form.Field required>
                  <label> # of Attendees </label>
                  <TextField
                    fullWidth={true}
                    name='numberOfAttendees'
                    placeholder='# of Attendees'
                    onChange = {e => this.change(e)}
                    value={this.state.numberOfAttendees}
                    errorText={this.state.numberOfAttendeesError} />
                </Form.Field>
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Field required>
                  <label> Event Date </label>
                  <DatePicker
                    fullWidth={true}
                    name='eventDate'
                    placeholder='YYYY-MM-DD'
                    value={this.state.eventDate}
                    onChange={this.handleChangeEvent}
                    errorText={this.state.eventDateError} />
                </Form.Field>
                <Form.Field required>
                  <label> Time </label>
                  <TimePicker
                    format="24hr"
                    fullWidth={true}
                    name='time'
                    placeholder='HH:MM'
                    onChange={this.handleChangeTimePicker24}
                    errorText={this.state.timeError} />
                </Form.Field>
                <Form.Field required>
                  <label> End Time </label>
                  <TimePicker
                    format="24hr"
                    fullWidth={true}
                    name='endtime'
                    placeholder='HH:MM'
                    onChange={this.handleChangeEndTimePicker24}
                    errorText={this.state.endtimeError} />
                </Form.Field>
            </Form.Group>
            <Form.TextArea
              name='detail'
              label='Details'
              placeholder='Details of request(Please submit with photo of area and floor if applicable)'
              onChange = {e => this.change(e)} />
            <h2> Payment Detail </h2>
            <Form.Field required>
                <label> Account Code </label>
              <TextField
                fullWidth={true}
                name='accountCode'
                placeholder='OOOO-FF-DDDD-PPPPP or OOOO-FF-JJJJJJJJ'
                onChange = {e => this.change(e)}
                errorText={this.state.accountCodeError} />
            </Form.Field>
            <Form.Checkbox label='Please Invoice' /> {/* "did not intergrated into data package yet */}
            <h2> Authorization Detail </h2>
            <Form.Group widths='equal'>
              <Form.Field required>
                  <label> Authorized By </label>
                  <TextField
                    fullWidth={true}
                    name='authorizedBy'
                    placeholder='Authorized By'
                    onChange = {e => this.change(e)}
                    errorText={this.state.authorizedByError} />
                </Form.Field>
                <Form.Field>
                  <label> SFU ID </label>
                  <TextField
                    fullWidth={true}
                    name='authorizedID'
                    placeholder='SFU ID'
                    onChange = {e => this.change(e)}/>
                </Form.Field>
          <Form.Field required>
                  <label> Date </label>
                <DatePicker
                  fullWidth={true}
                  name='authorizedDate'
                  placeholder='Date'
                  value={this.state.authorizedDate}
                  onChange = {this.handleChangeAuthorizeDate}
                  errorText={this.state.authorizedDateError} />
              </Form.Field>
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Field required>
                  <label> Signature </label>
                  <TextField
                    fullWidth={true}
                    name='authorizedSignature'
                    placeholder='Signature'
                    onChange = {e => this.change(e)}
                    errorText={this.state.authorizedSignatureError} />
                </Form.Field>
                <Form.Field required>
                  <label> Phone </label>
                  <TextField
                    fullWidth={true}
                    name='authorizedPhone'
                    placeholder='XXX-XXX-XXXX'
                    onChange = {e => this.change(e)}
                    errorText={this.state.authorizedPhoneError} />
                </Form.Field>
            </Form.Group>

            <br></br>
            <Form.Field required>
              <Form.Group inline>
                <Form.Checkbox />
                  <label> I agree to the Terms and Conditions </label>
                {/* "did not intergrated into data package yet */}
              </Form.Group>
            </Form.Field>
            <Form.Button onClick = {e => this.onSubmit(e)} onChange = {this.FormExampleSuccess}>Submit</Form.Button>
          </Form>
        </MuiThemeProvider>
      )
    }
}

export default FormExampleSubcomponentControl
