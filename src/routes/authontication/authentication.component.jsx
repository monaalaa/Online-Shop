import SingUpForm from "../../Components/sign-up-form/sign-up-form.component";
import SignInForm from "../../Components/sign-in/sign-in-Component";
import "./authintication.style.scss";

const Authontication = () => {
  return (
    <div className="authintication-container">
      <SignInForm />
      <SingUpForm />
    </div>
  );
};
export default Authontication;
