import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} from 'graphql';

import requestType from './RequestType';

const Event = new GraphQLObjectType({
  name: 'Event',
  description: 'An event in a request',
  fields: () => {
    return {
      dbID: {
        type: GraphQLInt,
        resolve(event) {
          return event.dbID;
        },
      },
      nameOfEvent: {
        type: GraphQLString,
        resolve(event) {
          return event.nameOfEvent;
        },
      },
      location: {
        type: GraphQLString,
        resolve(event) {
          return event.location;
        },
      },
      numberOfattendees: {
        type: GraphQLInt,
        resolve(event) {
          return event.numberOfattendees;
        },
      },
      eventDates: {
        type: new GraphQLList(GraphQLString),
        resolve(event) {
          const dates = event.eventDates.split(';');
          return dates;
        },
      },
      times: {
        type: GraphQLString,
        resolve(event) {
          return event.times;
        },
      },
      request: {
        type: requestType,
        resolve(event) {
          return event.getRequest();
        },
      },
    };
  },
});

export default Event;
