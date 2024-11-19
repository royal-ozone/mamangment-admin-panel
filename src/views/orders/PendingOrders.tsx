import React, { useEffect } from 'react'
import { getPendingOrdersHandler, setPendingParams } from 'src/store/orders'
import { useDispatch, useSelector } from 'react-redux'
import OrdersModel from './OrdersModel'
import { CSpinner } from '@coreui/react'
import Paginator from '../../components/Paginator'
import { RootState } from 'src/store'

const PendingOrders = () => {
  const {
    pendingParams,
    pendingOrders: { data: orders, count },
    isLoading,
  } = useSelector((state: RootState) => state.orders)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPendingOrdersHandler())
  }, [])
  return (
    <>
      <h2>pending orders</h2>
      {isLoading ? <CSpinner /> : <OrdersModel data={orders} type="pending" />}
      <Paginator
        params={pendingParams}
        count={+count}
        cookieName="pendingOrder"
        onPageChange={(page) =>
          dispatch(setPendingParams({ offset: (page - 1) * pendingParams.limit! }))
        }
      />
    </>
  )
}

export default PendingOrders
