import { useDispatch, useSelector } from 'react-redux'

import { handlePrice, handleFast, handleOptimal } from '../redux/ticketsFilterSlice'
import { ticketsFilter } from '../redux/selectors'

import classes from './FilterTickets.module.scss'

export default function FilterTickets() {
  const dispatch = useDispatch()
  const { lowPrice, fast, optimal } = useSelector(ticketsFilter)

  return (
    <div className={classes.buttons__filter}>
      <button
        type="button"
        className={`${classes.button__filter} ${lowPrice && classes.active}`}
        onClick={() => dispatch(handlePrice())}
      >
        Самый дешевый
      </button>
      <button
        type="button"
        className={`${classes.button__filter} ${fast && classes.active}`}
        onClick={() => dispatch(handleFast())}
      >
        Самый быстрый
      </button>
      <button
        type="button"
        className={`${classes.button__filter} ${optimal && classes.active}`}
        onClick={() => dispatch(handleOptimal())}
      >
        Оптимальный
      </button>
    </div>
  )
}
