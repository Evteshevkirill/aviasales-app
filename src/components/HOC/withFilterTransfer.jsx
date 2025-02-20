/* eslint-disable func-names */
/* eslint-disable indent */
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

export default function withFilterTransfer(Component) {
  return function () {
    const dispatch = useDispatch()

    const { checkedAll, checkedNot, checkedOne, checkedTwo, checkedThree } = useSelector(
      (state) => state.transferFilter
    )

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
    return (
      <Component
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
