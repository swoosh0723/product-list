import styled from 'styled-components'

import { ReactComponent as CloseIcon } from '../icons/ic-14-line-close.svg';

const FilterLabel = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 0 4px;
  align-items: center;
  width: fit-content;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 12px;
  color: white;
  background-color: #0078FF;
`

function filterLabel() {
  return (
    <FilterLabel>
      필터 라벨
      <CloseIcon
        onClick={()=>{
          console.log('닫기')
        }}
      >
      </CloseIcon>
    </FilterLabel>
  )
}

export default filterLabel