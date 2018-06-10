const dev = {
s3: {
REGION: "us-east-1",
BUCKET: "notes-app-2-api-dev-attachmentsbucket-p4a13gbbsjwe"
},
apiGateway: {
REGION: "us-east-1",
URL: "https://mz7m76bjgf.execute-api.us-east-1.amazonaws.com/dev"
},
cognito: {
REGION: "us-east-1",
USER_POOL_ID: "us-east-1_vfRIsvRYY",
APP_CLIENT_ID: "6avbqt7b72uslbtpt9qfjon76f",
IDENTITY_POOL_ID: "us-east-1:642f23ca-c948-4718-9376-2be19467a4fa"
}
};
const prod = {
s3: {
REGION: "us-east-1",
BUCKET: "notes-app-2-api-prod-attachmentsbucket-18jmruvmx4zd7"
},
apiGateway: {
REGION: "us-east-1",
URL: "https://xhf3jru129.execute-api.us-east-1.amazonaws.com/prod"
},
cognito: {
REGION: "us-east-1",
USER_POOL_ID: "us-east-1_cCIro6b47",
APP_CLIENT_ID: "527a89qb0v1rlqfghnm6co5u2i",
IDENTITY_POOL_ID: "us-east-1:8a545dd4-c38f-41ab-a5db-49b8eac8daba"
}
};
// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
? prod
: dev;
export default {
// Add common config values here
MAX_ATTACHMENT_SIZE: 5000000,
...config
};