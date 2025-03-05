/* eslint-disable indent */
/* eslint-disable consistent-return */
/* eslint-disable func-names */
import { useSelector } from 'react-redux'
import React, { JSX, useState } from 'react'

import { ITicket } from '../types/types'
import { getFilteredTickets, transferFilter } from '../redux/selectors'

interface IWithTicketsListProps {
  tickets: ITicket[]
  visibleTickets: number
  showMoreTickets: () => void
  unCheckedAllCheckbox: boolean | null
}

const withTicketsList = <T extends {}>(
  Component: React.ComponentType<IWithTicketsListProps>
): ((props: T) => JSX.Element) => {
  return function (props) {
    const [visibleTickets, setVisibleTickets] = useState(5)

    const filteredTickets = useSelector(getFilteredTickets)

    const { checkedNot, checkedOne, checkedTwo, checkedThree } = useSelector(transferFilter)

    const unCheckedAllCheckbox = !checkedNot && !checkedOne && !checkedTwo && !checkedThree ? true : null

    const showMoreTickets = () => {
      setVisibleTickets((prev) => prev + 5)
    }

    return (
      <Component
        {...props}
        tickets={filteredTickets ?? []}
        visibleTickets={visibleTickets}
        showMoreTickets={showMoreTickets}
        unCheckedAllCheckbox={unCheckedAllCheckbox}
      />
    )
  }
}

export default withTicketsList
