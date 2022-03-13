import styled from 'styled-components'

const Util = styled.div`
  display: flex;
  align-items: center;
  padding: 0 15px;
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

function viewType(){
  console.log(123)
}

function util() {
  return (
    <Util>
      <GoodsCount>
        상품<strong>10</strong>개
      </GoodsCount>
      <ViewTypeButton
        onClick={viewType}
      >
        보기 버튼
      </ViewTypeButton>
    </Util>
  )
}

export default util
