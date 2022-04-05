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
  const [originData, setOriginData] = useState([]);
  const [goodsListData, setGoodsListData] = useState([]);
  const [filter, setFilter] = useState(filterData);

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

          setOriginData(goodsAPI_DATA)
          setGoodsListData(goodsAPI_DATA)
        })
      )
      .catch(() => {
        console.log('실패임')
      });
  }, []);

  console.log(filter)

  const handleClickFilterButton = (value) => {
    setFilter((currValue) => {
      return currValue.reduce((acc, cur) => {
        if (cur.value === value) {
          acc.push({
            ...cur, active: !cur.active
          });
        } else {
          acc.push(cur);
        }

        return acc
      }, [])
    })
  }

  // console.log(filter)

  return (
    <GoodsPageContents>
      <div>
        {
          filter.map(({ id, value, name, active }, i) => {
            return (
              <GoodsFilter
                key={i}
                id={id}
                value={value}
                name={name}
                active={active}
                handleClickFilterButton={handleClickFilterButton}
              />
            )
          })
        }
      </div>

      <div>
        {
          filter.map((item, i) => {
            if (!item.active) {
              return null
            }

            return (
              <span
                key={i}
                onClick={() => handleClickFilterButton(item.value)}
              >
                {item.name}
              </span>
            )
          })
        }
      </div>


      <Util
      ></Util>

      <GoodsList
        goodsData={goodsListData}
      ></GoodsList>
    </GoodsPageContents>
  )
}

export default GoodsPage
