import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './RequestView.scss';
import { Button,  Form, Message } from 'semantic-ui-react'

function ApprovalPrompt(input) {
  var approveLabel = input.status == "Accepted" ? "Update" : "Approve";

  var rejected = input.status == "Rejected";
  return (
    <div>
        <div className={s.action_container}>
          <Form action={"/ServiceView/" + input.requestID} method="get">
            <input name='approved'
                   type='hidden'
                   value="yes" />
            <input name='email'
                   type='hidden'
                   value={input.email} />
            <Form.Button type='submit'>{approveLabel}</Form.Button>
          </Form>
        </div>
      {
        !rejected &&
        <div className={s.action_container}>
          <Form action="/ServiceView/reject" method="post">
            <input name='requestID'
                   type='hidden'
                   value={input.requestID}/>
                   <input name='email'
                          type='hidden'
                          value={input.email}/>
            <Form.Button type='submit'>Reject</Form.Button>
          </Form>
        </div>
      }
    </div>
  );
}

export default withStyles(ApprovalPrompt, s);
