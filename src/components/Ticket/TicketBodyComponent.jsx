import PropTypes from 'prop-types'

import classes from './Ticket.module.scss'

export default function TicketBodyComponent(props) {
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

TicketBodyComponent.defaultProps = {
  origin: '',
  destination: '',
  stopsText: '',
  stopsInfo: '',
  formattedTime: '',
  formattedDuration: '',
  formattedHoursWhere: '',
}

TicketBodyComponent.propTypes = {
  origin: PropTypes.string,
  destination: PropTypes.string,
  stopsText: PropTypes.string,
  stopsInfo: PropTypes.string,
  formattedTime: PropTypes.string,
  formattedDuration: PropTypes.string,
  formattedHoursWhere: PropTypes.string,
}
