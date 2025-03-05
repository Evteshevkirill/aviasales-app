/* eslint-disable func-names */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchSearchId, fetchTickets } from '../Api/fetchTickets'
import { RootState, AppDispatch } from '../redux/store'
interface IAppProps {
  error: string | null
  loading: boolean
}

const withApp = <T extends {}>(Component: React.ComponentType<IAppProps>): React.ComponentType<T> => {
  return function (props: T) {
    const dispatch = useDispatch<AppDispatch>()
    const { loading, error, searchId } = useSelector((state: RootState) => state.fetchTickets)

    useEffect(() => {
      dispatch(fetchSearchId())
    }, [])

    useEffect(() => {
      if (searchId) dispatch(fetchTickets(searchId))
    }, [searchId])
    return <Component {...props} loading={loading} error={error} />
  }
}

export default withApp
