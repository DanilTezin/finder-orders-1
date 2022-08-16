import { formatISO9075 } from 'date-fns'
import React from 'react'
import styles from './CardOrder.module.css'

interface AttachmentsOrder{
  photo:{
    sizes: {
      url:string
    }[]
  },
  type: string,
  length: number
}

export interface CardOrderI{
  text:string,
  attachments: AttachmentsOrder[],
  from_id?: number,
  owner_id?:number,
  views: {
    count:number
  },
  date: number
}

const CardOrder = (order:CardOrderI ) => {
  return (
    <div className={styles.container}>

      <div className={styles.title}>

        {order?.text.split(' ').splice(0,5).join(' ')}... <br />


      </div>
      <div className={styles.text}>
        {order?.text}
      </div>
      <div className={styles.views}>
          Просмотры :  {order?.views?.count}
      </div>

        {Math.sign(order?.from_id || 0) !== -1 &&  
          <div className={styles.owner}>Заказчик - 
            <a href={'https://vk.com/id' + order?.from_id}>{'https://vk.com/id' + order?.from_id}</a>
          </div>
        } 
      
      <div className={styles.date}>
        Дата - {formatISO9075(new Date(order.date * 1000), { representation: 'date' })}
      </div>

      <div className={styles.photo}>
        
        {order?.attachments[0].type === 'photo'  && <img alt='img' src={order?.attachments[0]?.photo?.sizes[1].url}></img>} 
      </div>
    </div>
  )
}

export default CardOrder