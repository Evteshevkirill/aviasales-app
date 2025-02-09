import classes from './FilterTickets.module.scss'

export default function FilterTickets() {
  return (
    <div className={classes.filter__tickets}>
      <button type="button" className={`${classes.button__filter} ${classes.active}`}>
        Самый дешевый
      </button>
      <button type="button" className={classes.button__filter}>
        Самый быстрый
      </button>
      <button type="button" className={classes.button__filter}>
        Оптимальный
      </button>
    </div>
  )
}
