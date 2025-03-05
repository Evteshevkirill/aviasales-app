/* eslint-disable func-names */
/* eslint-disable indent */
import React, { JSX } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

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

interface FilterTransferProps {
  checkedAll: boolean
  checkedNot: boolean
  checkedOne: boolean
  checkedTwo: boolean
  checkedThree: boolean
  changeCheckBox: (id: string) => void
}

const withFilterTransfer = <T extends {}>(
  Component: React.ComponentType<FilterTransferProps>
): ((props: T) => JSX.Element) => {
  return function (props) {
    const dispatch = useDispatch()

    const { checkedAll, checkedNot, checkedOne, checkedTwo, checkedThree } = useSelector(transferFilter)

    useEffect(() => {
      if (checkedNot && checkedOne && checkedTwo && checkedThree && !checkedAll) dispatch(checkAllAuto())
      if (checkedAll && (!checkedNot || !checkedOne || !checkedTwo || !checkedThree)) dispatch(unCheckAll())
    }, [checkedNot, checkedOne, checkedTwo, checkedThree, checkedAll, dispatch])

    const changeCheckBox = (id: string) => {
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
    return (
      <Component
        {...props}
        changeCheckBox={changeCheckBox}
        checkedAll={checkedAll}
        checkedNot={checkedNot}
        checkedOne={checkedOne}
        checkedTwo={checkedTwo}
        checkedThree={checkedThree}
      />
    )
  }
}

export default withFilterTransfer
