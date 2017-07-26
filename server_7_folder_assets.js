/**
 * modelo folder asset usage
 * Sample query
{
  folderAssets(projectId: "sampleId") {
    folderId,
    folderPath,
    assets {
        id,
        name,
        type,
    }
  }
}
 */

 // combine two requests: 1. /assets 2. /assets/assets
 // frontend decide what fileds to receive
const express = require('express');
const graphqlHTTP = require('express-graphql');
const { graphql, buildSchema } = require('graphql');

const schema = buildSchema(`
    type Query {
        folderAssets(projectId: String!): [Folder]
    }

    type Folder {
        folderId: String!
        folderPath: String!
        assets: [Asset]
    }

    type Asset {
        assetId: String
        name: String
        type: String

    }
`);

async function getFolders(projectId) {

    // fackData
    const folders = [{
        folderId: 'fId',
        folderPath: 'fName',
        assets: [],
    }, {
        folderId: 'fId2',
        folderPath: 'fName2',
        assets: [],
    }];

    const assetsInFolders = await Promise.all(folders.map(folder => getAssets(folder.folderId)));

    folders.forEach((folder, i) => {
        folder.assets = assetsInFolders[i];
    });

    return folders; 
}

async function getAssets(folderId) {

    // fackData
    return [{
        assetId: 'aId',
        name: 'aName',
        type: '360Image',
        // files: []
    }]
}

const root = {
    folderAssets: ({projectId}) => getFolders(projectId)
}

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');