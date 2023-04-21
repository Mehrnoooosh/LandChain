import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [title, setTitle] = useState("");
  const [customBreadcrumb, setCustomBreadcrumb] = useState("");
  const authContextValue = {
    title,
    setTitle,
    customBreadcrumb,
    setCustomBreadcrumb,
  };
  useEffect(() => {
    setTitle("");
    setCustomBreadcrumb("");
  }, [location]);
  return (
    <AppContext.Provider value={authContextValue}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
