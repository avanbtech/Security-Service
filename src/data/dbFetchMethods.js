import axios from 'axios';
import { request, GraphQLClient } from 'graphql-request';

let DBUrl = 'http://localhost:3001/graphql';

// Call all the functions in this module with 'await'
async function getReqByID(reqID) {
  let res = null;

  const reqNum = '\"' + reqID + '\"';

  const dbQuery = '{request(accessID: ' + reqNum + '){date status details accountCode authorizedBy authorizedID authorizedDate authorizedPhone user { department requestBy sfuBCID phone fax email licensed } event { nameOfEvent location numberOfattendees eventDates }}}';


  await axios.post(DBUrl, {
    query: dbQuery,
  })
    .then(function (response) {
      if (response['data']['data']['request']) {
        res = response.data['data']['request'];
      }
    })
    .catch(function (error) {
      console.log(error.data);
    });

  return res;
}

async function getUserByReqID(reqID) {
  let res = null;

  const reqNum = '\"' + reqID + '\"';

  const dbQuery = '{request(accessID: ' + reqNum + '){user { department requestBy sfuBCID phone fax email licensed }}}';

  await axios.post(DBUrl, {
    query: dbQuery,
  })
    .then(function (response) {
      if (response['data']['data']['request']) {
        res = response.data['data']['request'];
      }
    })
    .catch(function (error) {
      console.log(error.data);
    });


  return res;
}

async function getReqForServiceView() {
  let res = null;

  let query= '{request{accessID user{requestBy sfuBCID} date status event{eventDates location}}}';

  // await axios.post(DBUrl, {
  //   query: '{request{accessID user{requestBy sfuBCID} date status event{eventDates location}}}',
  // })
  //   .then(function (response) {
  //     if(response['data']['data']['request']) {
  //       res = response.data['data']['request'];
  //     }
  //   })
  //   .catch(function (error) {
  //     console.log(error.data);
  //   });

  const client = new GraphQLClient(DBUrl, { headers: {} });
  await client.request(query).then((data) => {
    console.log(data.request);
    res = data.request;
  });

  return res;
}

async function getReqForStatusView(reqID) {
  let res = null;

  const reqNum = '\"' + reqID + '\"';

  const dbQuery = '{request(accessID: ' + reqNum + '){status accessID user { sfuBCID }}}';

  await axios.post(DBUrl, {
    query: dbQuery,
  })
    .then(function (response) {
      if (response['data']['data']['request']) {
        res = response.data['data']['request'];
      }
    })
    .catch(function (error) {
      console.log(error.data);
    });

  return res;
}


// USAGE FOR isValidCodeAndEmail
// Make a call to the function: let result = dbFetch.isValidCodeAndEmail(accessID, email);
// The above call returns a promise. Therefore, we have to wait for promise to be resolved.
// Therefore, we user Promise.then() function as:
// result.then((response) => {
//   console.log(`Emails match? : ${response}`);
// })
async function isValidCodeAndEmail(reqID, email) {
  let res = false;

  const reqNum = '\"' + reqID + '\"';
  const dbQuery = '{request(accessID: ' + reqNum + '){ user { email }}}';

  await axios.post(DBUrl, {
    query: dbQuery,
  })
    .then((response) => {
      if(response['data']['data']['request']) {
        res = response['data']['data']['request'][0]['user']['email'] === email;
      }
    }).catch((error) => {

      console.log(`Error: ${error.data}`);
    });

  return res;
}

async function getGuardsForRequest(reqID) {
  let res = null;

  let query= `{request(accessID: "${reqID}"){security{ \
  supervisor preparedBy remarks guardRegularRate guardRegularHours guardOTRate \
  guardOTHours scspRegularRate scspRegularHours scspOTRate scspOTHours totalGuardBillable \
  totalSCSPBillable guards {groupID accessID dispatchNumber location startDate \
  endDate guardname telephone grdType remarks}}}}`;

  const client = new GraphQLClient(DBUrl, { headers: {} });
  await client.request(query).then((data) => {
    if(data.request[0]) {
      res = data.request[0];
    } else {
      res = null;
    }
  });

  return res;
}

module.exports = {
  getReqByID,
  getUserByReqID,
  getReqForServiceView,
  getReqForStatusView,
  isValidCodeAndEmail,
  getGuardsForRequest,
};
