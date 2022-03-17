import React from 'react';

// css
import './css/productList.scss';

// components
import Header from './components/Header'
import GoodsFilter from './components/GoodsFilter'
import GoodsPage from './components/GoodsPage'

function App() {
  return (
    <div className="main">
      <Header></Header>
      <GoodsPage></GoodsPage>
    </div>
  );
}

export default App;
