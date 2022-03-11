import React, { Component } from 'react';

// css
import './css/productList.scss';

// components
import Header from './components/Header'
import GoodsList from './components/GoodsList'
import FilterButton from './components/FilterButton'
import FilterLabel from './components/FilterLabel'

function App() {
  return (
    <div className="main">
      <Header></Header>
      <GoodsList></GoodsList>
      <FilterButton></FilterButton>
      <FilterLabel></FilterLabel>
    </div>
  );
}

export default App;
