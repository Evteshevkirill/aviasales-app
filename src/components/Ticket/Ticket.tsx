import React, { JSX } from 'react'

import { ITicket } from '../types/types'
import classes from '../styles/Ticket.module.scss'

import TicketsBody from './TicketsBody'

interface ITicketProps {
  ticket: ITicket
}

const Ticket: React.FC<ITicketProps> = ({ ticket }): JSX.Element => {
  const { price, carrier, segments } = ticket
  return (
    <li className={classes.ticket}>
      <div className={classes.ticket__wrapper}>
        <div className={classes.ticket__header}>
          <p className={classes.ticket__price}>{price.toLocaleString('ru-RU')} Р</p>
          <img
            className={classes['ticket__img-company']}
            src={`https://pics.avs.io/99/36/${carrier}.png`}
            alt="avia-company"
          />
        </div>
        <TicketsBody segments={segments} />
      </div>
    </li>
  )
}

export default Ticket
