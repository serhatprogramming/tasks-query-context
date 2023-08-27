import React, { createContext, useContext, useReducer } from "react";

const FilterContext = createContext();

const filterReducer = (state, action) => {
  switch (action.type) {
    case "SET_FILTER":
      return action.filter;
    default:
      return state;
  }
};

export const FilterProvider = ({ children }) => {
  const [filter, dispatch] = useReducer(filterReducer, "all");

  return (
    <FilterContext.Provider value={{ filter, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
