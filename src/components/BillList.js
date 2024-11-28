import React, { useState } from 'react';

const BillList = ({ bills, onDelete, onSelect }) => {
  const [filterMonth, setFilterMonth] = useState('');
  const [filterCategory, setFilterCategory] = useState('');

  const handleMonthChange = (e) => {
    setFilterMonth(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setFilterCategory(e.target.value);
  };

  const filteredBills = bills.filter((bill) => {
    const billDate = new Date(bill.date); // 假设账单对象中有一个 date 属性
    const monthMatch = filterMonth ? billDate.getMonth() + 1 === parseInt(filterMonth) : true;
    const categoryMatch = filterCategory ? bill.category === filterCategory : true;
    return monthMatch && categoryMatch;
  });

  return (
    <div>
      <div>
        <label>
          按月份筛选:
          <select value={filterMonth} onChange={handleMonthChange}>
            <option value="">所有月份</option>
            <option value="1">一月</option>
            <option value="2">二月</option>
            <option value="3">三月</option>
            <option value="4">四月</option>
            <option value="5">五月</option>
            <option value="6">六月</option>
            <option value="7">七月</option>
            <option value="8">八月</option>
            <option value="9">九月</option>
            <option value="10">十月</option>
            <option value="11">十一月</option>
            <option value="12">十二月</option>
          </select>
        </label>
        <label>
          按类别筛选:
          <select value={filterCategory} onChange={handleCategoryChange}>
            <option value="">所有类别</option>
            <option value="food">食物</option>
            <option value="entertainment">娱乐</option>
            <option value="transport">交通</option>
            {/* 添加其他类别选项 */}
          </select>
        </label>
      </div>
      <ul>
        {filteredBills.map((bill, index) => (
          <li key={index}>
            <span onClick={() => onSelect(index)}>
              {bill.name} - {bill.amount} - {bill.category} - {bill.type}
            </span>
            <button onClick={() => onDelete(index)}>删除</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BillList;
