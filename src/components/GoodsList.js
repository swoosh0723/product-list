import React, { useState } from 'react';

import axios from 'axios';
import styled from 'styled-components'
import Goods from './Goods'

const GoodsListBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

function GoodsList(props) {
  const [goodsData, setGoodsData] = useState(
    [
      {
        "id": 6,
        "image": "//image.msscdn.net/images/goods_img/20190510/1041436/1041436_2_320.jpg",
        "brand": "무신사 스탠다드",
        "name": "무신사 스탠다드 양말",
        "content": "Born in France",
        "price": 120000,
        "rate": "30%",
        "stock": 1
      },

      {
        "id": 7,
        "image": "//image.msscdn.net/images/goods_img/20210624/2008928/2008928_6_320.jpg",
        "brand": "뉴발란스",
        "name": "슬리퍼",
        "content": "Born in Seoul",
        "price": 110000,
        "rate": "20%",
        "stock": 2
      },
    ]
  );

  console.log(goodsData)

  axios.get('https://static.msscdn.net/musinsaUI/homework/data/goods0.json')
    .then((result) => {

      const goodsAPI = result.data.data.list

      const goodsTest = [
        ...goodsData,
        ...goodsAPI
      ]

      setGoodsData(goodsTest)
    })
    .catch(() => {
      console.log('실패임')
    });

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
