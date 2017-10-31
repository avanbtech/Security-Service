import React from 'react';
import ServiceView from './ServiceView';
import fetch from '../../core/fetch';
import dbMethods from '../../core/dbFetchMethods';

export const path = '/ServiceView';

var sort_field = '';

function compareRows(a, b) {
  if(sort_field === 'requestId'){
    if (a.requestId < b.requestId)
      return -1;
    if (a.requestId > b.requestId)
      return 1;
  }
  else if(sort_field === 'requestBy'){
    if (a.requestBy < b.requestBy)
      return -1;
    if (a.requestBy > b.requestBy)
      return 1;
  }
  else if(sort_field === 'date'){
    if (a.date < b.date)
      return -1;
    if (a.date > b.date)
      return 1;
  }
  else if(sort_field === 'status'){
    if (a.status < b.status)
      return -1;
    if (a.status > b.status)
      return 1;
  }
  else if(sort_field === 'sfu_id'){
    if (a.sfu_id < b.sfu_id)
      return -1;
    if (a.sfu_id > b.sfu_id)
      return 1;
  }
  else if(sort_field === 'location'){
    if (a.location < b.location)
      return -1;
    if (a.location > b.location)
      return 1;
  }
  else if(sort_field === 'event_date'){
    if (a.event_date < b.event_date)
      return -1;
    if (a.event_date > b.event_date)
      return 1;
  }
  return 0;
}

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
  let startDateFilter = '';
  let startDateFilterStr = '';
  if (hasStartDate) {
    startDateFilterStr = state.query.start_date;
    startDateFilter = Date.parse(startDateFilterStr);
  }

  const hasEndDate = 'end_date' in state.query;
  let endDateFilter = '';
  let endDateFilterStr = '';
  if (hasEndDate) {
    endDateFilterStr = state.query.end_date;
    endDateFilter = Date.parse(endDateFilterStr);
  }

  let res = await dbMethods.getReqForServiceView();

  let rows = [];

  for (let x = 0; x < res.length; x++) {
    const requestDateStr = res[x]['date'].split("T")[0];
    const requestDate = Date.parse(requestDateStr);
    const validDate = (!hasStartDate || requestDate >= startDateFilter) &&
      (!hasEndDate || requestDate <= endDateFilter);
    if (!validDate) {
      continue;
    }
    const location = res[x]['event']['location'];
    const locationValid = (includeBurnaby && location === 'Burnaby') ||
      (includeSurrey && location === 'Surrey') ||
      (includeVancouver && location === 'Vancouver');
    if (!locationValid) {
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

  rows.sort(compareRows);

  const filterObject = {
    'includeBurnaby':includeBurnaby,
    'includeSurrey':includeSurrey,
    'includeVancouver':includeVancouver,
    'start_date':startDateFilterStr,
    'end_date':endDateFilterStr
  };
  return <ServiceView
    serviceRequests={rows}
    filterObject={filterObject}
  />;
};
