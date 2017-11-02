import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
} from 'graphql';

import GraphQLDate from 'graphql-date';
import User from './UserType';
import Event from './EventType';
import Security from "./SecurityType";

const Request  = new GraphQLObjectType({
  name: 'Request',
  description: 'Form submission type',
  fields: () => {
    return {
      accessID: {
        type: GraphQLString,
        resolve(request) {
          return request.accessID;
        },
      },
      dbID: {
        type: GraphQLInt,
        resolve(request) {
          return request.dbID;
        },
      },
      status: {
        type: GraphQLString,
        resolve(request) {
          return request.status;
        },
      },
      statusDate: {
        type: GraphQLDate,
        resolve(request) {
          return request.statusDate;
        },
      },
      date: {
        type: GraphQLDate,
        resolve(request) {
          return request.date;
        },
      },
      details: {
        type: GraphQLString,
        resolve(event) {
          return event.details;
        },
      },
      accountCode: {
        type: GraphQLString,
        resolve(request) {
          return request.accountCode;
        },
      },
      invoice: {
        type: GraphQLInt,
        resolve(request) {
          return request.invoice;
        },
      },
      authorizedBy: {
        type: GraphQLString,
        resolve(request) {
          return request.authorizedBy;
        },
      },
      authorizedID: {
        type: GraphQLString,
        resolve(request) {
          return request.authorizedID;
        },
      },
      authorizedDate: {
        type: GraphQLDate,
        resolve(request) {
          return request.authorizedDate;
        },
      },
      authorizedPhone: {
        type: GraphQLString,
        resolve(request) {
          return request.authorizedPhone;
        },
      },
      user: {
        type: User,
        resolve(request) {
          return request.getUser();
        },
      },
      event: {
        type: Event,
        resolve(request) {
          return request.getEvent();
        },
      },
      security: {
        type: Security,
        resolve(request) {
          return request.getSecurity();
        },
      },
    };
  },
});

export default Request;
