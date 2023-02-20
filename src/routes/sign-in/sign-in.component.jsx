import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utlis";

const SignIn = () => {
  useEffect(() => {
    const fetch = () => {
      //const response = await getRedirectResult(auth);
      console.log(" ************");
    };
    fetch();
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  const logGoogleRedirectUser = async () => {
    const { user } = await signInWithGoogleRedirect();
    console.log(user);
  };

  return (
    <div>
      <h1> Sign-In page</h1>
      <button onClick={logGoogleUser}>sign in with google Popup</button>
      <button onClick={signInWithGoogleRedirect}>
        sign in with google redirect
      </button>
    </div>
  );
};
export default SignIn;
