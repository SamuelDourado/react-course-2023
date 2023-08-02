import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {}
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storageIsLoggedIn = localStorage.getItem("isLoggedIn");
    if (storageIsLoggedIn === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    console.log('login 2');
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider 
        value={{ 
            isLoggedIn: isLoggedIn,
            onLogout: logoutHandler,
            onLogin: loginHandler 
            }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
