/* statusform/index.js
** The index file for statusform
*/

import React from 'react';
import StatusForm from './StatusForm';
import axios from 'axios';
import methods from '../../data/dbFetchMethods'
async function getData(refID) {
  let res = [];
  const url = "https://cmpt373-1177g.cmpt.sfu.ca/stcheck";

  await axios.post(url, {
    referenceID: refID
  }).then(function (response){
    res = response;
  });

  return res;
}

export const path = '/StatusForm/:referenceID/:email';
export const action = async (state) => {
  const title = 'Status form that displays current request status and information user entered';

  let res = null;
/*
  await getData(state.params.referenceID).then((response) => {
    res = response.data.reqData;
  });
 */
//begin Replace with commented code above for VM use.
  res = await methods.getReqForStatusView(state.params.referenceID);
//end
  let request;

  if (res[0] == null || res == null ){
    request = ({
      requestID: "",
      status: "",
      sfu_id: "",
      exists: false
    })
  } else {
  request = ({
    requestID: res[0]['accessID'],
    status: res[0]['status'],
    sfu_id: res[0]['user']['sfuBCID'],
    exists: true
  });
  if(res[0]['user']['email'] != null){
    if(res[0]['user']['email'] != state.params.email){
      request.exists = false;
      console.log("incorrect email");
    }
  }
}


  state.context.onSetTitle(title);
  return <StatusForm request={request} />;
};
