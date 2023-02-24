import { useEffect } from "react";
import { getRedirectResult, getAdditionalUserInfo } from "firebase/auth";

import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utlis";

const SignIn = () => {
  useEffect(() => {
    async function _getRedirectResult() {
      const response = await getRedirectResult(auth);

      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    }

    _getRedirectResult();
  }, []);
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user, "User data");
    const userDocRef = await createUserDocumentFromAuth(user);
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
