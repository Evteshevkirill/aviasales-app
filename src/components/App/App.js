import React from 'react'

import Logo from '../Header/Logo'
import FilterTickets from '../FilterTickets/FilterTickets'
import FilterTransfer from '../FilterTransfer/FilterTransfer'
import TicketsList from '../TicketsList/TicketsList'
import Loader from '../Loader/Loader'
import withApp from '../HOC/withApp'
import classes from '../styles/App.module.scss'

const App = ({ error, loading }) => {
  return React.createElement(
    'div',
    { className: classes['aviasales-app'] },
    React.createElement(Logo, null),
    React.createElement(
      'main',
      { className: classes.main },
      React.createElement(
        'div',
        { className: classes['filter__transfer-menu'] },
        React.createElement(FilterTransfer, null)
      ),
      React.createElement(
        'div',
        { className: classes['filter__tickets-menu'] },
        React.createElement(FilterTickets, null),
        loading && React.createElement(Loader, null),
        error && React.createElement('p', null, error),
        React.createElement(TicketsList, null)
      )
    )
  )
}
export default withApp(App)
