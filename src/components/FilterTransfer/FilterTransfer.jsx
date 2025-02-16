/* eslint-disable indent */
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import {
  checkAll,
  checkNot,
  checkOne,
  checkTwo,
  checkThree,
  checkAuto,
  unCheckAll,
  clearCheck,
} from '../redux/store/transferSlice'

import classes from './FilterTransfer.module.scss'

export default function FilterTransfer() {
  const dispatch = useDispatch()

  const checkState = useSelector((state) => state.transfer)

  const { checkedAll, checkedNot, checkedOne, checkedTwo, checkedThree } = checkState

  useEffect(() => {
    if (checkedNot && checkedOne && checkedTwo && checkedThree && !checkedAll) dispatch(checkAuto())
    if (checkedAll && (!checkedNot || !checkedOne || !checkedTwo || !checkedThree)) dispatch(unCheckAll())
  }, [checkedNot, checkedOne, checkedTwo, checkedThree, checkedAll, dispatch])

  const changeCheckBox = (id) => {
    switch (id) {
      case 'all':
        if (checkedAll) return dispatch(clearCheck())
        return dispatch(checkAll())
      case 'without':
        return dispatch(checkNot())
      case 'one':
        return dispatch(checkOne())
      case 'two':
        return dispatch(checkTwo())
      case 'three':
        return dispatch(checkThree())
      default:
        return null
    }
  }

  return (
    <section className={classes.filters__transfer}>
      <h1 className={classes['filters__transfer-title']}>Количество пересадок</h1>
      <div className={classes.filters__list}>
        <label className={classes.custom__checkbox} htmlFor="all">
          <input
            type="checkbox"
            id="all"
            className={classes.filter__transfer}
            checked={checkedAll}
            onChange={(event) => changeCheckBox(event.target.id)}
          />
          <span className={classes.box} />
          <span>Все</span>
        </label>
        <label className={classes.custom__checkbox} htmlFor="without">
          <input
            type="checkbox"
            id="without"
            className={classes.filter__transfer}
            checked={checkedNot}
            onChange={(event) => changeCheckBox(event.target.id)}
          />
          <span className={classes.box} />
          <span>Без пересадок</span>
        </label>
        <label className={classes.custom__checkbox} htmlFor="one">
          <input
            type="checkbox"
            id="one"
            className={classes.filter__transfer}
            checked={checkedOne}
            onChange={(event) => changeCheckBox(event.target.id)}
          />
          <span className={classes.box} />
          <span>1 пересадка</span>
        </label>
        <label className={classes.custom__checkbox} htmlFor="two">
          <input
            type="checkbox"
            id="two"
            className={classes.filter__transfer}
            checked={checkedTwo}
            onChange={(event) => changeCheckBox(event.target.id)}
          />
          <span className={classes.box} />
          <span>2 пересадки</span>
        </label>
        <label className={classes.custom__checkbox} htmlFor="three">
          <input
            type="checkbox"
            id="three"
            className={classes.filter__transfer}
            checked={checkedThree}
            onChange={(event) => changeCheckBox(event.target.id)}
          />
          <span className={classes.box} />
          <span>3 пересадки</span>
        </label>
      </div>
    </section>
  )
}
