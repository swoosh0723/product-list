import React, { useState, useEffect } from 'react';

import axios from 'axios';
import styled from 'styled-components'

// components
import GoodsFilter from './GoodsFilter'
import Util from './Util'
import GoodsList from './GoodsList'

// data
import filterData from '../data/filterData.json'

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
    axios
      .all([
        axios.get('https://static.msscdn.net/musinsaUI/homework/data/goods0.json'),
        axios.get('https://static.msscdn.net/musinsaUI/homework/data/goods1.json'),
      ])
      .then(
        axios.spread((result1, result2) => {
          const goodsAPI_LIST1 = result1.data.data.list
          const goodsAPI_LIST2 = result2.data.data.list
          const goodsAPI_DATA = [
            ...goodsAPI_LIST1,
            ...goodsAPI_LIST2
          ]

          setGoodsData(goodsAPI_DATA)
        })
      )
      .catch(() => {
        console.log('실패임')
      });
  }, []);

  // Filter, Label
  const [filterButtonData, setFilterButtonData] = useState(filterData);
  const [filterValue, setFilterValue] = useState([]);
  const [filterName, setFilterName] = useState([])

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

  function filterButton(value, name, active) {
    return function () {
      const filterButtonValue = [...filterValue]
      const filterButtonName = [...filterName]

      if (filterButtonValue.find(item => item === value || item === name)) {

      } else {
        filterButtonValue.push(value)
        filterButtonName.push(name)

        setFilterValue(filterButtonValue)
        setFilterName(filterButtonName)
      }

      console.log(filterButtonName);
    }
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
        filterButtonData={filterButtonData}
        filterButton={filterButton}
        filterName={filterName}
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
