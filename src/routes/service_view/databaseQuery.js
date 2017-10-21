import axios from 'axios';

async function getAllReqData() {
  //console.log("\n\n\nHRE\n\n\n");
  let res = null;

  axios.post('http://localhost:3001/graphql', {
    query: '{request{dbID}}',
  })
    .then(function (response) {
      if(response['data']['data']['request']) {
        res = response['data']['data']['request'];
      }

      return res;
    })
    .catch(function (error) {
      console.log(error);
    });

  //return res;
}

export default getAllReqData;
