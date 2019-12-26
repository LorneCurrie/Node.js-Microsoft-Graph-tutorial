const graph = require('@microsoft/microsoft-graph-client');
require('isomorphic-fetch');

module.exports = {
  getUserDetails: async (accessToken) => {
    const client = getAuthenticatedClient(accessToken);
    return client.api('/me').get();
  },
  getEvents: async (accessToken) => {
    const client = getAuthenticatedClient(accessToken);

    return client
      .api('/me/events')
      .select('subject,organizer,start,end')
      .orderby('createdDateTime DESC')
      .get();

  }
};

const getAuthenticatedClient = (accessToken) =>
  graph.Client.init({
    // Use the provided access token to authenticate
    // requests
    authProvider: (done) => {
      done(null, accessToken);
    }
  });

