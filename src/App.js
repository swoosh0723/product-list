import React, { Component } from 'react';

// css
import './css/productList.scss';

// components
import Header from './components/Header'
import FilterButton from './components/FilterButton'
import FilterLabel from './components/FilterLabel'
import GoodsList from './components/GoodsList'
import Util from './components/Util'

function App() {
  return (
    <div className="main">
      <Header></Header>
      <GoodsList></GoodsList>
      <FilterButton></FilterButton>
      <FilterLabel></FilterLabel>
      <Util></Util>
    </div>
  );
}

export default App;
