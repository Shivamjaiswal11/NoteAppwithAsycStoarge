import {View, Text} from 'react-native';
import React, {createContext, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const NoteContext = createContext();
const NoteProvider = ({children}) => {
  const [notes, setnote] = React.useState([]);
  const updatedata = async () => {
    const result = await AsyncStorage.getItem('note');
    if (result !== null) {
      // console.log('guuuuu=========>',JSON.parse(notes));
      setnote(JSON.parse(result));
    }
  };
  React.useEffect(() => {
    updatedata();
  }, []);

  return (
    <NoteContext.Provider value={{notes, setnote, updatedata}}>
      {children}
    </NoteContext.Provider>
  );
};
export const useNotes = ()=> useContext(NoteContext);
export default NoteProvider;
