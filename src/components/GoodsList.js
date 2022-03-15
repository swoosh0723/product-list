import React, { useState, useEffect } from 'react';

import axios from 'axios';
import styled from 'styled-components'
import Goods from './Goods'

const GoodsListBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px 0;
`

function GoodsList(props) {
  const [goodsData, setGoodsData] = useState([]);

  useEffect(() => {
    axios.get('https://static.msscdn.net/musinsaUI/homework/data/goods0.json')
      .then((result) => {
        const goodsAPI = result.data.data.list
        const goodsTest = [
          ...goodsAPI
        ]

        setGoodsData(goodsTest)
      })
      .catch(() => {
        console.log('실패임')
      });
  }, []);

  return (
    <GoodsListBox>
      {
        goodsData.map((item, i) => {
          return (
            <Goods
              key={i}
              goodsData={item}
            >
            </Goods>
          )
        })
      }
    </GoodsListBox>
  )
}

export default GoodsList
