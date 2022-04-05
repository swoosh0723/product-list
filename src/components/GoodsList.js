import styled from 'styled-components'
import Goods from './Goods'

const GoodsListBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px 0;
`

function GoodsList(props) {
  function onError(e) {
    e.target.src = 'https://image.msscdn.net/musinsaUI/homework/data/img.jpg';
  }

  return (
    <GoodsListBox>
      {
        props.goodsData.map((item, i) => {
          return (
            <Goods
              key={i}
              goodsData={item}
              onError={onError}
            >
            </Goods>
          )
        })
      }
    </GoodsListBox>
  )
}

export default GoodsList
