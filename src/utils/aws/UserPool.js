import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-east-1_dm3FV28co",
    ClientId: "78giafniv8n4t9kopp9qd1lh87"
}

export default new CognitoUserPool(poolData);