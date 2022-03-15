import styled from 'styled-components'

const FilterBox = styled.div`
  display: block;
  padding: 7px 15px;
  border: 1px solid #eee;
  border-radius: 18px;
  font-size: 14px;
`

function Filter() {
  return (
    <FilterBox>
      세일상품
    </FilterBox>
  )
}

export default Filter