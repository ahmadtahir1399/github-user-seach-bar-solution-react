import { useState } from "react";
import UserContext from "./userContext"; //

const UserContextProvider = ({ children}) => {
  const [userData, setUserData] = useState(null);

  const setUserDataValue = (data) => {
    setUserData(data);
  };

  return (
    <UserContext.Provider value={{ user: userData, setUser: setUserDataValue }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
