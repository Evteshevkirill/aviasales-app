import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchSearchId, fetchTickets } from '../redux/store/ticketsSlice'
import Logo from '../Header/Logo'
import FilterTickets from '../FilterTickets/FilterTickets'
import FilterTransfer from '../FilterTransfer/FilterTransfer'
import TicketsList from '../TicketsList/TicketsList'

import classes from './App.module.scss'

function App() {
  const dispatch = useDispatch()

  const { loading, error, searchId } = useSelector((state) => state.tickets)

  useEffect(() => {
    dispatch(fetchSearchId())
  }, [dispatch])

  useEffect(() => {
    if (searchId) {
      dispatch(fetchTickets(searchId))
    }
  }, [searchId, dispatch])

  return (
    <div className={classes['aviasales-app']}>
      <Logo />
      <main className={classes.main}>
        <div className={classes['filter__transfer-menu']}>
          <FilterTransfer />
        </div>
        <div className={classes['filter__tickets-menu']}>
          <FilterTickets />
          {loading && <p>Loading...</p>}
          {error && <p>{`Не удалось загрузить билеты: ${error}`}</p>}
          {!error && !loading && <TicketsList />}
        </div>
      </main>
    </div>
  )
}

export default App
