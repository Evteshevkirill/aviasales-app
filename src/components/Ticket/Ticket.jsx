import TicketBody from './TicketBody'
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
        <TicketBody segments={segments} />
      </div>
    </li>
  )
}
