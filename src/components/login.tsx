import { useState } from "react";
import { login } from "../services/user-service.js";
import FormInputs from "../common/FormInputs.js";
function Login({ setCurrentUser }: any) {
  const [loginUser, setLoginUser] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      login(loginUser, setCurrentUser);
      //setUser(response.data);
      // setCurrentUser(true);
    } catch (ex: any) {
      if (ex.response && ex.response.status === 400) {
        setErrors(ex.response.data);
        setCurrentUser(false);
      }
    }
  };

  return (
    <div className="register">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <FormInputs input={loginUser} setInput={setLoginUser} errors={errors} />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default Login;
