import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './RequestView.scss';
import NotFound from './NotFound';
import RequestApproval from './RequestApproval';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

function ServiceView({request, requestID, approved}) {
  if(request.length > 0) {
    return (
      <MuiThemeProvider>
        <div className={s.root}>
          <div className={s.page}>
            <link rel="stylesheet"
                  href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
            />
            <RequestApproval
              requestInfo={request[0]}
              requestID={requestID}
              approved={approved}
            />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
  else {
    return (<NotFound />);
  }
}

export default withStyles(ServiceView, s);
