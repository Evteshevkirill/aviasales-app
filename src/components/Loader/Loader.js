/* eslint-disable indent */
import React from 'react'
import { useSelector } from 'react-redux'
import { Alert, Flex, Spin } from 'antd'

import { fetchTickets, transferFilter } from '../redux/selectors'

const Loader = () => {
  const { loading } = useSelector(fetchTickets)
  const { checkedNot, checkedOne, checkedTwo, checkedThree } = useSelector(transferFilter)
  const unChecked = !checkedNot && !checkedOne && !checkedTwo && !checkedThree ? true : null
  return React.createElement(
    Flex,
    { vertical: true, style: { marginTop: 20, textTransform: 'none' } },
    React.createElement(
      Spin,
      { spinning: loading && !unChecked },
      !unChecked
        ? React.createElement(Alert, {
            type: 'info',
            message: '\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043C \u0431\u0438\u043B\u0435\u0442\u044B',
            description:
              '\u0418\u0449\u0435\u043C \u0441\u0430\u043C\u044B\u0435 \u043B\u0443\u0447\u0448\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B...',
          })
        : null
    )
  )
}
export default Loader
