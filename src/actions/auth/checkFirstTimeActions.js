import AsyncStorage from '@react-native-async-storage/async-storage';

import {IS_FIRST_TIME,FIRST_OPEN,FIRST_TIME_OPEN_VALUE} from '../../types/AuthTypes'

//Create dataStorage
const saveDataToStorage = (name, data) => {
  console.log("Da chay vao save data to storage");
  AsyncStorage.setItem(
    name,
    JSON.stringify({
      data,
    })
  );
};

//Check first Open
export const firstOpen = () => {
  saveDataToStorage(IS_FIRST_TIME, FIRST_TIME_OPEN_VALUE);
  return {
    type: FIRST_OPEN
  };
};
