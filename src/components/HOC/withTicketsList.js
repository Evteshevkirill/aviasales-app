/* eslint-disable indent */
/* eslint-disable consistent-return */
/* eslint-disable func-names */
import { useSelector } from 'react-redux'
import React, { useState } from 'react'

import { getFilteredTickets, transferFilter } from '../redux/selectors'

const withTicketsList = (Component) => {
  return function (props) {
    const [visibleTickets, setVisibleTickets] = useState(5)
    const filteredTickets = useSelector(getFilteredTickets)
    const { checkedNot, checkedOne, checkedTwo, checkedThree } = useSelector(transferFilter)
    const unCheckedAllCheckbox = !checkedNot && !checkedOne && !checkedTwo && !checkedThree ? true : null
    const showMoreTickets = () => {
      setVisibleTickets((prev) => prev + 5)
    }
    return React.createElement(Component, {
      ...props,
      tickets: filteredTickets ?? [],
      visibleTickets,
      showMoreTickets,
      unCheckedAllCheckbox,
    })
  }
}
export default withTicketsList
