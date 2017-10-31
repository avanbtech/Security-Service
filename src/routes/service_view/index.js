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
  console.log({
    'All: ': includeAll,
    'Surrey: ': includeSurrey,
    'Burnaby: ': includeBurnaby,
    'Vancouver: ': includeVancouver
  });

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
      (includeSurrey && location === 'Surrey') ||
      (includeVancouver && location === 'Vancouver');
    console.log('Valid location: ' + locationValid);
    if (!locationValid) {
      continue;
    }
    const requestDateStr = res[x]['date'].split("T")[0];
    console.log('Date: ' + requestDateStr);
    const requestDate = Date.parse(requestDateStr);
    const validDate = (!hasStartDate || requestDate >= startDateFilter) &&
      (!hasEndDate || requestDate <= endDateFilter);
    console.log({
      'First: ': (!hasStartDate || requestDate >= startDateFilter),
      'Second: ': (!hasEndDate || requestDate <= endDateFilter),
      'valid: ': validDate
    });
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
