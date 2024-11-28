import { useMemo } from 'react';

const useBillFilter = (bills, filterMonth, filterCategory) => {
  const filteredBills = useMemo(() => {
    return bills.filter((bill) => {
      const billDate = new Date(bill.date);
      const monthMatch = filterMonth ? billDate.getMonth() + 1 === parseInt(filterMonth) : true;
      const categoryMatch = filterCategory ? bill.category === filterCategory : true;
      return monthMatch && categoryMatch;
    });
  }, [bills, filterMonth, filterCategory]);

  return filteredBills;
};

export default useBillFilter;
