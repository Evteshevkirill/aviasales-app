import classes from './FilterTransfer.module.scss'

export default function FilterTransfer() {
  return (
    <section className={classes.filters__transfer}>
      <h1 className={classes['filters__transfer-title']}>Количество пересадок</h1>
      <div className={classes.filters__list}>
        <label className={classes.custom__checkbox} htmlFor="all">
          <input type="checkbox" id="all" className={classes.filter__transfer} />
          <span className={classes.box} />
          <span>Все</span>
        </label>
        <label className={classes.custom__checkbox} htmlFor="without">
          <input type="checkbox" id="without" className={classes.filter__transfer} />
          <span className={classes.box} />
          <span>Без пересадок</span>
        </label>
        <label className={classes.custom__checkbox} htmlFor="one">
          <input type="checkbox" id="one" className={classes.filter__transfer} />
          <span className={classes.box} />
          <span>1 пересадка</span>
        </label>
        <label className={classes.custom__checkbox} htmlFor="two">
          <input type="checkbox" id="two" className={classes.filter__transfer} />
          <span className={classes.box} />
          <span>2 пересадки</span>
        </label>
        <label className={classes.custom__checkbox} htmlFor="three">
          <input type="checkbox" id="three" className={classes.filter__transfer} />
          <span className={classes.box} />
          <span>3 пересадки</span>
        </label>
      </div>
    </section>
  )
}
