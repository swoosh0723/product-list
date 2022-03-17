import React, { useState } from 'react';
import styled from 'styled-components'

const FilterButtonItem = styled.button`
  display: block;
  padding: 7px 15px;
  border: 1px solid #eee;
  border-radius: 18px;
  font-size: 14px;
  color: ${({ filterButtonActive }) => filterButtonActive ? '#0078ff' : 'black'};
`

function FilterButton(props) {
  return (
    <FilterButtonItem
      filterButtonActive={props.filterButtonActive}
      onClick={props.filterButton}

    >
      {props.filterButtonName}
    </FilterButtonItem>
  )
}

export default FilterButton