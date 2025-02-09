import logo from '../../assets/logo.svg'

import classes from './Logo.module.scss'

export default function Logo() {
  return (
    <header className={classes.header}>
      <img className={classes.header__logo} src={logo} alt="logo" />
    </header>
  )
}
