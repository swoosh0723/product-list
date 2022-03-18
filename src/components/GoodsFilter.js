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

const FilterLabelBox = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  gap: 0 5px;
  padding: 12px 15px;
`

function GoodsFilter(props) {
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
    <FilterBox>
      <FilterButtonBox>
        {
          props.filterButtonData.map((item, i) => {
            return (
              <FilterButton
                key={i}
                filterButtonName={item.name}
                filterButtonActive={item.active}
                // filterButtonToogle={filterButtonToogle(item.id)}
                // filterButtonToogle={filterButtonToogle}
                filterButton={props.filterButton(item.value, item.name)}
              >
              </FilterButton>
            )
          })
        }
      </FilterButtonBox>
      {
        props.filterName.length === 0
          ? null
          :
          <FilterLabelBox>
            {
              props.filterName.map((item, i) => {
                return (
                  <FilterLabel
                    key={i}
                    filterName={item}
                  >
                  </FilterLabel>
                )
              })
            }
          </FilterLabelBox>
      }
    </FilterBox>
  )
}

export default GoodsFilter