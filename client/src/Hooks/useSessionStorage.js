import { useState } from 'react';
import { clearUserData, getUserData, setUserData } from '../api/util';

//"refreshproof" useState for the currently logged in user!
export const useSessionStorage = (defaultUser) => {
  //Towa se izpylnqwa edinstweno i samo pyrwiq pyt pri zarejdane!
    const [curUser, setCurUser] = useState(() => {
         const storedUser = getUserData()

         return storedUser || defaultUser;
    })

    const setSessionStorage = (value) => {
      if (JSON.stringify(value) == "{}") {
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