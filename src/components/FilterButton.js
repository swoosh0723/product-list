import styled from 'styled-components'

const FilterButtonItem = styled.button`
  display: block;
  padding: 7px 15px;
  border: 1px solid #eee;
  border-radius: 18px;
  font-size: 14px;
`

function FilterButton() {
  return (
    <FilterButtonItem>
      세일상품
    </FilterButtonItem>
  )
}

export default FilterButton