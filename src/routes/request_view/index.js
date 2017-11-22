import React from 'react';
import RequestView from './RequestView';
import fetch from '../../core/fetch';
import dbMethods from '../../data/dbFetchMethods';

export const path = '/ServiceView/:id';
export const action = async (state) => {
  state.context.onSetTitle('Request View');
  let approved = false;
  if('approved' in state.query && state.query.approved == 'yes'){
    approved = true;
  }

  //TODO: MOVE THIS CALL THROUGH SERVER
  let res = await dbMethods.getReqByID(state.params.id);
  let rows = [];
  return <RequestView
            request={res}
            requestID={state.params.id}
            approved={approved}
  />;
};
