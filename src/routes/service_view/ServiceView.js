import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ServiceView.scss';
import OneServiceRequest from './OneServiceRequest';
import ServiceViewTable from './ServiceViewTable';

function ServiceViewReq({serviceRequests}) {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1 className={s.title}>Service View</h1>
         <link rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
          />
          <ServiceViewTable serviceRequests={serviceRequests} />
      </div>
    </div>
  );
}
export default withStyles(ServiceViewReq, s);

