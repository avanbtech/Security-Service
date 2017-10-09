import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
} from 'graphql';

import GraphQLDate from 'graphql-date';


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
          return request.id;
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
        type: GraphQLInt,
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
    };
  },
});

export default Request;
