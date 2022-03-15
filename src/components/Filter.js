import React, { useState } from 'react';
import styled from 'styled-components'

// components
import FilterButton from './FilterButton'
import FilterLabel from './FilterLabel'

const FilterBox = styled.div`
  display: block;
`
const FilterButtonBox = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  gap: 0 5px;
  padding: 10px 7px;
`

function Filter() {
  const [filterButtonName, setFilterButtonName] = useState(['세일상품', '단독상품', '품절포함']);

  return (
    <FilterBox>
      <FilterButtonBox>
        {
          filterButtonName.map((item, i) => {
            return (
              <FilterButton
                key={i}
                filterButtonName={item}
              >
              </FilterButton>
            )
          })
        }
      </FilterButtonBox>
    </FilterBox>
  )
}

export default Filter