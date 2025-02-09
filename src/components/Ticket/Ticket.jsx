import company from '../../assets/company.png'

import classes from './Ticket.module.scss'

export default function Ticket() {
  return (
    <li className={classes.ticket}>
      <div className={classes.ticket__wrapper}>
        <div className={classes.ticket__header}>
          <p className={classes.ticket__price}>14 300 Р</p>
          <img className={classes['ticket__img-company']} src={company} alt="avia-company" />
        </div>
        <div className={classes.ticket__body}>
          <div className={classes.ticket__items}>
            <div className={classes['ticket__item-info']}>
              <p className={classes['ticket__item-title']}>mow &mdash; hkt</p>
              <p className={classes['ticket__item-text']}>10:45 &mdash; 12:00</p>
            </div>
            <div className={classes['ticket__item-info']}>
              <p className={classes['ticket__item-title']}>в пути</p>
              <p className={classes['ticket__item-text']}>1ч 15м</p>
            </div>
            <div className={classes['ticket__item-info']}>
              <p className={classes['ticket__item-title']}>2 пересадки</p>
              <p className={classes['ticket__item-text']}>hkg &mdash; jnb</p>
            </div>
          </div>
          <div className={classes.ticket__items}>
            <div className={classes['ticket__item-info']}>
              <p className={classes['ticket__item-title']}>mow &mdash; hkt</p>
              <p className={classes['ticket__item-text']}>10:45 &mdash; 12:00</p>
            </div>
            <div className={classes['ticket__item-info']}>
              <p className={classes['ticket__item-title']}>в пути</p>
              <p className={classes['ticket__item-text']}>1ч 15м</p>
            </div>
            <div className={classes['ticket__item-info']}>
              <p className={classes['ticket__item-title']}>2 пересадки</p>
              <p className={classes['ticket__item-text']}>hkg &mdash; jnb</p>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}
