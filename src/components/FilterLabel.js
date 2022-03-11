import styled from 'styled-components'

const FilterLabel = styled.span`
  display: block;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 12px;
  color: white;
  background-color: #0078FF;
`

function filterLabel() {
  return (
    <FilterLabel>
      스니커즈
    </FilterLabel>
  )
}

export default filterLabel