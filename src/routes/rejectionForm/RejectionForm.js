import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './StatusForm.scss';
import Link from '../../components/Link';
import StatusTable from '../../components/StatusTable';
import Main from '../../components/Main';
import FlatButton from 'material-ui/FlatButton';
import StatusRequest from './StatusRequest';
import 

function Status({ request }) {
  var row;
  
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1 className={s.title}>Rejection Information</h1>
        <link rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
        />
        <rejectionForm />
      </div>

    </div>
  );
}

export default withStyles(Status, s);
