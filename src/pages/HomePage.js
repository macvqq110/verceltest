import React, { useContext } from 'react';
import BillForm from '../components/BillForm';
import BillList from '../components/BillList';
import BillContext from '../context/BillContext';

const HomePage = () => {
  const { bills, dispatch } = useContext(BillContext);

  const addBill = (bill) => {
    dispatch({ type: 'ADD_BILL', payload: bill });
  };

  const deleteBill = (index) => {
    dispatch({ type: 'DELETE_BILL', payload: index });
  };

  return (
    <div>
      <h1>记账管理器</h1>
      <BillForm onSubmit={addBill} />
      <BillList bills={bills} onDelete={deleteBill} />
    </div>
  );
};

export default HomePage;
