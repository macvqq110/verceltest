import React, { createContext, useReducer } from 'react';

const BillContext = createContext();

const billReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BILL':
      return [...state, action.payload];
    case 'DELETE_BILL':
      return state.filter((_, index) => index !== action.payload);
    default:
      return state;
  }
};

export const BillProvider = ({ children }) => {
  const [bills, dispatch] = useReducer(billReducer, []);

  return (
    <BillContext.Provider value={{ bills, dispatch }}>
      {children}
    </BillContext.Provider>
  );
};

export default BillContext;
