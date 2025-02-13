import { useDispatch } from 'react-redux'

import { checkedAll, checkedNot, checkedOne, checkedTwo, checkedThree } from '../redux/actions'

import classes from './FilterTransfer.module.scss'

export default function FilterTransfer() {
  const dispatch = useDispatch()
  const changeCheckBoxAll = () => {
    dispatch(checkedAll())
  }

  const changeCheckBoxNot = () => {
    dispatch(checkedNot())
  }

  const changeCheckBoxOne = () => {
    dispatch(checkedOne())
  }

  const changeCheckBoxTwo = () => {
    dispatch(checkedTwo())
  }

  const changeCheckBoxThree = () => {
    dispatch(checkedThree())
  }
  return (
    <section className={classes.filters__transfer}>
      <h1 className={classes['filters__transfer-title']}>Количество пересадок</h1>
      <div className={classes.filters__list}>
        <label className={classes.custom__checkbox} htmlFor="all">
          <input type="checkbox" id="all" className={classes.filter__transfer} onChange={changeCheckBoxAll} />
          <span className={classes.box} />
          <span>Все</span>
        </label>
        <label className={classes.custom__checkbox} htmlFor="without">
          <input type="checkbox" id="without" className={classes.filter__transfer} onChange={changeCheckBoxNot} />
          <span className={classes.box} />
          <span>Без пересадок</span>
        </label>
        <label className={classes.custom__checkbox} htmlFor="one">
          <input type="checkbox" id="one" className={classes.filter__transfer} onChange={changeCheckBoxOne} />
          <span className={classes.box} />
          <span>1 пересадка</span>
        </label>
        <label className={classes.custom__checkbox} htmlFor="two">
          <input type="checkbox" id="two" className={classes.filter__transfer} onChange={changeCheckBoxTwo} />
          <span className={classes.box} />
          <span>2 пересадки</span>
        </label>
        <label className={classes.custom__checkbox} htmlFor="three">
          <input type="checkbox" id="three" className={classes.filter__transfer} onChange={changeCheckBoxThree} />
          <span className={classes.box} />
          <span>3 пересадки</span>
        </label>
      </div>
    </section>
  )
}
