import { CHECKED_ALL, CHECKED_NOT, CHECKED_ONE, CHECKED_TWO, CHECKED_THREE } from './types'

export const checkedAll = () => {
  return {
    type: CHECKED_ALL,
  }
}

export const checkedNot = () => {
  return {
    type: CHECKED_NOT,
  }
}

export const checkedOne = () => {
  return {
    type: CHECKED_ONE,
  }
}

export const checkedTwo = () => {
  return {
    type: CHECKED_TWO,
  }
}

export const checkedThree = () => {
  return {
    type: CHECKED_THREE,
  }
}
