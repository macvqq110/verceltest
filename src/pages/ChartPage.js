import React, {useContext} from 'react';
import Chart from '../components/Chart';
import BillContext from '../context/BillContext';

const ChartPage = () => {
    const { bills } = useContext(BillContext);
    console.log('bills', bills)
  return (
    <div>
      <h1>图表统计展示</h1>
      <Chart data={bills} />
    </div>
  );
};

export default ChartPage;
