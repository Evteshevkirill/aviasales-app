/* eslint-disable func-names */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchSearchId, fetchTickets } from '../Api/fetchTickets'

const withApp = (Component) => {
  return function (props) {
    const dispatch = useDispatch()
    const { loading, error, searchId } = useSelector((state) => state.fetchTickets)
    useEffect(() => {
      dispatch(fetchSearchId())
    }, [dispatch])
    useEffect(() => {
      if (searchId) dispatch(fetchTickets(searchId))
    }, [searchId, dispatch])
    return React.createElement(Component, { ...props, loading, error })
  }
}
export default withApp
