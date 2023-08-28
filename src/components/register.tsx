import { useState } from "react";
import { register } from "../services/user-service.js";
import FormInputs from "../common/FormInputs.js";
function Register({ setCurrentUser }: any) {
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      register(newUser, setCurrentUser);
      //setUser(response.data);
      //setCurrentUser(true);
    } catch (ex: any) {
      if (ex.response && ex.response.status === 400) {
        setErrors(ex.response.data);
      }
    }
  };

  return (
    <div className="register">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <FormInputs input={newUser} setInput={setNewUser} errors={errors} />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default Register;
