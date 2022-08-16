import React, { useState } from 'react'
import { vkSearch } from '../../api/vk.search'
import Button from '../../components/UI/Button/Button'
import { CardOrderI } from '../../components/UI/CardOrder/CardOrder'
import InputWithButton from '../../components/UI/InputWithButton/InputWithButton'
import ListCardOrders from '../../components/UI/ListCardsOrder/ListCardOrders'
import styles from './AdminPanel.module.css'

const AdminPanel = () => {

    const [keywords, setKeywords] = useState<Array<string>>([])
    const [groups, setGroups] = useState<Array<string>>([])
    const [orders, setOrders] = useState<Array<CardOrderI>>([])
    const [isLoading, setIsLoading] = useState<Boolean>(true)
    const [statusLoading, setStatusLoading] = useState<Boolean>(false)
    
    const removeKeyword = (item :number, setter:any) =>{
        setter((oldKeywords: Array<string>) => oldKeywords.filter((e, index)  => index !== item))
    }
    const getModifyKeyword = (value:string) =>{
        if(value.length > 10){
            return value.split('').splice(0, 10).join('') + '...'
        }
        return value
    }
        
    return (
        <div className={styles.wrap}> 
            <div className={styles.container}>
                    
                <div className={styles.params}>
                    <div className={styles.param}>
                        <InputWithButton 
                                buttonName='Добавить'
                                placeholder='Ключевое слово'
                                action={(value:string) => setKeywords(old => [...old, value])}
                        />

                        <div className={styles.addKeyword}>
                            Ключевые слова
                        </div>

                        <div className={styles.keywords}>
                            {keywords.map((keyword, index) =>{
                                return <span onClick={() => removeKeyword(index, setKeywords)} key={index}>{getModifyKeyword(keyword)}</span>
                            })}
                        </div>
                    </div>
                            
                    <div className={styles.param}>
                        <InputWithButton 
                                buttonName='Добавить'
                                placeholder='Группа'
                                action={(value:string) => setGroups(old => [...old, value])}
                        />
                        <div className={styles.addKeyword}>
                            Группы
                        </div>
                        <div className={styles.keywords}>
                            {groups.map((keyword, index) =>{
                                return <span onClick={() => removeKeyword(index, setGroups)} key={index}>{getModifyKeyword(keyword)}</span>
                            })}
                        </div>
                        <Button onClick={() => {
                            setIsLoading(false)
                            vkSearch(keywords, groups).then(data =>{
                                setOrders(data.data.data)
                                data.data.data.length > 0 ? setStatusLoading(true) : setStatusLoading(false)
                                setIsLoading(true)
                            })
                        }}>
                        START
                    </Button>   
                    </div>
                    
                </div>

            </div>
            {isLoading && statusLoading  ? <ListCardOrders orders={orders}/> 
            :!statusLoading 
                ? <div className={styles.statusOfLoading}>Записи не найдена</div>
                : null
            } 
            {!isLoading ? <div className={styles.statusOfLoading}>Загрузка...</div>: null}
        </div>
       
  )
}

export default AdminPanel