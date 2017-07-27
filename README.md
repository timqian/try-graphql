# GraphQL: A new way to structure your API endpoints

## Difference with rest API
GraphQL APIs are organized in terms of types and fields, not endpoints. 

## Advantages
1. With type system. *(Example: `server_1.js`)*
    - auto doc
    - auto ensure frontend only ask for whats possible 
    - auto provide clear error message
2. Ask for what you need, get exactly that. *(Example: `server_3.js`)*
3. Get many resources in a single request. *(Example: `server_4.js`)*


## Two concepts to grasp
1. **Schema**: A description of your data model
2. **Resolver**: One function for one API endpoint defined in *Schema*
