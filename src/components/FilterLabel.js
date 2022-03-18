import styled from 'styled-components'

import { ReactComponent as CloseIcon } from '../icons/ic-14-line-close.svg';

const FilterLabelItem = styled.div`
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

function FilterLabel(props) {
  return (
    <FilterLabelItem>
      {props.filterName}
      <CloseIcon
        onClick={() => {
          console.log('닫기')
        }}
      >
      </CloseIcon>
    </FilterLabelItem>
  )
}

export default FilterLabel