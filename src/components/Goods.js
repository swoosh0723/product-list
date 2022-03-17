import styled from 'styled-components'
import { ReactComponent as Soldout } from '../icons/soldout.svg';

const fontMSS = 'Musinsa, "Apple SD Gothic Neo", Roboto, "Noto Sans KR", sans-serif'
const fontDefault = '"-apple-system", HelveticaNeue, Roboto, "Noto Sans KR", helvetica, Gulim, sans - serif'

const GoodsBox = styled.div`
  width:100%;
  font-family: ${fontDefault};
`

const ThumbnailBox = styled.div`
  position: relative;
  width: 100%;
  padding-top: 119%;
  background-color: #eee;

  svg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    z-index: 15;
  }
`

const Thumbnail = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  mix-blend-mode: multiply;
  z-index: 10;
`

const Label = styled.span`
  position: absolute;
  left: 10px;
  bottom: -14px;
  padding: 4px 6px;
  font-size: 12px;
  color: #fff;
  background-color: #18A286;
  z-index: 20;
`

const Information = styled.div`
  display: grid;
  grid-template-areas: 
    'brandName brandName'
    'goodsName goodsName'
    'price rate'
    'normalPrice normalPrice';
  width: 100%;
  padding: 0 10px;
  margin-top: 20px;
  box-sizing: border-box;
`

const BrandName = styled.span`
  grid-area: brandName;
  font-size: 11px;
`

const GoodsName = styled.span`
  grid-area: goodsName;
  // 두줄 말줄임
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  // 두줄 말줄임
  margin-top: 8px;
  font-size: 14px;
  font-weight: 400;
`

const Price = styled.strong`
  grid-area: price;
  margin-top: 4px;
  font-family: ${fontMSS};
  font-size: 16px;
  font-weight: 400;
`

const Rate = styled.em`
  grid-area: rate;
  margin-top: 4px;
  font-family: ${fontMSS};
  font-size: 16px;
  font-style: normal;
  color: #f00;
`

const NormalPrice = styled.span`
  grid-area: normalPrice;
  font-family: ${fontMSS};
  font-size: 11px;
  text-decoration: line-through;
  color: #aaa;
`

function Goods(props) {
  return (
    <GoodsBox>
      <ThumbnailBox>
        <Thumbnail
          src={props.goodsData.imageUrl}
          onError={props.onError}
        >
        </Thumbnail>

        {
          // soldout
          props.goodsData.isSoldOut &&
          <Soldout></Soldout>
        }

        {
          // 단독라벨
          props.goodsData.isExclusive &&
          <Label>단독</Label>
        }
      </ThumbnailBox>

      <Information>
        <BrandName>
          {props.goodsData.brandName}
        </BrandName>
        <GoodsName>
          {props.goodsData.goodsName}
        </GoodsName>
        <Price>
          {props.goodsData.price.toLocaleString()}원
        </Price>

        {/* 세일 일때 */}
        {
          props.goodsData.isSale &&
          <>
            <Rate>
              {props.goodsData.saleRate}%
            </Rate>
            <NormalPrice>
              {props.goodsData.normalPrice.toLocaleString()}원
            </NormalPrice>
          </>
        }
      </Information>
    </GoodsBox>
  )
}

export default Goods