import { signInWithGooglePopup } from "../../utils/firebase/firebase.utlis";
const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };
  return (
    <div>
      <h1> Sign-In page</h1>
      <button onClick={logGoogleUser}>sign in with google Popup</button>
    </div>
  );
};
export default SignIn;
