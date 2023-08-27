import { useEffect, useState } from "react";

import { getUser } from "../services/user-service";

const useUsers = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    getUser(setLoggedIn);
  }, []);

  return { isLoggedIn };
};

export default useUsers;
