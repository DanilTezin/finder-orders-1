import React, { FC } from 'react'
import CardOrder, { CardOrderI } from '../CardOrder/CardOrder'
import styles from './ListCardOrders.module.css'

interface ListCardOrdersI{
    orders: Array<CardOrderI>
}

const ListCardOrders:FC<ListCardOrdersI> = ({orders}) => {
  return (
    <div className={styles.container}>
        {orders.map((order: CardOrderI) =>{
            return <CardOrder
                    text={order.text}
                    views={order.views}
                    from_id={order.from_id}
                    />
        })}
    </div>
  )
}

export default ListCardOrders