import styled from 'styled-components'
import Goods from './Goods'

const GoodsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

function goodsList() {
  return (
    <GoodsList>
      <Goods></Goods>
      <Goods></Goods>
    </GoodsList>
  )
}

export default goodsList
