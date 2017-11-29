/* guard_view/index.js
** The index file for the guard view
*/

import React from 'react';
import GuardView from './GuardView';
import axios from 'axios';
import methods from '../../data/dbFetchMethods'

function contains(a, obj) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
}

async function getData() {
  let res = [];
  const url = "https://cmpt373-1177g.cmpt.sfu.ca/guardcheck";

  await axios.post(url)
  .then(function (response) {
    res = response;
  })
  .catch(function (error) {
    console.log(error.data);
  });

return res;
}

export const path = '/GuardView';
export const action = async (state) => {
  const title = 'Status form that displays current request status and information user entered';

  let res = null;

  await getData(state.params.referenceID).then((response) => {
    res = response.data.reqData;
  });
 
//begin Replace with commented code above for VM use.
 // res = await methods.getReqForGuardView();
//end
  let request = [];
  let dispatchNumbers = [];

  if (res == null || res[0] == null ){
    request[0] = ({
      dispatchNumber: "",
      name: "",
      telephone: "",
    })
  } else {
      
    for(let x = 0; x < res.length; x++){
        if(!contains(dispatchNumbers, res[x]['dispatchNumber'])){
            request.push({
                dispatchNumber: res[x]['dispatchNumber'],
                name: res[x]['guardname'],
                telephone: res[x]['telephone'],
            });
            dispatchNumbers.push(res[x]['dispatchNumber']);
        }
    }
}


  state.context.onSetTitle(title);
  return <GuardView guardRequests={request} />;
};
