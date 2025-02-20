import PropTypes from 'prop-types'

import Logo from '../Header/Logo'
import FilterTickets from '../FilterTickets/FilterTickets'
import FilterTransfer from '../FilterTransfer/FilterTransfer'
import TicketsList from '../TicketsList/TicketsList'
import Loader from '../Loader/Loader'
import withApp from '../HOC/withApp'

import classes from './App.module.scss'

function App({ error, loading }) {
  return (
    <div className={classes['aviasales-app']}>
      <Logo />
      <main className={classes.main}>
        <div className={classes['filter__transfer-menu']}>
          <FilterTransfer />
        </div>
        <div className={classes['filter__tickets-menu']}>
          <FilterTickets />
          {loading && <Loader />}
          {error && <p>{error}</p>}
          <TicketsList />
        </div>
      </main>
    </div>
  )
}

export default withApp(App)

App.defaultProps = {
  error: '',
}

App.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
}
