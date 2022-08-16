import React from 'react'
import styles from './CardOrder.module.css'

interface AttachmentsOrder{
  link?:string,
  type: string
}

export interface CardOrderI{
  text:string,
  attachments?: AttachmentsOrder[],
  from_id?: number,
  owner_id?:number,
  views: {
    count:number
  }
}

const CardOrder = (order:CardOrderI | null) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        {order?.text} |  {order?.views?.count} <br />
        Заказчик - <a href={'https://vk.com/id' + order?.from_id}>{'https://vk.com/id' + order?.from_id}</a>
      </div>
    </div>
  )
}

export default CardOrder