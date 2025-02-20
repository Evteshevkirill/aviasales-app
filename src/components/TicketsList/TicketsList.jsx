import PropTypes from 'prop-types'

import Ticket from '../Ticket/Ticket'
import withTicketsList from '../HOC/withTicketsList'

import classes from './TicketsList.module.scss'

function TicketsList({ visibleTickets, showMoreTickets, tickets, unCheckedAllCheckbox }) {
  return (
    <div className={classes['tickets__list-wrapper']}>
      <ul className={classes.tickets__list}>
        {tickets.slice(0, visibleTickets).map((ticket, index) => (
          <Ticket key={`ticket-${index + Math.random() * 10}`} ticket={ticket} />
        ))}
      </ul>
      {visibleTickets < tickets.length && (
        <button type="button" className={classes.tickets__more} onClick={showMoreTickets}>
          Показать еще 5 билетов
        </button>
      )}
      {unCheckedAllCheckbox && <p className={classes.tickets__not}>Выберите фильтр для подбора билетов</p>}
    </div>
  )
}

export default withTicketsList(TicketsList)

TicketsList.defaultProps = {
  tickets: [],
}

TicketsList.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.object),
  visibleTickets: PropTypes.number.isRequired,
  showMoreTickets: PropTypes.func.isRequired,
  unCheckedAllCheckbox: PropTypes.bool.isRequired,
}
