/* eslint-disable consistent-return */
/* eslint-disable indent */
import { createSelector } from 'reselect'

export const fetchTickets = (state) => state.fetchTickets.tickets
export const transferFilter = (state) => state.transferFilter
export const ticketsFilter = (state) => state.ticketsFilter

export const getFilteredTickets = createSelector(
  [fetchTickets, transferFilter, ticketsFilter],
  (AllTickets, activeTransferFilter, activeTicketsFilter) => {
    const { checkedAll, checkedNot, checkedOne, checkedTwo, checkedThree } = activeTransferFilter

    const { lowPrice, fast, optimal } = activeTicketsFilter

    const filterTransfer = AllTickets.filter((ticket) => {
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
