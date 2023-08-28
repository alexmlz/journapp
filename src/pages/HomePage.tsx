import { useState } from "react";
import Login from "../components/login";
import Register from "../components/register";
import useUsers from "../hooks/useUsers";
//import JournalPage from "./JournalPage";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [currentUser, setCurrentUser] = useState();
  const { isLoggedIn } = useUsers();

  const RegisterLogin = ({ setUser }: any) => {
    if (isLoggedIn || currentUser) return <Link to="/journals">Journals</Link>;

    return (
      <div className="register-login">
        <Login setUser={setUser} setCurrentUser={setCurrentUser} />
        <p>If you do not have an account yet, please register!</p>
        <Register setUser={setUser} setCurrentUser={setCurrentUser} />
      </div>
    );
  };
  return (
    <div>
      <RegisterLogin></RegisterLogin>
    </div>
  );
};

export default HomePage;
