import React from 'react';

export const path = '/ServiceView/export_guard_list/:id';
export const action = async (state) => {
  //TODO: add code for converting guard info to PDF, use state.params.id to look up the guard
  console.log('Guard ID: ', state.params.id);
  res.redirect('/');
};
