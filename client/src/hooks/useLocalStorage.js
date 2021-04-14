import {useEffect, useState} from 'react'

const PREFIX = 'whats-app-clone-'

export default function useLocalStorage(key, initialValue) {

    
    const prefixedKey = PREFIX + key
    //localStorage.removeItem(PREFIX+'contacts')
    const [value, setValue] = useState(()=> {
        
        const jsonValue = localStorage.getItem(prefixedKey)

        //if local storage already contains that value then return the 
        //existing value
        if(jsonValue != null) return JSON.parse(jsonValue)

        //why tf are we checking if the value is a function
        //I think is the value does not exist just return the initial value given
        if(typeof initialValue === 'function') 
            return initialValue()
        else 
            return initialValue
    })

    //everytime the value changes, make sure that it is stored
    //in local storage
    useEffect(() => {
        localStorage.setItem(prefixedKey, JSON.stringify(value))
    }, [prefixedKey,value])

    return [value,setValue]
}
