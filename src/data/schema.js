import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLSchema
} from 'graphql';

import GraphQLDate from 'graphql-date';

import Db from '../core/db';

//Types
const Form  = new GraphQLObjectType({
  name: 'Form',
  description: 'Form submission type',
  fields: () => {
    return {
      id: {
        type: GraphQLString,
        resolve(form) {
          return form.id;
        }
      },
      status: {
        type: GraphQLString,
        resolve(form) {
          return form.status;
        }
      },
      statusDate: {
        type: GraphQLDate,
        resolve(form) {
          return form.statusDate;
        }
      },
      sfuBCID: {
        type: GraphQLString,
        resolve(form) {
          return form.sfuBCID;
        }
      },
      department: {
        type: GraphQLString,
        resolve(form) {
          return form.department;
        }
      },
      date: {
        type: GraphQLDate,
        resolve(form) {
          return form.date;
        }
      },
      requestBy: {
        type: GraphQLString,
        resolve(form) {
          return form.requestBy;
        }
      },
      phone: {
        type: GraphQLString,
        resolve(form) {
          return form.phone;
        }
      },
      fax: {
        type: GraphQLString,
        resolve(form) {
          return form.fax;
        }
      },
      email: {
        type: GraphQLString,
        resolve(form) {
          return form.email;
        }
      },
      nameOfevent: {
        type: GraphQLString,
        resolve(form) {
          return form.nameOfevent;
        }
      },
      licensed: {
        type: GraphQLInt,
        resolve(form) {
          return form.licensed;
        }
      },
      location: {
        type: GraphQLString,
        resolve(form) {
          return form.location;
        }
      },
      numberOfattendees: {
        type: GraphQLInt,
        resolve(form) {
          return form.numberOfattendees;
        }
      },
      eventDates: {
        type: new GraphQLList(GraphQLString),
        resolve(form) {
          var dates = form.eventDates.split(';');
          return dates;
        }
      },
      times: {
        type: GraphQLInt,
        resolve(form) {
          return form.times;
        }
      },
      details: {
        type: GraphQLString,
        resolve(form) {
          return form.details;
        }
      },
      accountCode: {
        type: GraphQLInt,
        resolve(form) {
          return form.accountCode;
        }
      },
      invoice: {
        type: GraphQLInt,
        resolve(form) {
          return form.invoice;
        }
      },
      authorizedBy: {
        type: GraphQLString,
        resolve(form) {
          return form.authorizedBy;
        }
      },
      authorizedID: {
        type: GraphQLString,
        resolve(form) {
          return form.authorizedID;
        }
      },
      authorizedDate: {
        type: GraphQLDate,
        resolve(form) {
          return form.authorizedDate;
        }
      },
      authorizedPhone: {
        type: GraphQLString,
        resolve(form) {
          return form.authorizedPhone;
        }
      }
    };
  }
});


//Queries
const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query',
  fields: () => {
    return {
      form: {
        type: new GraphQLList(Form),
        resolve(root, args) {
          return Db.models.form.findAll({where: args});
        }
      }
    };
  }
});

//Input types
var FormArgs = {
  id: {
    type: GraphQLInt,
  },
  status: {
    type: GraphQLString,
  },
  statusDate: {
    type: GraphQLString,
  },
  sfuBCID: {
    type: GraphQLString,
  },
  department: {
    type: GraphQLString,
  },
  date: {
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
  nameOfevent: {
    type: GraphQLString,
  },
  licensed: {
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
  }
}

// Mutations
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Root Mutation',
  fields : () => {
    return {
      addForm: {
        type: Form,
        args: FormArgs,

        resolve(source, args) {
          return Db.models.form.create({
            id: args.id,
            status: args.status,
            statusDate: args.statusDate,
            sfuBCID: args.sfuBCID,
            department: args.department,
            date: args.date,
            requestBy: args.requestBy,
            phone: args.phone,
            fax: args.fax,
            email: args.email,
            nameOfevent: args.nameOfevent,
            licensed: args.licensed,
            location: args.location,
            numberOfattendees: args.numberOfattendees,
            eventDates: args.eventDates.split(';'),
            times: args.times,
            details: args.details,
            accountCode: args.accountCode,
            invoice: args.invoice,
            authorizedBy: args.authorizedBy,
            authorizedID: args.authorizedID,
            authorizedDate: args.authorizedDate,
            authorizedPhone: args.authorizedPhone
          });
        }
      }
    }
  }
});

const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});

export default Schema;
