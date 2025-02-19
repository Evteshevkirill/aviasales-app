/* eslint-disable func-names */
/* eslint-disable react/jsx-props-no-spreading */
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchSearchId, fetchTickets } from '../redux/fetchTicketsSlice'

export default function withApp(Component) {
  return function (props) {
    const dispatch = useDispatch()

    const { loading, error, searchId } = useSelector((state) => state.fetchTickets)

    useEffect(() => {
      dispatch(fetchSearchId())
    }, [dispatch])

    useEffect(() => {
      if (searchId) dispatch(fetchTickets(searchId))
    }, [searchId, dispatch])
    return <Component {...props} loading={loading} error={error} />
  }
}
