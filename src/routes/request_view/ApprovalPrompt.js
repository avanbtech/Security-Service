import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './RequestView.scss';

function ApprovalPrompt(input) {
  console.log("ApprovalPrompt");
  console.log(JSON.stringify(input.requestID));
  return (
    <div>
      <table className={s.req_detail_table}>
        <tr>
          <td>
            <div className={s.action_container}>
              <form action={"/ServiceView/" + input.requestID} method="get">
                <input name='approved'
                       type='hidden'
                       value="yes" />
                <input type='submit' value='Approve' />
              </form>
            </div>
            <div className={s.action_container}>
              <form action="/ServiceView/reject" method="post">
                <input name='requestID'
                       type='hidden'
                       value={input.requestID} />
                <input type='submit' value='Reject' />
              </form>
            </div>
          </td>
          <td></td>
        </tr>
      </table>
    </div>
  );
}

export default withStyles(ApprovalPrompt, s);
