import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './StatusForm.scss';
import Link from '../../components/Link';
import Form from '../../components/Form';
import Main from '../../components/Main';

{/*Status page to check the current status of a request that a user has submitted? URL: /status */}
function StatusForm({ title }) {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1>{title}</h1>

<p>Status form to be filled out here to check current security request info and whether approved or disapproved here</p>
<p>Missing required APIs to do further work</p>

      </div>

    </div>
  );
}

StatusForm.propTypes = { title: PropTypes.string.isRequired };

export default withStyles(StatusForm, s);
