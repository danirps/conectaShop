import React, { createContext, useContext, useState, useEffect } from "react";

const HistoryContext = createContext();

export const useHistory = () => {
  return useContext(HistoryContext);
};

export const HistoryProvider = ({ children }) => {
  const [history, setHistory] = useState(() => {
    const storedHistory = localStorage.getItem("productHistory");
    return storedHistory ? JSON.parse(storedHistory) : [];
  });

  const addToHistory = (product) => {
    setHistory((prevHistory) => {
      const updatedHistory = [product, ...prevHistory.filter((p) => p.id !== product.id)];
      if (updatedHistory.length > 10) {
        updatedHistory.pop(); // Remove o mais antigo
      }
      return updatedHistory;
    });
  };

  useEffect(() => {
    localStorage.setItem("productHistory", JSON.stringify(history));
  }, [history]);

  return (
    <HistoryContext.Provider value={{ history, addToHistory }}>
      {children}
    </HistoryContext.Provider>
  );
};
