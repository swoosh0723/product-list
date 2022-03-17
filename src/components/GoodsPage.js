import React, { useState, useEffect } from 'react';

import axios from 'axios';
import styled from 'styled-components'

// components
import Util from './Util'
import GoodsList from './GoodsList'

const GoodsPageContents = styled.div`
  display: block;
  width: 100%;
  padding-bottom: 50px;

  ${Util}{
    background-color:pink;
  }
`

function GoodsPage(props) {
  const [goodsData, setGoodsData] = useState([]);

  const goodsCount = goodsData.length;

  useEffect(() => {
    axios.get('https://static.msscdn.net/musinsaUI/homework/data/goods0.json')
      .then((result) => {
        const goodsAPI_LIST = result.data.data.list
        const goodsAPI_DATA = [
          ...goodsAPI_LIST
        ]

        setGoodsData(goodsAPI_DATA)
      })
      .catch(() => {
        console.log('실패임')
      });
  }, []);


  // 뷰타입
  const [viewTypeColumn, setViewTypeColumn] = useState(2);
  const column = 'repeat(' + viewTypeColumn + ', 1fr)';

  function viewTypeButton() {
    viewTypeColumn === 3
      ? setViewTypeColumn(1)
      : setViewTypeColumn(viewTypeColumn + 1);
  }

  return (
    <GoodsPageContents>
      <Util
        goodsCount={goodsCount}
        viewTypeButton={viewTypeButton}
      ></Util>
      <GoodsList
        goodsData={goodsData}
        column={column}
      ></GoodsList>
    </GoodsPageContents>
  )
}

export default GoodsPage
