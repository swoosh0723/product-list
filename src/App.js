import React from 'react';

// css
import './css/productList.scss';

// components
import Header from './components/Header'
import Filter from './components/Filter'
import GoodsList from './components/GoodsList'
import Util from './components/Util'

function App() {
  return (
    <div className="main">
      <Header></Header>
      <Filter></Filter>
      <Util></Util>
      <GoodsList></GoodsList>
    </div>
  );
}

export default App;
