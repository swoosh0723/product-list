import styled from 'styled-components'

const FilterButton = styled.button`
  display: block;
  padding: 7px 15px;
  border: 1px solid #eee;
  border-radius: 18px;
  font-size: 14px;
`

function filterButton() {
  return (
    <FilterButton>
      세일상품
    </FilterButton>
  )
}

export default filterButton