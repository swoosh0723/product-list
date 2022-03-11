import { Link } from 'react-router-dom';
import styled from 'styled-components'

const GoodsBox = styled.div`
  width:100%;
`

const ThumbnailBox = styled.div`
  position: relative;
  width: 100%;
`

const Information = styled.div`
  width:100%;
  padding-right: 10px;
  box-sizing: border-box;
`

const BrandName = styled.sapn`
  font-size: 11px;
`

const GoodsName = styled.span`
  font-size: 14px;
  font-weight: 700;
`

const Price = styled.strong`
  font-size: 16px;
  font-weight: 400;
`

const Rate = styled.em`
  font-size: 16px;
  font-style: normal;
  color: #f00;
`

const NormalPrice = styled.span`
  font-size:11px;
  color: #aaa;
`

function Goods() {

  return (
    <GoodsBox>
      <ThumbnailBox>

      </ThumbnailBox>

      <Information>
        <BrandName></BrandName>
        <GoodsName></GoodsName>
        <Price></Price>
        <NormalPrice></NormalPrice>
      </Information>
    </GoodsBox>
  )
}

export default Goods