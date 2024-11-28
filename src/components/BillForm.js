import React, { useState } from 'react';

const BillForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [type, setType] = useState('expense');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, amount: parseFloat(amount), category, type, date: new Date(date) });
    setName('');
    setAmount('');
    setCategory('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="账单名称" required />
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="金额" required />
      <select value={category} onChange={(e) => setCategory(e.target.value)} required>
        <option value="">选择类别</option>
        <option value="food">食物</option>
        <option value="entertainment">娱乐</option>
        <option value="transport">交通</option>
      </select>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="expense">支出</option>
        <option value="income">收入</option>
      </select>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      <button type="submit">提交</button>
    </form>
  );
};

export default BillForm;
