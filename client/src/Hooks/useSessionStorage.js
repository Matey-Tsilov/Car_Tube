import { useState } from 'react';
import { getUserData, setUserData } from '../api/util';

export const useSessionStorage = (defaultValue) => {
    const [curUser, setCurUser] = useState(() => {
         return defaultValue || getUserData();
    })

    const setSessionStorage = (value) => {
      setUserData(value)
      setCurUser(value)
    }

    return [curUser, setSessionStorage]
}