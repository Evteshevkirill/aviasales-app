import React from 'react'

import classes from '../styles/Ticket.module.scss'

import TicketsBody from './TicketsBody'

const Ticket = ({ ticket }) => {
  const { price, carrier, segments } = ticket
  return React.createElement(
    'li',
    { className: classes.ticket },
    React.createElement(
      'div',
      { className: classes.ticket__wrapper },
      React.createElement(
        'div',
        { className: classes.ticket__header },
        React.createElement('p', { className: classes.ticket__price }, price.toLocaleString('ru-RU'), ' \u0420'),
        React.createElement('img', {
          className: classes['ticket__img-company'],
          src: `https://pics.avs.io/99/36/${carrier}.png`,
          alt: 'avia-company',
        })
      ),
      React.createElement(TicketsBody, { segments })
    )
  )
}
export default Ticket
