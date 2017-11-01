import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Status.scss';
import Link from '../../components/Link';
import Check from '../../components/CheckStatus';
import Main from '../../components/Main';
import FlatButton from 'material-ui/FlatButton';

function CheckStatus({ title }) {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1 className={s.title}>Check Request Status</h1>
        <link rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
        />
        <Check />
      </div>

    </div>
  );
}

CheckStatus.propTypes = { title: PropTypes.string.isRequired };

export default withStyles(CheckStatus, s);
