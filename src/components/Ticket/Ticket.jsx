import PropTypes from 'prop-types'

import TicketsBody from './TicketsBody'
import classes from './Ticket.module.scss'

export default function Ticket({ ticket }) {
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

Ticket.defaultProps = {
  ticket: {},
}

Ticket.propTypes = {
  ticket: PropTypes.shape({
    price: PropTypes.number,
    carrier: PropTypes.string,
    segments: PropTypes.array,
  }),
}
