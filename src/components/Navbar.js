import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <li><Link to="/">首页</Link></li>
      <li><Link to="/charts">图表统计</Link></li>
    </ul>
  </nav>
);

export default Navbar;
