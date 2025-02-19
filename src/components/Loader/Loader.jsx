import { useSelector } from 'react-redux'
import { Alert, Flex, Spin } from 'antd'

export default function Loader() {
  const { loading } = useSelector((state) => state.fetchTickets)

  const { checkedNot, checkedOne, checkedTwo, checkedThree } = useSelector((state) => state.transferFilter)

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
