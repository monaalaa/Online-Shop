import { useState } from "react";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utlis";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utlis";
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SingUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormField = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password != confirmPassword) {
      alert("password not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, {
        displayName,
      });
      resetFormField();
    } catch (error) {
      if (error.code === "uth/email-already-in-use")
        alert("email already in use");
      else console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1> Sign up with email and password</h1>

      <form onSubmit={() => {}}>
        <label>Display Name </label>
        <input
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        ></input>

        <label>Email</label>
        <input
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        ></input>

        <label>Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        ></input>

        <label>Confirm Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        ></input>

        <button type="submit" onClick={handleSubmit}>
          Sign up
        </button>
      </form>
    </div>
  );
};
export default SingUpForm;
