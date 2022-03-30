import React, {useState} from 'react'

const useLocalStorage = (name, initialValue) => {

    const [key, setValue] =useState(()=>{

        if(typeof window === undefined){
            return initialValue;
        }
    
        try {
            const data = window.localStorage.getItem(key);
            return data ? JSON.parse(data) : initialValue;
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    });

    const setLocalStorage = (value) => {
        try {
            setValue(value);
            if (typeof window !== undefined){
                window.localStorage.setItem(key, JSON.stringify(value));
            }
        } catch (error) {
           console.log(error); 
        }
    }


    return [key, setValue];
}

export default useLocalStorage