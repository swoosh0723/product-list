import styled from 'styled-components'

const UtilBox = styled.div`
  display: flex;
  align-items: center;
  padding: 0 15px;
  margin-bottom: 16px;
`

const GoodsCount = styled.span`
  font-size: 12px;

  strong{
    margin-left: 4px;
    font-size:14px;
  }
`

const ViewTypeButton = styled.button`
  width: auto;
  height: 40px;
  padding: 0 4px;
  margin-left: auto;
  border-radius: 2px;
  border: 1px solid #eee;
  font-size: 11px;
`

function Util(props) {
  return (
    <UtilBox>
      <GoodsCount>
        상품<strong>{props.goodsCount}</strong>개
      </GoodsCount>
      <ViewTypeButton
        onClick={props.viewTypeButton}
      >
        뷰 타입 변경
      </ViewTypeButton>
    </UtilBox>
  )
}

export default Util
