import styled from 'styled-components'

const GoodsBox = styled.div`
  width:100%;
`

const ThumbnailBox = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  background-color: #ddd;
`

const Information = styled.div`
  display: grid;
  grid-template-areas: 
    'brandName brandName'
    'goodsName goodsName'
    'price rate'
    'normalPrice normalPrice';
  width: 100%;
  padding-right: 10px;
  margin-top: 20px;
  box-sizing: border-box;
`

const BrandName = styled.span`
  grid-area: brandName;
  font-size: 11px;
`

const GoodsName = styled.span`
  grid-area: goodsName;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 400;
`

const Price = styled.strong`
  grid-area: price;
  margin-top: 4px;
  font-size: 16px;
  font-weight: 400;
`

const Rate = styled.em`
  grid-area: rate;
  margin-top: 4px;
  font-size: 16px;
  font-style: normal;
  color: #f00;
`

const NormalPrice = styled.span`
  grid-area: normalPrice;
  font-size: 11px;
  color: #aaa;
`

function Goods() {
  return (
    <GoodsBox>
      <ThumbnailBox>

      </ThumbnailBox>

      <Information>
        <BrandName>브랜드명</BrandName>
        <GoodsName>상품이름</GoodsName>
        <Price>가격</Price>
        <Rate>35%</Rate>
        <NormalPrice>가격</NormalPrice>
      </Information>
    </GoodsBox>
  )
}

export default Goods