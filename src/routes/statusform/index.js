import React from 'react';
import StatusForm from './statusform';

import methods from '../../core/dbFetchMethods'
export const path = '/StatusForm';
export const action = async (state) => {
  const title = 'Status form that displays current request status and information user entered';

  const res = await methods.getReqForStatusView("17-0001")

  let request;
  
  if (res[0] == null || res == null){
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
}
  

  state.context.onSetTitle(title);
  return <StatusForm request={request} />;
};
