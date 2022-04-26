import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-east-1_OwV3vlPGv",
    ClientId: "4bmorlbh3c8apms9qf14fbq9f1"
}

export default new CognitoUserPool(poolData);