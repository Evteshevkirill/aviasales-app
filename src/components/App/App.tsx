import React, { JSX } from 'react'

import Logo from '../Header/Logo'
import FilterTickets from '../FilterTickets/FilterTickets'
import FilterTransfer from '../FilterTransfer/FilterTransfer'
import TicketsList from '../TicketsList/TicketsList'
import Loader from '../Loader/Loader'
import withApp from '../HOC/withApp'
import classes from '../styles/App.module.scss'

interface IAppProps {
  error: string | null
  loading: boolean
}

const App: React.FC<IAppProps> = ({ error, loading }): JSX.Element => {
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
