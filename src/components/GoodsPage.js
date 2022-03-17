import React, { useState, useEffect } from 'react';

import axios from 'axios';
import styled from 'styled-components'

// components
import GoodsFilter from './GoodsFilter'
import Util from './Util'
import GoodsList from './GoodsList'

const GoodsPageContents = styled.div`
  display: block;
  width: 100%;
  padding-bottom: 50px;
`

function GoodsPage(props) {
  // Goods
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

  // Filter
  const [filterValue, setFilterValue] = useState([]);

  function filterButton(value) {
    return function () {
      const filterButtonValue = [...filterValue]
      setFilterValue(filterButtonValue)


      // arr = arr.filter(function (item) {
      //   return item !== value
      // })


      if (filterButtonValue.find(item => item === value)) {
        filterButtonValue.delete(value)
      } else {
        filterButtonValue.push(value)
      }

      console.log(filterValue)
    }
  }

  // Sale
  function filterSale() {
    const goodsSale = [...goodsData]
    const filterGoodsSale = goodsSale.filter(value => value.isSale === true);

    setGoodsData(filterGoodsSale)
  }

  // Exclusive
  function filterExclusive() {
    const goodsExclusive = [...goodsData]
    const filterGoodsExclusive = goodsExclusive.filter(
      value => value.isExclusive === true || value.isSoldOut === true
    );

    setGoodsData(filterGoodsExclusive)
  }

  // Soldout
  function filterSoldout() {
    const goodsSoldout = [...goodsData]
    const filterGoodsSoldout = goodsSoldout.filter(value => value.isSoldOut === true);

    setGoodsData(filterGoodsSoldout)
  }

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
      <GoodsFilter
        filterButton={filterButton}
      >
      </GoodsFilter>
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
