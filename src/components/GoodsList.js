import { useSelector } from 'react-redux';

import axios from 'axios';
import styled from 'styled-components'
import Goods from './Goods'

const GoodsListBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

axios.get('https://static.msscdn.net/musinsaUI/homework/data/goods0.json')
  .then((result) => {
    console.log(result.data.list[1])
  })
  .catch(() => {
    console.log('실패임')
  });

function GoodsList(props) {
  const state = useSelector((state) => state)

  // console.log(state)

  return (
    <GoodsListBox>
      <Goods></Goods>
      <Goods></Goods>
    </GoodsListBox>
  )
}

export default GoodsList
