/* eslint-disable indent */
/* eslint-disable consistent-return */
/* eslint-disable func-names */
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { createSelector } from 'reselect'

const getFilteredTickets = createSelector(
  (state) => state.fetchTickets.tickets,
  (state) => state.transferFilter,
  (state) => state.ticketsFilter,
  (tickets, transferFilter, ticketsFilter) => {
    const { checkedAll, checkedNot, checkedOne, checkedTwo, checkedThree } = transferFilter

    const { lowPrice, fast, optimal } = ticketsFilter

    const filterTransfer = tickets.filter((ticket) => {
      const segmentsArray = ticket.segments
      const stopsCount = segmentsArray.reduce((count, segment) => count + segment.stops.length, 0)

      switch (true) {
        case checkedAll:
          return true
        case checkedNot && stopsCount === 0:
          return true
        case checkedOne && stopsCount === 1:
          return true
        case checkedTwo && stopsCount === 2:
          return true
        case checkedThree && stopsCount === 3:
          return true
        default:
          return false
      }
    })

    if (lowPrice) return filterTransfer.sort((a, b) => a.price - b.price)

    if (fast) return filterTransfer.sort((a, b) => a.segments[0].duration - b.segments[0].duration)

    if (optimal)
      return filterTransfer.sort((a, b) => a.price - b.price + a.segments[0].duration - b.segments[0].duration)
  }
)

export default function withTicketsList(Component) {
  return function () {
    const [visibleTickets, setVisibleTickets] = useState(5)

    const filteredTickets = useSelector(getFilteredTickets)

    const { checkedNot, checkedOne, checkedTwo, checkedThree } = useSelector((state) => state.transferFilter)

    const unChecked = !checkedNot && !checkedOne && !checkedTwo && !checkedThree ? true : null

    const showMoreTickets = () => {
      setVisibleTickets((prev) => prev + 5)
    }

    return (
      <Component
        tickets={filteredTickets}
        visibleTickets={visibleTickets}
        showMoreTickets={showMoreTickets}
        unChecked={unChecked}
      />
    )
  }
}
