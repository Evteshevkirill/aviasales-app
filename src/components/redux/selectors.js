/* eslint-disable consistent-return */
/* eslint-disable indent */
import { createSelector } from 'reselect'

export const getFilteredTickets = createSelector(
  (state) => state.fetchTickets.tickets,
  (state) => state.transferFilter,
  (state) => state.ticketsFilter,
  (tickets, transferFilter, ticketsFilter) => {
    const { checkedAll, checkedNot, checkedOne, checkedTwo, checkedThree } = transferFilter

    const { lowPrice, fast, optimal } = ticketsFilter

    const filterTransfer = tickets.filter((ticket) => {
      const stopsCount = ticket.segments.reduce((count, segment) => count + segment.stops.length, 0)

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
