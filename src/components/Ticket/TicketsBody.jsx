import { format, parseISO, addHours } from 'date-fns'
import PropTypes from 'prop-types'

import TicketBodyComponent from './TicketBodyComponent'

export default function TicketsBody({ segments }) {
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
      <TicketBodyComponent
        key={`ticketBody-${index + Math.random() * 10}`}
        origin={origin}
        destination={destination}
        stopsText={stopsText}
        stopsInfo={stopsInfo}
        formattedTime={formattedTime}
        formattedDuration={formattedDuration}
        formattedHoursWhere={formattedHoursWhere}
      />
    )
  })
}

TicketsBody.defaultProps = {
  segments: [],
}

TicketsBody.propTypes = {
  segments: PropTypes.array,
}
