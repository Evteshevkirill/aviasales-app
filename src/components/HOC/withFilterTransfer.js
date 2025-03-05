/* eslint-disable func-names */
/* eslint-disable indent */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  checkAll,
  checkNot,
  checkOne,
  checkTwo,
  checkThree,
  checkAllAuto,
  unCheckAll,
  clearCheck,
} from '../redux/transferFilterSlice'
import { transferFilter } from '../redux/selectors'

const withFilterTransfer = (Component) => {
  return function (props) {
    const dispatch = useDispatch()
    const { checkedAll, checkedNot, checkedOne, checkedTwo, checkedThree } = useSelector(transferFilter)
    useEffect(() => {
      if (checkedNot && checkedOne && checkedTwo && checkedThree && !checkedAll) dispatch(checkAllAuto())
      if (checkedAll && (!checkedNot || !checkedOne || !checkedTwo || !checkedThree)) dispatch(unCheckAll())
    }, [checkedNot, checkedOne, checkedTwo, checkedThree, checkedAll, dispatch])
    const changeCheckBox = (id) => {
      switch (id) {
        case 'all':
          return checkedAll ? dispatch(clearCheck()) : dispatch(checkAll())
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
    return React.createElement(Component, {
      ...props,
      changeCheckBox,
      checkedAll,
      checkedNot,
      checkedOne,
      checkedTwo,
      checkedThree,
    })
  }
}
export default withFilterTransfer
