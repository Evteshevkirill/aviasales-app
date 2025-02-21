/* eslint-disable indent */
/* eslint-disable consistent-return */
/* eslint-disable func-names */
import { useSelector } from 'react-redux'
import { useState, useCallback } from 'react'

import { getFilteredTickets, transferFilter } from '../redux/selectors'

export default function withTicketsList(Component) {
  return function () {
    const [visibleTickets, setVisibleTickets] = useState(5)

    const filteredTickets = useSelector(getFilteredTickets)

    const { checkedNot, checkedOne, checkedTwo, checkedThree } = useSelector(transferFilter)

    const unCheckedAllCheckbox = !checkedNot && !checkedOne && !checkedTwo && !checkedThree ? true : null

    const showMoreTickets = useCallback(() => {
      setVisibleTickets((prev) => prev + 5)
    }, [])

    return (
      <Component
        tickets={filteredTickets}
        visibleTickets={visibleTickets}
        showMoreTickets={showMoreTickets}
        unCheckedAllCheckbox={unCheckedAllCheckbox}
      />
    )
  }
}
