import Logo from '../Header/Logo'
import FilterTickets from '../FilterTickets/FilterTickets'
import FilterTransfer from '../FilterTransfer/FilterTransfer'
import TicketsList from '../TicketsList/TicketsList'

import classes from './App.module.scss'

function App() {
  return (
    <div className={classes['aviasales-app']}>
      <Logo />
      <main className={classes.main}>
        <div className={classes['filter__transfer-menu']}>
          <FilterTransfer />
        </div>
        <div className={classes.tickets__menu}>
          <FilterTickets />
          <TicketsList />
        </div>
      </main>
    </div>
  )
}

export default App
