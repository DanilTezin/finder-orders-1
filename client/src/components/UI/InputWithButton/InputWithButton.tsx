
import React, { FC, useCallback, useEffect, useRef, useState } from 'react'
import styles from './InputWithButton.module.css'

interface InputWithButtonProps{
    action: Function,
    buttonName?: string,
    placeholder?: string
}

const InputWithButton:FC<InputWithButtonProps> = ({action, buttonName = 'Add', placeholder = ''}) => {

    const [keyword, setKeyword] = useState<string>('')

    const addKeyWord = useCallback(() => {
        action(keyword)
        setKeyword('')
    }, [action, keyword])

    const inputRef = useRef<HTMLInputElement | null>(null)

    useEffect(() =>{
        const onEnterDown = (e: KeyboardEvent) =>{
            if(e.key === 'Enter'){
                addKeyWord()
            }
        }

        inputRef.current?.addEventListener('keydown', onEnterDown)

        return () =>{
            // eslint-disable-next-line react-hooks/exhaustive-deps
            inputRef.current?.removeEventListener('keydown', onEnterDown)
        }
    }, [addKeyWord, keyword])

    return (
        <div className={styles.container}>
            <input  
                placeholder={placeholder}
                value={keyword}
                onChange={(e:any) => setKeyword(e.target.value)}
                type="text" 
                ref={inputRef}
            />   
            <button
                onClick={addKeyWord}>{buttonName}</button>
        </div>
    )
}

export default InputWithButton