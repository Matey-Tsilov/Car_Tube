import { useState } from 'react';
import { getUserData, setUserData } from '../api/util';

export const useSessionStorage = (defaultValue) => {
    const [curUser, setCurUser] = useState(() => {
         return getUserData() || defaultValue;
    })

    const setSessionStorage = (value) => {
      setUserData(value)
      setCurUser(value)
    }

    return [curUser, setSessionStorage]
}