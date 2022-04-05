import React, { useState } from 'react';
import styled from 'styled-components'

// components
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

const FilterLabelBox = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  gap: 0 5px;
  padding: 12px 15px;
`

const FilterButtonItem = styled.button`
  display: block;
  padding: 7px 15px;
  border: 1px solid #eee;
  border-radius: 18px;
  font-size: 14px;
  color: ${({ active }) => active ? '#0078ff' : 'black'};
`

function GoodsFilter({ id, value, name, active, handleClickFilterButton }) {
  // function filterButtonToogle(id) {
  //   return function () {
  //     setFilterButton(
  //       prev => prev.map(item => item.id === id
  //         ? { ...item, active: !item.active }
  //         : item)
  //     )
  //   }
  // }

  return (
    <FilterButtonItem
      onClick={() => handleClickFilterButton(value)}
      active={active}
    >
      {name}
    </FilterButtonItem>
  )
}

export default GoodsFilter