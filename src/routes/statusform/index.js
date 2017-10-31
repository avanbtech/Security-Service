import React from 'react';
import StatusForm from './statusform';

export const path = '/StatusForm';
export const action = async (state) => {

  console.log("\n\n\n\n");
  console.log(state);
  console.log("\n\n\n")

  const title = 'Status form that displays current request status and information user entered';
  state.context.onSetTitle(title);
  return <StatusForm title={title} />;
};
