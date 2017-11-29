/* guard_view/index.js
** The index file for the guard view
*/

import React from 'react';
import GuardJobs from './GuardJobs';
import axios from 'axios';
import methods from '../../data/dbFetchMethods';

function contains(a, obj) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
}

async function getData(dispatchNumber) {
  let res = [];
  const url = "https://cmpt373-1177g.cmpt.sfu.ca/guardjobcheck";

  await axios.post(url,{
      dispatchNumber: dispatchNumber
  })
  .then(function (response) {
    res = response;
  })
  .catch(function (error) {
    console.log(error.data);
  });

return res;
}

export const path = '/GuardJobs/:dispatchNumber';
export const action = async (state) => {
    const title = 'Status form that displays current request status and information user entered';

    let res = null;
    /*
    await getData(state.params.referenceID).then((response) => {
        res = response.data.reqData;
    });
    */
    //begin Replace with commented code above for VM use.
    res = await methods.getReqForGuardJobs(state.params.dispatchNumber);
    //end
    let request = [];

    if (res == null || res[0] == null ){
        request[0] = ({
            accessID:"",
            guardname:"",
            location:"",
            startDate:"",
            endDate:"",

        })
    } else {

        for(let x = 0; x < res.length; x++){
            request.push({
                accessID: res[x]['accessID'],
                guardname: res[x]['guardname'],
                location: res[x]['location'],
                startDate: res[x]['startDate'].split("T")[0],
                endDate: res[x]['endDate'].split("T")[0],
            });
        }
    }


    state.context.onSetTitle(title);
    return <GuardJobs guardJobs={request} />;
};
