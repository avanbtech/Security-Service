import React, { Component } from 'react'
import { Button, 	Form, Message } from 'semantic-ui-react'
import TextField from "material-ui/TextField"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DatePicker from 'material-ui/DatePicker';

const options = [
  { key: '1.', text: '_', value: '_' },
  { key: '2.', text: '_4D LABS', value: '_4D LABS' },
  { key: '3.', text: 'ABORIGINAL PEOPLES, OFFICE FOR', value: 'ABORIGINAL PEOPLES, OFFICE FOR' },
  { key: '4.', text: 'ACADEMNIC RELATIONS', value: 'ACADEMNIC RELATIONS' },
  { key: '5.', text: 'Alectos Therapeutics Inc - Leasee in Discovery 1', value: 'Alectos Therapeutics Inc - Leasee in Discovery 1' },
  { key: '6.', text: 'ALUMNI RELATIONS', value: 'ALUMNI RELATIONS' },
  { key: '7.', text: 'ANMIAL RESOURCES CENTRE', value: 'ANMIAL RESOURCES CENTRE' },
  { key: '8.', text: 'APPLIED SCIENCES, FACULTY OF (includes Dean of Applied Sciences)', value: 'APPLIED SCIENCES, FACULTY OF (includes Dean of Applied Sciences)' },
  { key: '9.', text: 'APSA - Administrative and Professional Staff Association', value: 'APSA - Administrative and Professional Staff Association' },
  { key: '10.', text: 'ARCHAEOLOGY', value: 'ARCHAEOLOGY' },
  { key: '11.', text: 'ARCHIVES & RECORDS MANAGEMENT', value: 'ARCHIVES & RECORDS MANAGEMENT' },
  { key: '12.', text: 'ART GALLERY', value: 'ART GALLERY' },
  { key: '13.', text: 'ARTS & SOCIAL SCIENCES, FACULTY OF (FASS) / DEAB OF (DOA FASS)', value: 'ARTS & SOCIAL SCIENCES, FACULTY OF (FASS) / DEAB OF (DOA FASS)' },
  { key: '14.', text: 'ASIS-CANADA PROGRAM', value: 'ASIS-CANADA PROGRAM' },
  { key: '15.', text: 'BCNET', value: 'BCNET' },
  { key: '16.', text: 'BEEDIE SCHOOL OF BUSINESS (BUSINESS ADMINISTRATION, FACULTY OF )', value: 'BEEDIE SCHOOL OF BUSINESS (BUSINESS ADMINISTRATION, FACULTY OF )' },
  { key: '17.', text: 'BEST', value: 'BEST' },
  { key: '18.', text: 'BIOLOGICAL SCIENCES, DEPARTMENT OF', value: 'BIOLOGICAL SCIENCES, DEPARTMENT OF' },
  { key: '19.', text: 'BIOMEDICAL PHYSIOLOGY AND KINESIOLOGY', value: 'BIOMEDICAL PHYSIOLOGY AND KINESIOLOGY' },
  { key: '20.', text: 'BOARD OF GOVERNORS', value: 'BOARD OF GOVERNORS' },
  { key: '21.', text: 'BOOKSTORE', value: 'BOOKSTORE' },
  { key: '22.', text: 'BUREAU DES AFFAIRES FRANCOPHONES ET FRANCOPHILES (BAFF)', value: 'BUREAU DES AFFAIRES FRANCOPHONES ET FRANCOPHILES (BAFF)' },
  { key: '23.', text: 'CAMPUS PLANNING & DEVELOPMENT', value: 'CAMPUS PLANNING & DEVELOPMENT' },
  { key: '24.', text: 'CAMPUS SECURITY', value: 'CAMPUS SECURITY' },
  { key: '25.', text: 'CANADIAN STUDIES, CENTRE FOR', value: 'CANADIAN STUDIES, CENTRE FOR' },
  { key: '26.', text: 'CANADIAN URBAN RESEARCH STUDIES, INSTITUTE FOR', value: 'CANADIAN URBAN RESEARCH STUDIES, INSTITUTE FOR' },
  { key: '27.', text: 'CEREMONIES & EVENTS OFFICE', value: 'CEREMONIES & EVENTS OFFICE' },
  { key: '28.', text: 'CHEMISTRY, DEPARTMENT OF', value: 'CHEMISTRY, DEPARTMENT OF' },
  { key: '29.', text: 'CHILDCARE CENTRE', value: 'CHILDCARE CENTRE' },
  { key: '30.', text: 'CJSF RADIO', value: 'CJSF RADIO' },
  { key: '31.', text: 'COASTAL STUDIES, CENTRE FOR', value: 'COASTAL STUDIES, CENTRE FOR' },
  { key: '32.', text: 'COGNITIVE SCIENCE PROGRAM', value: 'COGNITIVE SCIENCE PROGRAM' },
  { key: '33.', text: 'COMMUNICATION, SCHOOL OF', value: 'COMMUNICATION, SCHOOL OF' },
  { key: '34.', text: 'COMPUTING SCIENCE, SCHOOL OF', value: 'COMPUTING SCIENCE, SCHOOL OF' },
  { key: '35.', text: 'CO-OP - ARTS & SOCIAL SCIENCES (INCLUDES EDUCATION)', value: 'CO-OP - ARTS & SOCIAL SCIENCES (INCLUDES EDUCATION)' },
  { key: '36.', text: 'CO-OP - BEEDIE SCHOOL OF BUSINESS (BUSINESS ADMINISTRATION)', value: 'CO-OP - BEEDIE SCHOOL OF BUSINESS (BUSINESS ADMINISTRATION)' },
  { key: '37.', text: 'CO-OP - Biomedical, Physiology & Kinesiology', value: 'CO-OP - Biomedical, Physiology & Kinesiology' },
  { key: '38.', text: 'CO-OP - BUSINESS PROGRAM', value: 'CO-OP - BUSINESS PROGRAM' },
  { key: '39.', text: 'CO-OP - COMMUNICATION PROGRAM', value: 'CO-OP - COMMUNICATION PROGRAM' },
  { key: '40.', text: 'CO-OP - COMPUTING SCIENCE', value: 'CO-OP - COMPUTING SCIENCE' },
  { key: '41.', text: 'CO-OP - ENGINEERING SCIENCE', value: 'CO-OP - ENGINEERING SCIENCE' },
  { key: '42.', text: 'CO-OP - Environment', value: 'CO-OP - Environment' },
  { key: '43.', text: 'CO-OP - Health Sciences', value: 'CO-OP - Health Sciences' },
  { key: '44.', text: 'CO-OP - SCIENCE AND ENVIRONMENT', value: 'CO-OP - SCIENCE AND ENVIRONMENT' },
  { key: '45.', text: 'CO-OP - SCIENCE PROGRAM', value: 'CO-OP - SCIENCE PROGRAM' },
  { key: '46.', text: 'CO-OP - EDUCATION (MBC - STUDENT SERVICES - WORK INTEGRATED LEARNING)', value: 'CO-OP - EDUCATION (MBC - STUDENT SERVICES - WORK INTEGRATED LEARNING)' },
  { key: '47.', text: 'CRIMINOLOGY RESEARCH CENTRE', value: 'CRIMINOLOGY RESEARCH CENTRE' },
  { key: '48.', text: 'CRIMINOLOGY, DEPARTMENT OF', value: 'CRIMINOLOGY, DEPARTMENT OF' },
  { key: '49.', text: 'CSCD - SUSTAINABLE COMMUNITY DEVELOPMENT, CENTRE FOR (C/O FACULTY OF ENVIRONMENT)', value: 'CSCD - SUSTAINABLE COMMUNITY DEVELOPMENT, CENTRE FOR (C/O FACULTY OF ENVIRONMENT)' },
  { key: '50.', text: 'CUPE 3338', value: 'CUPE 3338' },
  { key: '51.', text: 'DIAMOND ALUMNI CENTRE [DAC] (FORMERLY DIAMOND UNIVERSITY CLUB)', value: 'DIAMOND ALUMNI CENTRE [DAC] (FORMERLY DIAMOND UNIVERSITY CLUB)' },
  { key: '52.', text: 'DOCUMENT SOLUTIONS (formerly REPROGRAPHICS)', value: 'DOCUMENT SOLUTIONS (formerly REPROGRAPHICS)' },
  { key: '53.', text: 'EARTH SCIENCES, DEPARTMENT OF', value: 'EARTH SCIENCES, DEPARTMENT OF' },
  { key: '54.', text: 'ECONOMICS, DEPARTMENT OF', value: 'ECONOMICS, DEPARTMENT OF' },
  { key: '55.', text: 'EDUCATION, FACULTY OF', value: 'EDUCATION, FACULTY OF' },
  { key: '56.', text: 'ENGINEERING SCIENCE, SCHOOL OF', value: 'ENGINEERING SCIENCE, SCHOOL OF' },
  { key: '57.', text: 'ENGLISH, DEPARTMENT OF', value: 'ENGLISH, DEPARTMENT OF' },
  { key: '58.', text: 'ENVIRONMENT, FACULTY OF', value: 'ENVIRONMENT, FACULTY OF' },
  { key: '59.', text: 'ENVIRONMENTAL HEALTH & SAFETY (AKA OCCUPATIONAL HEALTH & SAFETY OFFICE)', value: 'ENVIRONMENTAL HEALTH & SAFETY (AKA OCCUPATIONAL HEALTH & SAFETY OFFICE)' },
  { key: '60.', text: 'EXCELLENCE: IMMIGRATION, CENTRE FOR', value: 'EXCELLENCE: IMMIGRATION, CENTRE FOR' },
  { key: '61.', text: 'EXPERIMENMTAL & CONSTRUCTIVE MATHEMATICS, CENTRE OF (CECM)', value: 'EXPERIMENMTAL & CONSTRUCTIVE MATHEMATICS, CENTRE OF (CECM)' },
  { key: '62.', text: 'FACILITIES SERVICES - ADMINISTRATION', value: 'FACILITIES SERVICES - ADMINISTRATION' },
  { key: '63.', text: 'FACILITIES SERVICES - Building & grounds', value: 'FACILITIES SERVICES - Building & grounds' },
  { key: '64.', text: 'FACILITIES SERVICES - CENTRAL STORES/RECEIVING', value: 'FACILITIES SERVICES - CENTRAL STORES/RECEIVING' },
  { key: '65.', text: 'FACILITIES SERVICES - DEVELOPMENT', value: 'FACILITIES SERVICES - DEVELOPMENT' },
  { key: '66.', text: 'FACILITIES SERVICES - ELECTRICAL', value: 'FACILITIES SERVICES - ELECTRICAL' },
  { key: '67.', text: 'FACILITIES SERVICES - Mechanical Services', value: 'FACILITIES SERVICES - Mechanical Services' },
  { key: '68.', text: 'FACILITIES SERVICES - OPERATIONS', value: 'FACILITIES SERVICES - OPERATIONS' },
  { key: '69.', text: 'FACILITIES SERVICES - UNKNOWN', value: 'FACILITIES SERVICES - UNKNOWN' },
  { key: '70.', text: 'FACULTY ASSOCIATION', value: 'FACULTY ASSOCIATION' },
  { key: '71.', text: 'FEMINIST INSTITUTE FOR STUDENTS ON LAW AND SOCIETY', value: 'FEMINIST INSTITUTE FOR STUDENTS ON LAW AND SOCIETY' },
  { key: '72.', text: 'FINANCIAL SERVICES', value: 'FINANCIAL SERVICES' },
  { key: '73.', text: 'FIRST NATIONS STUDENT CENTRE (STUDENT SERVICES - INDIGENOUS STUDENT CENTRE)', value: 'FIRST NATIONS STUDENT CENTRE (STUDENT SERVICES - INDIGENOUS STUDENT CENTRE)' },
  { key: '74.', text: 'FIRST NATIONS STUDIES', value: 'FIRST NATIONS STUDIES' },
  { key: '75.', text: 'FRASER INTERNATIONAL COLLEGE (FIC)', value: 'FRASER INTERNATIONAL COLLEGE (FIC)' },
  { key: '76.', text: 'FRENCH, DEPARTMENT OF', value: 'FRENCH, DEPARTMENT OF' },
  { key: '77.', text: 'GENDER, SEXUALITY, AND WOMEN"S STUDIES, DEPARTMENT OF (GSWS)', value: 'GENDER, SEXUALITY, AND WOMEN"S STUDIES, DEPARTMENT OF (GSWS)' },
  { key: '78.', text: 'GEOGRAPHY, DEPARTMENT OF', value: 'GEOGRAPHY, DEPARTMENT OF' },
  { key: '79.', text: 'GRADUATE STUDIES, DEAN OF', value: 'GRADUATE STUDIES, DEAN OF' },
  { key: '80.', text: 'HEALTH SCIENCES, FACULTY OF', value: 'HEALTH SCIENCES, FACULTY OF' },
  { key: '81.', text: 'HELLENIC STUDIES', value: 'HELLENIC STUDIES' },
  { key: '82.', text: 'HISTORY, DEPARTMENT OF', value: 'HISTORY, DEPARTMENT OF' },
  { key: '83.', text: 'HUMAN RESOURCES', value: 'HUMAN RESOURCES' },
  { key: '84.', text: 'HUMAN RIGHTS OFFICE', value: 'HUMAN RIGHTS OFFICE' },
  { key: '85.', text: 'HUMANITIES, DEPARTMENT OF', value: 'HUMANITIES, DEPARTMENT OF' },
  { key: '86.', text: 'HUMANITIES, INSTITUTE FOR THE', value: 'HUMANITIES, INSTITUTE FOR THE' },
  { key: '87.', text: 'I.E.S.S. (INTERNATIONAL & EXCHANGE STUDENT SERVICES)', value: 'I.E.S.S. (INTERNATIONAL & EXCHANGE STUDENT SERVICES)' },
  { key: '88.', text: 'IELTS TEST CENTRE', value: 'IELTS TEST CENTRE' },
  { key: '89.', text: 'INFORMATION CHILDREN', value: 'INFORMATION CHILDREN' },
  { key: '90.', text: 'INNOVATION OFFICE', value: 'INNOVATION OFFICE' },
  { key: '91.', text: 'INSTITUTE FOR HEALTH RESEARCH & EDUCATION (IHRE) - PART OF HEALTH SCIENCES, FACULTY OF', value: 'INSTITUTE FOR HEALTH RESEARCH & EDUCATION (IHRE) - PART OF HEALTH SCIENCES, FACULTY OF' },
  { key: '92.', text: 'INSTITUTIONAL RESEARCH & PLANNING (ANALYTICAL STUDIES)', value: 'INSTITUTIONAL RESEARCH & PLANNING (ANALYTICAL STUDIES)' },
  { key: '93.', text: 'INTERFAITH/CHAP;AOMCY CENTRE (STUDENT SERVICES)', value: 'INTERFAITH/CHAP;AOMCY CENTRE (STUDENT SERVICES)' },
  { key: '94.', text: 'INTERNAL AUDITOR', value: 'INTERNAL AUDITOR' },
  { key: '95.', text: 'INTERNATIONAL STUDIES & LATIN AMERICAN STUDIES, SCHOOL FOR', value: 'INTERNATIONAL STUDIES & LATIN AMERICAN STUDIES, SCHOOL FOR' },
  { key: '96.', text: 'IRMACS (INTERDISCIPLINARY RESEARCH IN THE MATHEMATICAL AND COMPUTATIONAL SCIENCE CENTRE)', value: 'IRMACS (INTERDISCIPLINARY RESEARCH IN THE MATHEMATICAL AND COMPUTATIONAL SCIENCE CENTRE)' },
  { key: '97.', text: 'IT SERVICES', value: 'IT SERVICES' },
  { key: '98.', text: 'IT SERVICES - A&T (Applications & Technology), ES (Enterprise Systems [includes SIMS]), PMO (Project Management Office)',
  				value: 'IT SERVICES - A&T (Applications & Technology), ES (Enterprise Systems [includes SIMS]), PMO (Project Management Office)' },
  { key: '99.', text: 'IT SERVICES - CARS (CLIENT AND RESEARCH SERVICES)', value: 'IT SERVICES - CARS (CLIENT AND RESEARCH SERVICES)' },
  { key: '100.', text: 'IT SERVICES - CTA (CLASSROOM TECHNOLOGY & AUDIO VISUAL SERVICES)', value: 'IT SERVICES - CTA (CLASSROOM TECHNOLOGY & AUDIO VISUAL SERVICES)' },
  { key: '101.', text: 'IT SERVICES - ICAT (INSTITUTIONAL, COLLABORATION AND AACADEMICCHNOLOGIES)', value: 'IT SERVICES - ICAT (INSTITUTIONAL, COLLABORATION AND AACADEMICCHNOLOGIES)' },
  { key: '102.', text: 'IT SERVICES - ITI (INFORMATION TECHNOLOGY INFRASTRUCTURE)', value: 'IT SERVICES - ITI (INFORMATION TECHNOLOGY INFRASTRUCTURE)' },
  { key: '103.', text: 'IT SERVICES - Network Services (NS)', value: 'IT SERVICES - Network Services (NS)' },
  { key: '104.', text: 'IT SERVICES - PMO IT Major Projects', value: 'IT SERVICES - PMO IT Major Projects' },
  { key: '105.', text: 'LANGUAGE LEARNING INSTITUTE', value: 'LANGUAGE LEARNING INSTITUTE' },
  { key: '106.', text: 'LATIN AMERICAN STUDIES', value: 'LATIN AMERICAN STUDIES' },
  { key: '107.', text: 'LET"S TALK SCIENCE PARTNERSHIP PROGRAM', value: 'LET"S TALK SCIENCE PARTNERSHIP PROGRAM' },
  { key: '108.', text: 'LIBRARY, W.A.C. BENNETT', value: 'LIBRARY, W.A.C. BENNETT' },
  { key: '109.', text: 'LIFELONG LEARNING (includes CODE-DISTANCEEDUCATION, CENTRE FOR and 7FM-7th Floor Media) [FORMERLY CONTINUING STUDIES]',
  				 value: 'LIFELONG LEARNING (includes CODE-DISTANCEEDUCATION, CENTRE FOR and 7FM-7th Floor Media) [FORMERLY CONTINUING STUDIES]' },
  { key: '110.', text: 'LINGUISTICS', value: 'LINGUISTICS' },
  { key: '111.', text: 'MAJOR PROJECTS OFFICE (FORMERLY RECEARCH RESOURCE GROUP)', value: 'MAJOR PROJECTS OFFICE (FORMERLY RECEARCH RESOURCE GROUP' },
  { key: '112.', text: 'MATHEMATICS, DEPARTMENT OF', value: 'MATHEMATICS, DEPARTMENT OF' },
  { key: '113.', text: 'MBC (STUDENT SERVICES)', value: 'MBC (STUDENT SERVICES' },
  { key: '114.', text: 'MedChem, CDRD (The Centre for Drug Research and Development) - Lease in Discovery 1', value: 'MedChem, CDRD (The Centre for Drug Research and Development) - Lease in Discovery 1' },
  { key: '115.', text: 'MEETING, EVENT, AND CONFERENCE SERVICES (MECS)', value: 'MEETING, EVENT, AND CONFERENCE SERVICES (MECS)' },
  { key: '116.', text: 'MOLECULAR BIOLOGY & BIOCHEMISTRY, DEPARTMENT OF (MBB)', value: 'MOLECULAR BIOLOGY & BIOCHEMISTRY, DEPARTMENT OF (MBB)' },
  { key: '117.', text: 'OMBUDSPERSON, OFFICE OF THE', value: 'OMBUDSPERSON, OFFICE OF THE' },
  { key: '118.', text: 'OUT ON CAMPUS', value: 'OUT ON CAMPUS' },
  { key: '119.', text: 'PACIFIC INSTITUTE FOR THE MATHEMATICAL SCIENCES [PIMS/MITACS]', value: 'PACIFIC INSTITUTE FOR THE MATHEMATICAL SCIENCES [PIMS/MITACS]' },
  { key: '120.', text: 'PARKING SERVICES', value: 'PARKING SERVICES' },
  { key: '121.', text: 'PAYROLL', value: 'PAYROLL' },
  { key: '122.', text: 'PEAK PUBLICATIONS SOCIETY', value: 'PEAK PUBLICATIONS SOCIETY' },
  { key: '123.', text: 'PHIOSOPHY', value: 'PHIOSOPHY' },
  { key: '124.', text: 'PHYSICS', value: 'PHYSICS' },
  { key: '125.', text: 'POLITICAL SCIENCE', value: 'POLITICAL SCIENCE' },
  { key: '126.', text: 'PRAXOS CEMTRE FOR SCREEMWROTERS', value: 'PRAXOS CEMTRE FOR SCREEMWROTERS' },
  { key: '127.', text: 'PRESIDENT"S OFFICE', value: 'PRESIDENT"S OFFICE' },
  { key: '128.', text: 'PSYCHOLOGY', value: 'PSYCHOLOGY' },
  { key: '129.', text: 'PSYCHOLOGY - CLINICAL PSYCHOLOGY CENTRE', value: 'PSYCHOLOGY - CLINICAL PSYCHOLOGY CENTRE' },
  { key: '130.', text: 'PUBLIC AFFAIRS & MEDIA RELATIONS (FORMERLY MEDIA & PUBLIC RELATIONS)', value: 'PUBLIC AFFAIRS & MEDIA RELATIONS (FORMERLY MEDIA & PUBLIC RELATIONS)' },
  { key: '131.', text: 'RADIATION SAFETY OFFICE', value: 'RADIATION SAFETY OFFICE' },
  { key: '132.', text: 'RECREATIONAL SERVICES & ATHLETICES', value: 'RECREATIONAL SERVICES & ATHLETICES' },
  { key: '133.', text: 'REM - Unknown - TASC 2', value: 'REM - Unknown - TASC 2' },
  { key: '134.', text: 'REM (FOR TASC II rooms 7410 & 7420)', value: 'REM (FOR TASC II rooms 7410 & 7420)' },
  { key: '135.', text: 'REM (RESOURCE & ENVIRONMENTAL MANAGEMENT, SCHOOL OF)', value: 'REM (RESOURCE & ENVIRONMENTAL MANAGEMENT, SCHOOL OF)' },
  { key: '136.', text: 'RESIDENCE & HOUSING (part of STUDENT SERVICES)', value: 'RESIDENCE & HOUSING (part of STUDENT SERVICES)' },
  { key: '137.', text: 'RIIM - CENTRE FOR EXCELLENCE/IMMIGRATION', value: 'RIIM - CENTRE FOR EXCELLENCE/IMMIGRATION' },
  { key: '138.', text: 'S.F.P.I.R.G. (SIMON FRASER PUBLIC INTEREST RESEARCH GROUP)', value: 'S.F.P.I.R.G. (SIMON FRASER PUBLIC INTEREST RESEARCH GROUP)' },
  { key: '139.', text: 'S.F.S.S. (SIMON FRASER STUDENT SOCIETY)', value: 'S.F.S.S. (SIMON FRASER STUDENT SOCIETY)' },
  { key: '140.', text: 'SAFETY AND RISK SERVICES [SRS]', value: 'SAFETY AND RISK SERVICES [SRS]' },
  { key: '141.', text: 'SCIENCE ALIVE', value: 'SCIENCE ALIVE' },
  { key: '142.', text: 'SCIENCE STORES', value: 'SCIENCE STORES' },
  { key: '143.', text: 'SCIENCE TECHNICAL CENTRE', value: 'SCIENCE TECHNICAL CENTRE' },
  { key: '144.', text: 'SCIENCE, DEAN OF', value: 'SCIENCE, DEAN OF' },
  { key: '145.', text: 'SFU COMMUNITY CORPORATION', value: 'SFU COMMUNITY CORPORATION' },
  { key: '146.', text: 'SFU Dining Services (Chartwells Canada)', value: 'SFU Dining Services (Chartwells Canada)' },
  { key: '148.', text: 'SFU THEATRE OFFICES', value: 'SFU THEATRE OFFICES' },
  { key: '149.', text: 'SOCIOLOGY & ANTHROPOLOGY', value: 'SOCIOLOGY & ANTHROPOLOGY' },
  { key: '150.', text: 'STATISTICS AND ACTURAIAL SCIENCE', value: 'STATISTICS AND ACTURAIAL SCIENCE' },
  { key: '151.', text: 'STUDENT DEVELOPMENT', value: 'STUDENT DEVELOPMENT' },
  { key: '152.', text: 'STUDENT SERVICES - MBC (formerly CAMPUS COMMUNITY SERVICES)', value: 'STUDENT SERVICES - MBC (formerly CAMPUS COMMUNITY SERVICES)' },
  { key: '153.', text: 'T.S.S.U. (TEACHING SUPPORT STAFF UNION)', value: 'T.S.S.U. (TEACHING SUPPORT STAFF UNION)' },
  { key: '154.', text: 'TEACHING AND LEARNING CENTRE [TLC] (FORMERLY LEARNING AND INSTRUCTIONAL DEVELOPMENT CENTRE [LIDC])',
  				 value: 'TEACHING AND LEARNING CENTRE [TLC] (FORMERLY LEARNING AND INSTRUCTIONAL DEVELOPMENT CENTRE [LIDC])' },
  { key: '155.', text: 'TERRY FOR HUMANITARIAN AWARDS PROGRAM', value: 'TERRY FOR HUMANITARIAN AWARDS PROGRAM' },
  { key: '156.', text: 'THE GRADUATE STUDENT SOCIETY', value: 'THE GRADUATE STUDENT SOCIETY' },
  { key: '157.', text: 'TOURISM POLICY AND RESEARCH, CENTRE FOR (CTPR)', value: 'TOURISM POLICY AND RESEARCH, CENTRE FOR (CTPR)' },
  { key: '158.', text: 'VICE-PRESIDENT, ACADEMIC', value: 'VICE-PRESIDENT, ACADEMIC' },
  { key: '159.', text: 'Vice-President, External Relations - SFU International [Strand Hall only]', value: 'Vice-President, External Relations - SFU International [Strand Hall only]' },
  { key: '160.', text: 'VICE-PRESIDENT, EXTERNAL RELATIONS (& Government Relations)', value: 'VICE-PRESIDENT, EXTERNAL RELATIONS (& Government Relations)' },
  { key: '161.', text: 'VICE-PRESIDENT, FINANCE & ADMINISTRATION', value: 'VICE-PRESIDENT, FINANCE & ADMINISTRATION' },
  { key: '162.', text: 'VICE-PRESIDENT, LEGAL AFFAIRS', value: 'VICE-PRESIDENT, LEGAL AFFAIRS' },
  { key: '163.', text: 'Vice-President, Research - OFFICE OF RESEARCH ETHICS (formerly ETHICS POLICY ADMIN)', value: 'Vice-President, Research - OFFICE OF RESEARCH ETHICS (formerly ETHICS POLICY ADMIN)' },
  { key: '164.', text: 'VICE-PRESIDENT, RESEARCH (INCLUDES UNIVERSITY/INDUSTRY LIAISON OFFICE)', value: 'VICE-PRESIDENT, RESEARCH (INCLUDES UNIVERSITY/INDUSTRY LIAISON OFFICE)' },
  { key: '165.', text: 'WEST COAST LINE', value: 'WEST COAST LINE' },
  { key: '166.', text: 'WILDLIFE ECOLOGY (CWE), CENTRE FOR', value: 'WILDLIFE ECOLOGY (CWE), CENTRE FOR' },
  { key: '167.', text: 'WOMEN"S CENTRE', value: 'WOMEN"S CENTRE' },
]



class FormExampleSubcomponentControl extends Component {
  state = {
    date:'',
    dateError:'',
		department:'',
    requestBy:'',
    requestByError:'',
		id:'',
    idError:'',
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
		detail:'',
    accountCode:'',
    accountCodeError:'',
		authorizedBy:'',
    authorizedByError:'',
		authorizedID:'',
    authorizedIDError:'',
		authorizedDate:'',
    authorizedDateError:'',
		authorizedSignature:'',
    authorizedSignatureError:'',
		authorizedPhone:'',
    authorizedPhoneError:''
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

    if (this.state.requestBy.length < 3 ){
      isError = true;
      errors.requestByError = "Full name should be provided";
    }
    else {
      errors.requestByError = "";
    }

    if (!this.validateDate(this.state.date)){
      isError = true;
      errors.dateError = "Date should be in YYYY-MM-DD format";
    }
    else{
      errors.dateError = "";
    }

    if (this.state.id.replace(/\s/g, "").length == 0){
      isError = true;
      errors.idError = "SFU ID or BCDL should be provided";
    }
    else{
      errors.idError = "";
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

    if(!this.validateDate(this.state.eventDate))
    {
      isError = true;
      errors.eventDateError = "Date should be in YYYY-MM-DD format";
    }
    else {
      errors.eventDateError = "";
    }

    var eventTime = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]/;
    if (!this.state.time.match(eventTime) || this.state.time.replace(/\s/g, "").length == 0){
      isError = true;
      errors.timeError = "Time should be in HH:MM format";
    }
    else{
      errors.timeError = "";
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

    if (!this.validateDate(this.state.authorizedDate)){
      isError = true;
      errors.authorizedDateError = "Date should be in YYYY-MM-DD format";
    }
    else{
        errors.authorizedDateError = "";
    }

    if (this.state.authorizedBy.replace(/\s/g, "").length == 0 ){
      isError = true;
      errors.authorizedByError = 'Authorized person should be provided';
    }
    else {
      errors.authorizedByError = '';
    }

    if (this.state.authorizedID.replace(/\s/g, "").length == 0 ){
      isError = true;
      errors.authorizedIDError = 'Authorized ID should be provided';
    }
    else {
      errors.authorizedIDError = '';
    }

    if(!this.state.authorizedPhone.match(phoneno) && !this.state.authorizedPhone.match(phone2))
    {
      isError = true;
      errors.authorizedPhoneError = "Phone number should be in XXXXXXXXXX or XXX-XXX-XXXX format";
    }
    else {
      errors.authorizedPhoneError = "";
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
	          			<TextField
                    fullWidth={true}
                    name='date'
                    value={this.state.date}
                    placeholder='Date'
                    onChange = {e => this.change(e)}
                    errorText={this.state.dateError}/>
	          		</Form.Field>
	          		<Form.Field required>
	        			<label> Department </label>
	          			<Form.Select
                    name='department'
                    options={options}
                    placeholder='Department'
                    onChange = {e => this.change(e)} />
	          		</Form.Field>
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
	          		<Form.Field required>
	        			<label> SFU ID or BCDL </label>
	          			<TextField
                    fullWidth = {true}
                    name = "id"
                    placeholder = 'SFU ID or BCDL'
                    onChange = {e => this.change(e)}
                    errorText={this.state.idError} />
	          		</Form.Field>
	        	</Form.Group>
	        	<Form.Group widths='equal'>
	        		<Form.Field required>
	        			<label> Phone </label>
	          			<TextField
                    fullWidth={true}
                    name='phone'
                    placeholder='Phone'
                    onChange = {e => this.change(e)}
                    errorText={this.state.phoneError} />
	          		</Form.Field>
              <Form.Field>
              <label> Fax </label>
	          		<TextField
                  fullWidth={true}
                  name='fax'
                  label='Fax'
                  placeholder='Fax'
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
                errorText={this.state.nameOfEventError} />
	        	</Form.Field>
	        	<Form.Field required>
	        		<Form.Group inline>
	        		{/* "value" in data package represent the state of this part */}
		          		<label> Licensed </label>
		          		<Form.Radio name='licensed' label='Yes' value='yes' checked={value === 'yes'} onChange={this.handleChange} />
		          		<Form.Radio name='licensed' label='No' value='no' checked={value === 'no'} onChange={this.handleChange} />
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
                    errorText={this.state.numberOfAttendeesError} />
	          		</Form.Field>
	        	</Form.Group>
	        	<Form.Group widths='equal'>
	        		<Form.Field required>
		          		<label> Event Date </label>
	          			<TextField
                    fullWidth={true}
                    name='eventDate'
                    placeholder='Event Date'
                    onChange = {e => this.change(e)}
                    errorText={this.state.eventDateError} />
	          		</Form.Field>
	          		<Form.Field required>
		          		<label> Time(s) </label>
	          			<TextField
                    fullWidth={true}
                    name='time'
                    placeholder='Time(s)'
                    onChange = {e => this.change(e)}
                    errorText={this.state.timeError} />
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
                placeholder='Account Code'
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
	          		<Form.Field required>
		          		<label> SFU ID/BCDL </label>
	          			<TextField
                    fullWidth={true}
                    name='authorizedID'
                    placeholder='SFU ID/BCDL'
                    onChange = {e => this.change(e)}
                    errorText={this.state.authorizedIDError} />
	          		</Form.Field>
					<Form.Field required>
		          		<label> Date </label>
	        			<TextField
                  fullWidth={true}
                  name='authorizedDate'
                  placeholder='Date'
                  onChange = {e => this.change(e)}
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
                    placeholder='Phone'
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
