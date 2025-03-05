import React, { JSX } from 'react'

import logo from '../../assets/logo.svg'
import classes from '../styles/Logo.module.scss'

export default function Logo(): JSX.Element {
  return (
    <header className={classes.header}>
      <img className={classes.header__logo} src={logo} alt="logo" />
    </header>
  )
}
