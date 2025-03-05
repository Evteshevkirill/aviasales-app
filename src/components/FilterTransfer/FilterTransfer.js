/* eslint-disable indent */
import React from 'react'

import withFilterTransfer from '../HOC/withFilterTransfer'
import classes from '../styles/FilterTransfer.module.scss'

const FilterTransfer = (props) => {
  const { checkedAll, checkedNot, checkedOne, checkedTwo, checkedThree, changeCheckBox } = props
  return React.createElement(
    'section',
    { className: classes.filters__transfer },
    React.createElement(
      'h1',
      { className: classes['filters__transfer-title'] },
      '\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043F\u0435\u0440\u0435\u0441\u0430\u0434\u043E\u043A'
    ),
    React.createElement(
      'div',
      { className: classes.filters__list },
      React.createElement(
        'label',
        { className: classes.custom__checkbox, htmlFor: 'all' },
        React.createElement('input', {
          type: 'checkbox',
          id: 'all',
          className: classes.filter__transfer,
          checked: checkedAll,
          onChange: (event) => changeCheckBox(event.target.id),
        }),
        React.createElement('span', { className: classes.box }),
        React.createElement('span', null, '\u0412\u0441\u0435')
      ),
      React.createElement(
        'label',
        { className: classes.custom__checkbox, htmlFor: 'without' },
        React.createElement('input', {
          type: 'checkbox',
          id: 'without',
          className: classes.filter__transfer,
          checked: checkedNot,
          onChange: (event) => changeCheckBox(event.target.id),
        }),
        React.createElement('span', { className: classes.box }),
        React.createElement('span', null, '\u0411\u0435\u0437 \u043F\u0435\u0440\u0435\u0441\u0430\u0434\u043E\u043A')
      ),
      React.createElement(
        'label',
        { className: classes.custom__checkbox, htmlFor: 'one' },
        React.createElement('input', {
          type: 'checkbox',
          id: 'one',
          className: classes.filter__transfer,
          checked: checkedOne,
          onChange: (event) => changeCheckBox(event.target.id),
        }),
        React.createElement('span', { className: classes.box }),
        React.createElement('span', null, '1 \u043F\u0435\u0440\u0435\u0441\u0430\u0434\u043A\u0430')
      ),
      React.createElement(
        'label',
        { className: classes.custom__checkbox, htmlFor: 'two' },
        React.createElement('input', {
          type: 'checkbox',
          id: 'two',
          className: classes.filter__transfer,
          checked: checkedTwo,
          onChange: (event) => changeCheckBox(event.target.id),
        }),
        React.createElement('span', { className: classes.box }),
        React.createElement('span', null, '2 \u043F\u0435\u0440\u0435\u0441\u0430\u0434\u043A\u0438')
      ),
      React.createElement(
        'label',
        { className: classes.custom__checkbox, htmlFor: 'three' },
        React.createElement('input', {
          type: 'checkbox',
          id: 'three',
          className: classes.filter__transfer,
          checked: checkedThree,
          onChange: (event) => changeCheckBox(event.target.id),
        }),
        React.createElement('span', { className: classes.box }),
        React.createElement('span', null, '3 \u043F\u0435\u0440\u0435\u0441\u0430\u0434\u043A\u0438')
      )
    )
  )
}
export default withFilterTransfer(FilterTransfer)
