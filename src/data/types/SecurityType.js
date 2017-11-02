import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
} from 'graphql';


const Security = new GraphQLObjectType({
  name: 'Security',
  description: 'Event security group for an event',
  fields: () => {
    return {
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
    };
  },
});

export default Security;
