import React from 'react'

import logo from '../../assets/logo.svg'
import classes from '../styles/Logo.module.scss'

export default function Logo() {
  return React.createElement(
    'header',
    { className: classes.header },
    React.createElement('img', { className: classes.header__logo, src: logo, alt: 'logo' })
  )
}
