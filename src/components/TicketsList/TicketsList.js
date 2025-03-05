/* eslint-disable prettier/prettier */
import React from 'react'

import Ticket from '../Ticket/Ticket'
import withTicketsList from '../HOC/withTicketsList'
import classes from '../styles/TicketsList.module.scss'

const TicketsList = ({ visibleTickets, showMoreTickets, tickets, unCheckedAllCheckbox }) => {
  return React.createElement(
    'div',
    { className: classes['tickets__list-wrapper'] },
    React.createElement(
      'ul',
      { className: classes.tickets__list },
      tickets
        .slice(0, visibleTickets)
        .map((ticket, index) => React.createElement(Ticket, { key: `ticket-${index + Math.random() * 10}`, ticket }))
    ),
    visibleTickets < tickets.length &&
      React.createElement(
        'button',
        { type: 'button', className: classes.tickets__more, onClick: showMoreTickets },
        '\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0435\u0449\u0435 5 \u0431\u0438\u043B\u0435\u0442\u043E\u0432'
      ),
    unCheckedAllCheckbox &&
      React.createElement(
        'p',
        { className: classes.tickets__not },
        '\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0438\u043B\u044C\u0442\u0440 \u0434\u043B\u044F \u043F\u043E\u0434\u0431\u043E\u0440\u0430 \u0431\u0438\u043B\u0435\u0442\u043E\u0432'
      )
  )
}
export default withTicketsList(TicketsList)
