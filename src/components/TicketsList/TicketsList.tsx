import React, { JSX } from 'react'

import Ticket from '../Ticket/Ticket'
import withTicketsList from '../HOC/withTicketsList'
import { ITicket } from '../types/types'
import classes from '../styles/TicketsList.module.scss'

interface ITicketsListProps {
  tickets: ITicket[]
  visibleTickets: number
  showMoreTickets: () => void
  unCheckedAllCheckbox: boolean | null
}

const TicketsList: React.FC<ITicketsListProps> = ({
  visibleTickets,
  showMoreTickets,
  tickets,
  unCheckedAllCheckbox,
}): JSX.Element => {
  return (
    <div className={classes['tickets__list-wrapper']}>
      <ul className={classes.tickets__list}>
        {tickets.slice(0, visibleTickets).map((ticket, index) => (
          <Ticket key={`ticket-${index + Math.random() * 10}`} ticket={ticket} />
        ))}
      </ul>
      {visibleTickets < tickets.length && (
        <button type="button" className={classes.tickets__more} onClick={showMoreTickets}>
          Показать еще 5 билетов
        </button>
      )}
      {unCheckedAllCheckbox && <p className={classes.tickets__not}>Выберите фильтр для подбора билетов</p>}
    </div>
  )
}

export default withTicketsList(TicketsList)
