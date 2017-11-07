import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLInt,
  GraphQLList,
} from 'graphql';

import Guard from './GuardType';

const Security = new GraphQLObjectType({
  name: 'Security',
  description: 'Security group for an event',
  fields: () => {
    return {
      dbID: {
        type: GraphQLInt,
        resolve(security) {
          return security.dbID;
        },
      },
      accessID: {
        type: GraphQLString,
        resolve(security) {
          return security.accessID;
        },
      },
      supervisor: {
        type: GraphQLString,
        resolve(security) {
          return security.supervisor;
        },
      },
      distribution: {
        type: GraphQLString,
        resolve(security) {
          return security.distribution;
        },
      },
      guardRegularRate: {
        type: GraphQLFloat,
        resolve(security) {
          return security.guardRegularRate;
        },
      },
      guardRegularHours: {
        type: GraphQLFloat,
        resolve(security) {
          return security.guardRegularHours;
        },
      },
      guardOTRate: {
        type: GraphQLFloat,
        resolve(security) {
          return security.guardOTRate;
        },
      },
      guardOTHours: {
        type: GraphQLFloat,
        resolve(security) {
          return security.guardOTHours;
        },
      },
      scspRegularRate: {
        type: GraphQLFloat,
        resolve(security) {
          return security.scspRegularRate;
        },
      },
      scspRegularHours: {
        type: GraphQLFloat,
        resolve(security) {
          return security.scspRegularHours;
        },
      },
      scspOTRate: {
        type: GraphQLFloat,
        resolve(security) {
          return security.scspOTRate;
        },
      },
      scspOTHours: {
        type: GraphQLFloat,
        resolve(security) {
          return security.scspOTHours;
        },
      },
      totalGuardBillable: {
        type: GraphQLFloat,
        resolve(security) {
          return security.totalGuardBillable;
        },
      },
      totalSCSPBillable: {
        type: GraphQLFloat,
        resolve(security) {
          return security.totalSCSPBillable;
        },
      },
      preparedBy: {
        type: GraphQLString,
        resolve(security) {
          return security.preparedBy;
        },
      },
      remarks: {
        type: GraphQLString,
        resolve(security) {
          return security.remarks;
        },
      },
      guards: {
        type: new GraphQLList(Guard),
        resolve(security) {
          return security.getGuards();
        },
      },
    };
  },
});

export default Security;
