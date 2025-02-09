import Ticket from '../Ticket/Ticket'

import classes from './TicketsList.module.scss'

export default function TicketsList() {
  return (
    <ul className={classes.tickets__list}>
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
    </ul>
  )
}
