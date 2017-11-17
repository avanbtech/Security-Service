import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
  GraphQLFloat,
} from 'graphql';

import Db from './db';
import Event from './types/EventType';
import User from './types/UserType';
import Request from './types/RequestType';
import Security from './types/SecurityType';
import Guard from './types/GuardType';

//Input types

const UserArgs = {
  dbID: {
    type: GraphQLInt,
  },
  sfuBCID: {
    type: GraphQLString,
  },
  department: {
    type: GraphQLString,
  },
  requestBy: {
    type: GraphQLString,
  },
  phone: {
    type: GraphQLString,
  },
  fax: {
    type: GraphQLString,
  },
  email: {
    type: GraphQLString,
  },
  licensed: {
    type: GraphQLString,
  },
};

const RequestArgs = {
  accessID: {
    type: GraphQLString,
  },
  dbID: {
    type: GraphQLInt,
  },
  status: {
    type: GraphQLString,
  },
  statusDate: {
    type: GraphQLString,
  },
  date: {
    type: GraphQLString,
  },
  details: {
    type: GraphQLString,
  },
  accountCode: {
    type: GraphQLString,
  },
  invoice: {
    type: GraphQLInt,
  },
  authorizedBy: {
    type: GraphQLString,
  },
  authorizedID: {
    type: GraphQLString,
  },
  authorizedDate: {
    type: GraphQLString,
  },
  authorizedPhone: {
    type: GraphQLString,
  },
};

const EventArgs = {
  dbID: {
    type: GraphQLInt,
  },
  nameOfEvent: {
    type: GraphQLString,
  },
  location: {
    type: GraphQLString,
  },
  numberOfattendees: {
    type: GraphQLInt,
  },
  eventDates: {
    type: GraphQLString
  },
  times: {
    type: GraphQLString,
  },
};

const GuardArgs = {
  groupID: {
    type: GraphQLInt,
  },
  accessID: {
    type: GraphQLString,
  },
  dispatchNumber: {
    type: GraphQLInt,
  },
  location: {
    type: GraphQLString,
  },
  startDate: {
    type: GraphQLString,
  },
  endDate: {
    type: GraphQLString,
  },
  telephone: {
    type: GraphQLString,
  },
  guardname: {
    type: GraphQLString,
  },
  remarks: {
    type: GraphQLString,
  },
};

const SecurityArgs = {
  groupID: {
    type: GraphQLInt,
  },
  accessID: {
    type:  GraphQLString,
  },
  dbID: {
    type: GraphQLInt,
  },
  supervisor: {
    type:  GraphQLString,
  },
  distribution: {
    type:  GraphQLString,
  },
  guardRegularRate: {
    type:  GraphQLFloat,
  },
  guardRegularHours: {
    type:  GraphQLFloat,
  },
  guardOTRate: {
    type:  GraphQLFloat,
  },
  guardOTHours: {
    type:  GraphQLFloat,
  },
  scspRegularRate: {
    type:  GraphQLFloat,
  },
  scspRegularHours: {
    type:  GraphQLFloat,
  },
  scspOTRate: {
    type:  GraphQLFloat,
  },
  scspOTHours: {
    type:  GraphQLFloat,
  },
  totalGuardBillable: {
    type:  GraphQLFloat,
  },
  totalSCSPBillable: {
    type:  GraphQLFloat,
  },
  preparedBy: {
    type:  GraphQLString,
  },
  remarks: {
    type:  GraphQLString,
  },
};

//Queries
const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query',
  fields: () => {
    return {
      user: {
        type: new GraphQLList(User),
        args: UserArgs,
        resolve(root, args) {
          return Db.models.user.findAll({where: args});
        },
      },

      request: {
        type: new GraphQLList(Request),
        args: RequestArgs,
        resolve(root, args) {
          return Db.models.request.findAll({where: args});
        },
      },

      event: {
        type: new GraphQLList(Event),
        args: EventArgs,
        resolve(root, args) {
          return Db.models.event.findAll({where: args});
        },
      },

      security: {
        type: new GraphQLList(Security),
        args: SecurityArgs,
        resolve(root, args) {
          return Db.models.security.findAll({where: args});
        },
      },

      guard: {
        type: new GraphQLList(Guard),
        args: GuardArgs,
        resolve(root, args) {
          return Db.models.guard.findAll({where: args});
        },
      },
    };
  },
});

// Mutations
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Root Mutation',
  fields : () => {
    return {

      // ADDING A USER
      addUser: {
        type: User,
        args: UserArgs,

        resolve(source, args) {
          return Db.models.user.create({
            dbID: args.dbID,
            sfuBCID: args.sfuBCID,
            department: args.department,
            requestBy: args.requestBy,
            phone: args.phone,
            fax: args.fax,
            email: args.email,
            licensed: args.licensed,
          });
        },
      },

      // ADDING A REQUEST
      addRequest: {
        type: Request,
        args: RequestArgs,

        resolve(source, args) {
          return Db.models.request.create({
            accessId: args.accessID,
            dbID: args.dbID,
            status: args.status,
            statusDate: args.statusDate,
            date: args.date,
            details: args.details,
            accountCode: args.accountCode,
            invoice: args.invoice,
            authorizedBy: args.authorizedBy,
            authorizedID: args.authorizedID,
            authorizedDate: args.authorizedDate,
            authorizedPhone: args.authorizedPhone
          });
        },
      },

      // ADDING AN EVENT
      addEvent: {
        type: Event,
        args: EventArgs,

        resolve(source, args) {
          return Db.models.event.create({
            dbID: args.dbID,
            nameOfEvent: args.nameOfEvent,
            numberOfattendees: args.numberOfattendees,
            location: args.location,
            eventDates: args.eventDates.split(';'),
            times: args.times,

          });
        },
      },
    };
  },
});

const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});

export default Schema;
