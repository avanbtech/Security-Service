import React from 'react';
import RequestView from './RequestView';
import fetch from '../../core/fetch';
import dbMethods from '../../core/dbFetchMethods';

export const path = '/ServiceView/:id';
export const action = async (state) => {
  const response = await fetch('/graphql?query={news{title,link,contentSnippet}}');
  const { data } = await response.json();
  state.context.onSetTitle('Request View');
  let approved = false;
  if('approved' in state.query && state.query.approved == 'yes'){
    approved = true;
  }
  let res = await dbMethods.getReqByID(state.params.id);
  let rows = [];
  return <RequestView
            request={res}
            requestID={state.params.id}
            approved={approved}
  />;
};