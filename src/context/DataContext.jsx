import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [user, setuser] = useState(null);

  const login = (userData) => {
    setuser(userData);
    console.log(user);
  };

//   const logout = () => {
//     setuser(null);
//   };

  return (
    <DataContext.Provider value={{ user, login }}>
      {children}
    </DataContext.Provider>
  );
};
