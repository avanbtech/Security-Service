export const port = process.env.PORT || 3000;
export const host = process.env.WEBSITE_HOSTNAME || `localhost:${port}`;

export const databaseUrl = 'localhost'  || '';

export const analytics = {

  // https://analytics.google.com/
  google: { trackingId: process.env.GOOGLE_TRACKING_ID || 'UA-XXXXX-X' },

};

export const auth = {

  requestSys: {
    id: process.env.REQUESTSYS_ID || 'authtoken',
    secret: process.env.REQUESTSYS_SECRET || 'secrets',
  },

};
