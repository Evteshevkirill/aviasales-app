/* eslint-disable indent */
import React, { JSX } from 'react'

import withFilterTransfer from '../HOC/withFilterTransfer'
import classes from '../styles/FilterTransfer.module.scss'

interface FilterTransferProps {
  checkedAll: boolean
  checkedNot: boolean
  checkedOne: boolean
  checkedTwo: boolean
  checkedThree: boolean
  changeCheckBox: (id: string) => void
}

const FilterTransfer: React.FC<FilterTransferProps> = (props): JSX.Element => {
  const { checkedAll, checkedNot, checkedOne, checkedTwo, checkedThree, changeCheckBox } = props
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

export default withFilterTransfer(FilterTransfer)
