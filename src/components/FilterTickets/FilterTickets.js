import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { handlePrice, handleFast, handleOptimal } from '../redux/ticketsFilterSlice'
import { ticketsFilter } from '../redux/selectors'
import classes from '../styles/FilterTickets.module.scss'

const FilterTickets = () => {
  const dispatch = useDispatch()
  const { lowPrice, fast, optimal } = useSelector(ticketsFilter)
  return React.createElement(
    'div',
    { className: classes.buttons__filter },
    React.createElement(
      'button',
      {
        type: 'button',
        className: `${classes.button__filter} ${lowPrice && classes.active}`,
        onClick: () => dispatch(handlePrice()),
      },
      '\u0421\u0430\u043C\u044B\u0439 \u0434\u0435\u0448\u0435\u0432\u044B\u0439'
    ),
    React.createElement(
      'button',
      {
        type: 'button',
        className: `${classes.button__filter} ${fast && classes.active}`,
        onClick: () => dispatch(handleFast()),
      },
      '\u0421\u0430\u043C\u044B\u0439 \u0431\u044B\u0441\u0442\u0440\u044B\u0439'
    ),
    React.createElement(
      'button',
      {
        type: 'button',
        className: `${classes.button__filter} ${optimal && classes.active}`,
        onClick: () => dispatch(handleOptimal()),
      },
      '\u041E\u043F\u0442\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439'
    )
  )
}
export default FilterTickets
