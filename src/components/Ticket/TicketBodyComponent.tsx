import React from 'react'

import classes from '../styles/Ticket.module.scss'

interface ITicketBodyComponentProps {
  origin: string
  destination: string
  stopsText: string
  stopsInfo: string | null
  formattedTime: string
  formattedDuration: string
  formattedHoursWhere: string
}

const TicketBodyComponent: React.FC<ITicketBodyComponentProps> = (props) => {
  const { origin, destination, stopsText, stopsInfo, formattedTime, formattedDuration, formattedHoursWhere } = props
  return (
    <div className={classes.ticket__body}>
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
}

export default TicketBodyComponent
