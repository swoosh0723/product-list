import axios from 'axios';
import styled from 'styled-components'
import Goods from './Goods'

const GoodsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

axios.get('https://static.msscdn.net/musinsaUI/homework/data/goods0.json')
  .then((result) => {
    console.log(result.data)
  })
  .catch(() => {
    console.log('실패임')
  });

function goodsList() {
  return (
    <GoodsList>
      <Goods></Goods>
      <Goods></Goods>
    </GoodsList>
  )
}

export default goodsList
