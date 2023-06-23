import { useState } from 'react';
import { clearUserData, getUserData, setUserData } from '../api/util';

export const useSessionStorage = (defaultValue) => {
    const [curUser, setCurUser] = useState(() => {
         return getUserData() || defaultValue;
    })

    const setSessionStorage = (value) => {
      if (value == {}) {
        //otherwise when doing a get request right after for catalog page =>
        //getUserData() would return {}, which it will automaticly parse => 
        //JSON.error
        clearUserData()
      }else {
        setUserData(value)
      }
      setCurUser(value)
    }

    return [curUser, setSessionStorage]
}