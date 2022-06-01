import "./google.css";
import axios from "axios";
import { useEffect } from "react";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import FacebookLogin from "react-facebook-login";

const googleClientId = "1029980355734-k642a09cmscarg7dad5m1nguvllkf5gi.apps.googleusercontent.com";

function Login() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: googleClientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  }, []);

  const onSuccess = (res) => {
    console.log("sucess login", res);
    axios
      .post("https://motaka.herokuapp.com/googleLogin", {
        tokenId: res.tokenId,
      })
      .then((res) => {
        console.log(res.data);
        let a = "JWT " + res.data.access;
        axios
          .get("https://motaka.herokuapp.com/googleLogin", {
            headers: { Authorization: a },
          })
          .then((response) => {
            console.log("act", response.data);
            localStorage.setItem("token", JSON.stringify(res.data));
            localStorage.setItem("user", JSON.stringify(response.data));
            window.location.reload();
          })
          .catch((error) => {
            if (error.response) {
              console.log("error.response", error.response);
            } else if (error.request) {
              console.log("error.request ", error.request);
            } else if (error.message) {
              console.log("error.request ", error.message);
            }
          });
      })
      .catch((error) => {
        if (error.response) {
          console.log("error.response  google ", error.response);
         if (error.response.data.detail) {
           alert("user with this email already exists.")
         }
        } else if (error.request) {
          console.log("error.request ", error.request);
        } else if (error.message) {
          console.log("error.message ", error.message);
        }
      });
  };
  const onFailure = (res) => {
    console.log("failed login", res);
  };

  const responseFacebook = (response) => {
    console.log("hesa", response);
    console.log("token hesa", response.accessToken);

    // setAccessToken(response.accessToken);
    // console.log("token",accessToken);
    axios
      .post("https://motaka.herokuapp.com/facebookLogin", {
        accessToken: response.accessToken,
        userId:response.userID,
      })
      .then((res) => {
        console.log(res.data);
        let a = "JWT " + res.data.access;
        axios
          .get("https://motaka.herokuapp.com/facebookLogin", {
            headers: { Authorization: a },
          })
          .then((response) => {
            console.log("act fb", response.data);
            localStorage.setItem("token", JSON.stringify(res.data));
            localStorage.setItem("user", JSON.stringify(response.data));
            window.location.reload();
          })
          .catch((error) => {
            if (error.response) {
              console.log("error.response ", error.response);
            } else if (error.request) {
              console.log("error.request ", error.request);
            } else if (error.message) {
              console.log("error.request ", error.message);
            }
          });
      })
      .catch((error) => {
        if (error.response) {
          console.log("error.response ", error.response);
        } else if (error.request) {
          console.log("error.request ", error.request);
        } else if (error.message) {
          console.log("error.message ", error.message);
        }
      });
  };
  return (
    <div className="googlefacebook">
      <GoogleLogin
      
        className="google"
        clientId={googleClientId}
        buttonText="Sign up with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
        onAutoLoadFinished={true}
      />
        <p className="orr">OR</p>
      <FacebookLogin
        appId="1042792122994981"
        fields="name,email,picture"
        callback={responseFacebook}
        cssClass="my-facebook-button-class"
        icon="fa-facebook"
        textButton=" Sign up with Facebook"
      />
    </div>
  );
}

export default Login;
