import axios from 'axios';

// Call all the functions in this module with 'await'

async function getReqByID(reqID) {
  let res = null;

  const reqNum = '\"' + reqID + '\"';

  const dbQuery = '{request(accessID: ' + reqNum + '){date status details accountCode authorizedBy authorizedID authorizedDate authorizedPhone user { department requestBy sfuBCID phone fax email licensed } event { nameOfEvent location numberOfattendees eventDates }}}';

  await axios.post('http://localhost:3001/graphql', {
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

  await axios.post('http://localhost:3001/graphql', {
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

  console.log(res);
  return res;
}

async function getReqForServiceView() {
  let res = null;

  await axios.post('http://localhost:3001/graphql', {
    query: '{request{accessID user{requestBy sfuBCID} date status event{eventDates location}}}',
  })
    .then(function (response) {
      if(response['data']['data']['request']) {
        res = response.data['data']['request'];
      }
    })
    .catch(function (error) {
      console.log(error.data);
    });

  return res;
}

async function getReqForStatusView() {
  let res = null;

  await axios.post('http://localhost:3001/graphql', {
    query: '{request{accessID status statusDate}',
  })
    .then(function (response) {
      if(response['data']['data']['request']) {
        res = response.data['data']['request'];
      }
    })
    .catch(function (error) {
      console.log(error.data);
    });

  return res;
}

module.exports = {
  getReqByID,
  getUserByReqID,
  getReqForServiceView,
  getReqForStatusView,
};
