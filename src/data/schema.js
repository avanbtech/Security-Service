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
        type: GraphQLInt,
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


// Mutations
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Root Mutation',
  fields : () => {
    return {
      addForm: {
        type: Form,
        args: {
          id: {
            type: GraphQLInt
          },
          requestBy: {
            type: GraphQLString
          },
          phone: {
            type: GraphQLInt
          }
        },
        resolve(source, args) {
          return Db.models.form.create({
            id: args.id,
            status: 'Pending',
            statusDate: new Date(2011, 0, 1, 0, 0, 0, 0),
            sfuBCID: 50505,
            department: 'APPSC',
            date: new Date(2013, 0, 1, 0, 0, 0, 0),
            requestBy: args.requestBy,
            phone: args.phone,
            fax: '',
            email: 'sankaitk@sfu.ca',
            nameOfevent: 'BOOM',
            licensed: 100,
            location: 'Home',
            numberOfattendees: 10,
            eventDates: [(new Date(2012, 0, 1, 0, 0, 0, 0)).toString(), (new Date(2019, 0, 1, 0, 0, 0, 0)).toString()],
            times: 21,
            details: 'THIS IS DETAIL',
            accountCode: 420,
            invoice: 32,
            authorizedBy: 'Sankait',
            authorizedID: '42342fkfdsf',
            authorizedDate: new Date(2012, 2,2,0,0,0,0),
            authorizedPhone: 7782415848
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
