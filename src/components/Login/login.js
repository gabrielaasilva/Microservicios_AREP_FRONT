import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import UserPool from "../../utils/aws/UserPool";

function getValueInput(){
  let inputName = document.getElementById("username").value;
  let inputPassword = document.getElementById("psw").value;

  console.log("username", inputName.value);
  console.log("Psw", inputPassword.value);
}

const user = new CognitoUser ({
    Username: email,
    Pool: UserPool,
  });

  
  const authenticate = () => {
    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });
    user.authenticateUser(authDetails, {
      onSuccess: (data) => {
        console.log("onSuccess: ", data);
        window.location.href = "components/Feed/feed.html"
      },
      onFailure: (err) => {
        console.error("onFailure: ", err);
      },
      newPasswordRequired: (data) => {
        console.log("newPasswordRequired: ", data);
      },
    });
  }



// variables input, boton
// evento al botón, ejecutar login 

