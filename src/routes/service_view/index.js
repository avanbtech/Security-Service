import React from 'react';
import ServiceView from './ServiceView';
import fetch from '../../core/fetch';
import dbMethods from '../../core/dbFetchMethods';

export const path = '/ServiceView';
export const action = async (state) => {
  const response = await fetch('/graphql?query={news{title,link,contentSnippet}}');
  const { data } = await response.json();
  state.context.onSetTitle('Service View');

  let includeBurnaby = 'include_burnaby' in state.query;
  let includeSurrey = 'include_surrey' in state.query;
  let includeVancouver = 'include_vancouver' in state.query;
  const includeAll = !includeSurrey && !includeVancouver && !includeBurnaby;
  includeBurnaby = includeBurnaby || includeAll;
  includeSurrey = includeSurrey || includeAll;
  includeVancouver = includeVancouver || includeAll;

  const hasStartDate = 'start_date' in state.query;
  let startDateFilter;
  if (hasStartDate) {
    startDateFilter = Date.parse(state.query.start_date);
  }

  const hasEndDate = 'end_date' in state.query;
  let endDateFilter;
  if (hasEndDate) {
    endDateFilter = Date.parse(state.query.end_date);
  }

  console.log({
    'hasStart':hasStartDate,
    'hasEnd': hasEndDate,
    'startDate': startDateFilter,
    'endDate':endDateFilter
  });

  let res = await dbMethods.getReqForServiceView();

  let rows = [];

  for (let x = 0; x < res.length; x++) {
    const location = res[x]['event']['location'];
    console.log('Location: ' +location);
    const locationValid = (includeBurnaby && location === 'Burnaby') ||
      (includeSurrey && location === 'Surre') ||
      (includeVancouver && location === 'Vancouver');
    if (!locationValid) {
      continue;
    }
    const requestDateStr = res[x]['date'].split("T")[0];
    console.log('Date: ' + requestDateStr);
    const requestDate = Date.parse(requestDateStr);
    const validDate = (!hasStartDate || requestDate >= startDateFilter) &&
      (!hasEndDate || requestDate <= endDateFilter);
    if (!validDate) {
      continue;
    }
    rows.push({
      requestId: res[x]['accessID'],
      requestBy: res[x]['user']['requestBy'],
      date: res[x]['date'].split("T")[0],
      status: res[x]['status'],
      sfu_id: res[x]['user']['sfuBCID'],
      location: res[x]['event']['location'],
      event_date: res[x]['event']['eventDates'],
    });
  }

  return <ServiceView serviceRequests={rows}/>;
};
