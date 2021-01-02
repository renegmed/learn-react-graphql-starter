const graphtql = require('graphql')
const {
    GraphQLObjectType, 
    GrahpQLString
} = graphql; 

const UserType = new GraphQLObjectType({
    name: 'UserType',
    fields: {
        email: { type: GraphQLString }
    }
});

module.exports = UserType;