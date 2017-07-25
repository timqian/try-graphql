# GraphQL: Way to structure your API endpoints

### Ask for what you need, get exactly that
server_3

### Get many resources in a single request
server_4

### Advantages with a type system 
GraphQL APIs are organized in terms of types and fields, not endpoints. 
- auto doc
- auto ensure frontend only ask for whats possible 
- auto provide clear error message

## 2 concepts

1. **Schema**: define `Query` and `Mutation` type (structure API endpoints) A description of your data model with an associated set of resolve methods that know how to fetch any data your application could ever need.
2. **Resolver**: one function for one API endpoint