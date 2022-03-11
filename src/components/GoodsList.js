import styled from 'styled-components'
import Goods from './Goods'

const GoodsListBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

function GoodsList() {
  return (
    <GoodsListBox>
      <Goods></Goods>
      <Goods></Goods>
    </GoodsListBox>
  )
}

export default GoodsList