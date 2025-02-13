import { CHECKED_ALL, CHECKED_NOT, CHECKED_ONE, CHECKED_TWO, CHECKED_THREE } from '../types'

const initial = {
  checkedAll: false,
  checkedNot: false,
  checkedOne: false,
  checkedTwo: false,
  checkedThree: false,
}

export default function transferCheckReducer(state, action) {
  console.log(state)

  switch (action.type) {
    case CHECKED_ALL:
      return {
        ...state,
        checkedAll: !state.checkedAll,
      }
    case CHECKED_NOT:
      return {
        ...state,
        checkedNot: !state.checkedNot,
      }
    case CHECKED_ONE:
      return {
        ...state,
        checkedOne: !state.checkedOne,
      }
    case CHECKED_TWO:
      return {
        ...state,
        checkedTwo: !state.checkedTwo,
      }
    case CHECKED_THREE:
      return {
        ...state,
        checkedThree: !state.checkedThree,
      }

    default:
      return state
  }
}
