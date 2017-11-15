import React from 'react';
import StatusForm from './StatusForm';

import methods from '../../core/dbFetchMethods'
export const path = '/StatusForm/:referenceID';
export const action = async (state) => {
  const title = 'Status form that displays current request status and information user entered';

  const res = await methods.getReqForStatusView(state.params.referenceID);

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
