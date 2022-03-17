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
  const [filterButton, setFilterButton] = useState([
    {
      id: 1,
      name: '세일상품',
      active: false,
    },
    {
      id: 2,
      name: '단독상품',
      active: false,
    },
    {
      id: 3,
      name: '품절포함',
      active: false,
    }
  ]);

  const [filterLabelText, setFilterLabelText] = useState([])

  // function filterButtonToogle(id) {
  //   return function () {
  //     setFilterButton(
  //       prev => prev.map(item => item.id === id
  //         ? { ...item, active: !item.active }
  //         : item)
  //     )
  //   }
  // }

  // function filterButtonToogle(id) {
  //   return function () {
  //     filterButton.map((item, i) => {
  //       return (
  //         prev => prev.map(item => item.id === id
  //           ? console.log(filterButton[i].name)
  //           : console.log(filterButton[i].name)
  //         )

  //       )
  //     })
  //   }
  // }
  function filterButtonToogle() {
    console.log(123213213)
  }

  // function filterButtonToogle(id) {
  //   return function () {
  //     filterButton.map((item, i) => {
  //       return (
  //         console.log(id)

  //       )
  //     })
  //   }
  // }

  return (
    <FilterBox>
      <FilterButtonBox>
        {
          filterButton.map((item, i) => {
            return (
              <FilterButton
                key={i}
                filterButtonName={item.name}
                filterButtonActive={item.active}
                // filterButtonToogle={filterButtonToogle(item.id)}
                filterButtonToogle={filterButtonToogle}
              >
              </FilterButton>
            )
          })
        }
      </FilterButtonBox>
      {
        filterLabelText.length === 0
          ? null
          :
          <FilterLabelBox>
            {
              filterLabelText.map((item, i) => {
                return (
                  <FilterLabel
                    key={i}
                    filterLabelText={filterLabelText}
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