import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
} from 'graphql';

import GraphQLDate from 'graphql-date';

const Guard = new GraphQLObjectType({
  name: 'Guard',
  description: 'Guard (part of a security group)',

  fields: () => {
    return {
      accessID: {
        type: GraphQLString,
        resolve(guard) {
          return guard.accessID;
        },
      },
      dispatchNumber: {
        type: GraphQLInt,
        resolve(guard) {
          return guard.dispatchNumber;
        },
      },
      location: {
        type: GraphQLString,
        resolve(guard) {
          return guard.location;
        },
      },
      startDate: {
        type: GraphQLDate,
        resolve(guard) {
          return guard.startDate;
        },
      },
      endDate: {
        type: GraphQLDate,
        resolve(guard) {
          return guard.endDate;
        },
      },
      guardname: {
        type: GraphQLString,
        resolve(guard) {
          return guard.guardname;
        },
      },
      telephone: {
        type: GraphQLString,
        resolve(guard) {
          return guard.telephone;
        },
      },
      remarks: {
        type: GraphQLString,
        resolve(guard) {
          return guard.remarks;
        },
      },
    };
  },
});


export default Guard;
