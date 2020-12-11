const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

const movies = [
    { id: '1', name: 'Pulp Fiction', genre: 'crime' },
    { id: '2', name: 'Fight Club', genre: 'action' },
    { id: '3', name: 'Fast and Furious', genre: 'Action' },
    { id: '4', name: 'Snatch', genre: 'crime-comedy' },
    
];

const MovieType = new GraphQLObjectType({
    name: 'Movie',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
    }),
});

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        movie: {
            type: MovieType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args) {
                
            }
        },
    },
});

module.exports = new GraphQLSchema({
    query: Query,
})