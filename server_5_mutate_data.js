/**
 * Mutation endpoint
 * 
 * example mutation request
 * mutation {
 *   setMessage(message: 'abc')
 * }
 */
var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
type Mutation {
  setMessage(message: String): String
}

type Query {
  getMessage: String
}
`);

var fakeDatabase = {};
var root = {
  setMessage: function ({message}) {
    fakeDatabase.message = message;
    return message;
  },
  getMessage: function () {
    return fakeDatabase.message;
  }
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000, () => {
  console.log('Running a GraphQL API server at http://localhost:4000/graphql');
});