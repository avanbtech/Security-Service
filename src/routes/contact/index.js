import React from 'react';
import Contact from './Contact';

export const path = '/contact';
export const action = async (state) => {
  state.redirect("http://google.com");
  const title = 'Contact Us';
  state.context.onSetTitle(title);
  return <Contact title={title} />;
};
