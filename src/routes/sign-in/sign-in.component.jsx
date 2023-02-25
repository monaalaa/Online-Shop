import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utlis";

import SingUpForm from "../../Components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1> Sign-In page</h1>
      <button onClick={logGoogleUser}>sign in with google Popup</button>
      <SingUpForm />
    </div>
  );
};
export default SignIn;
