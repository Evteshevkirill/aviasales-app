import { format, parseISO, addHours } from 'date-fns'

import classes from './Ticket.module.scss'

export default function TicketBody({ segments }) {
  return segments.map((segment, index) => {
    const { stops, duration, date, origin, destination } = segment

    const stopsText = stops.length ? `${stops.length} пересадка(и)` : 'Без пересадок'
    const stopsInfo = stops.length ? stops.join(', ') : null

    const isoDate = parseISO(date)
    const formattedTime = format(isoDate, 'HH:mm')

    const hours = Math.floor(duration / 60)
    const minutes = duration % 60
    const formattedDuration = `${hours}ч ${minutes}м`

    const hoursWhere = addHours(isoDate, duration)
    const formattedHoursWhere = format(hoursWhere, 'HH:mm')
    return (
      <div key={`ticketBody-${index + Math.random() * 10}`} className={classes.ticket__body}>
        <div className={classes.ticket__items}>
          <div className={classes['ticket__item-info']}>
            <p className={classes['ticket__item-title']}>
              {origin} &mdash; {destination}
            </p>
            <p className={classes['ticket__item-text']}>
              {formattedTime} &mdash; {formattedHoursWhere}
            </p>
          </div>
          <div className={classes['ticket__item-info']}>
            <p className={classes['ticket__item-title']}>в пути</p>
            <p className={classes['ticket__item-text']}>{formattedDuration}</p>
          </div>
          <div className={classes['ticket__item-info']}>
            <p className={classes['ticket__item-title']}>{stopsText}</p>
            <p className={classes['ticket__item-text']}>{stopsInfo}</p>
          </div>
        </div>
      </div>
    )
  })
}
