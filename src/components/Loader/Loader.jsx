import { useSelector } from 'react-redux'
import { Alert, Flex, Spin } from 'antd'

import { fetchTickets, transferFilter } from '../redux/selectors'

export default function Loader() {
  const { loading } = useSelector(fetchTickets)

  const { checkedNot, checkedOne, checkedTwo, checkedThree } = useSelector(transferFilter)

  const unChecked = !checkedNot && !checkedOne && !checkedTwo && !checkedThree ? true : null

  return (
    <Flex vertical style={{ marginTop: 20, textTransform: 'none' }}>
      <Spin spinning={(loading, !unChecked)}>
        {!unChecked ? (
          <Alert type="info" message="Загружаем билеты" description="Ищем самые лучшие варианты..." />
        ) : null}
      </Spin>
    </Flex>
  )
}
