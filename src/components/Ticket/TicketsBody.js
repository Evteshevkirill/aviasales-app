import React from 'react'
import { format, parseISO, addHours } from 'date-fns'

import TicketBodyComponent from './TicketBodyComponent'

const TicketsBody = ({ segments }) => {
  return React.createElement(
    React.Fragment,
    null,
    segments.map((segment, index) => {
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
      return React.createElement(TicketBodyComponent, {
        key: `ticketBody-${index + Math.random() * 10}`,
        origin,
        destination,
        stopsText,
        stopsInfo,
        formattedTime,
        formattedDuration,
        formattedHoursWhere,
      })
    })
  )
}
export default TicketsBody
