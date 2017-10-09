import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
} from 'graphql';

const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'The person making a request',
  fields: () => {
    return {
      dbID: {
        type: GraphQLInt,
        resolve(event) {
          return event.dbID;
        }
      },
      sfuBCID: {
        type: GraphQLString,
        resolve(event) {
          return event.sfuBCID;
        }
      },
      department: {
        type: GraphQLString,
        resolve(request) {
          return request.department;
        }
      },
      requestBy: {
        type: GraphQLString,
        resolve(request) {
          return request.requestBy;
        }
      },
      phone: {
        type: GraphQLString,
        resolve(request) {
          return request.phone;
        }
      },
      fax: {
        type: GraphQLString,
        resolve(request) {
          return request.fax;
        }
      },
      email: {
        type: GraphQLString,
        resolve(request) {
          return request.email;
        }
      },
      licensed: {
        type: GraphQLString,
        resolve(request) {
          return request.licensed;
        },
      },
    };
  }
});

export default UserType;
