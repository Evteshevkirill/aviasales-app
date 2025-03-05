import React from 'react'

import classes from '../styles/Ticket.module.scss'

const TicketBodyComponent = (props) => {
  const { origin, destination, stopsText, stopsInfo, formattedTime, formattedDuration, formattedHoursWhere } = props
  return React.createElement(
    'div',
    { className: classes.ticket__body },
    React.createElement(
      'div',
      { className: classes.ticket__items },
      React.createElement(
        'div',
        { className: classes['ticket__item-info'] },
        React.createElement('p', { className: classes['ticket__item-title'] }, origin, ' \u2014 ', destination),
        React.createElement(
          'p',
          { className: classes['ticket__item-text'] },
          formattedTime,
          ' \u2014 ',
          formattedHoursWhere
        )
      ),
      React.createElement(
        'div',
        { className: classes['ticket__item-info'] },
        React.createElement('p', { className: classes['ticket__item-title'] }, '\u0432 \u043F\u0443\u0442\u0438'),
        React.createElement('p', { className: classes['ticket__item-text'] }, formattedDuration)
      ),
      React.createElement(
        'div',
        { className: classes['ticket__item-info'] },
        React.createElement('p', { className: classes['ticket__item-title'] }, stopsText),
        React.createElement('p', { className: classes['ticket__item-text'] }, stopsInfo)
      )
    )
  )
}
export default TicketBodyComponent
