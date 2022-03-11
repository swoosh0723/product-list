import React, { Component } from 'react';

// css
import './css/productList.scss';

// components
import Header from './components/Header'
import GoodsList from './components/GoodsList'

function App() {
  return (
    <div className="main">
      <Header></Header>
      <GoodsList></GoodsList>
    </div>
  );
}

export default App;
