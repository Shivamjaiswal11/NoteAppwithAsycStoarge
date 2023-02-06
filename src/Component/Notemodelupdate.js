import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import React from 'react';
import {vh, vw} from './Dimension';
import { useIsFocused } from '@react-navigation/native';

const Notemodelupdate = ({isvisible, onclose, onsubmit, data1, isEdit}) => {
    console.log("ram=========>",data1?.title)
    const focus= useIsFocused();
  const [title, settitle] = React.useState("");
  const [desc, setdesc] = React.useState('');
  React.useEffect(() => {
    getdata();
  }, []);
  const getdata = async () =>{

    let data= await data1
    settitle(data?.title)
      // settitle(data1?.title);
      // setdesc(data1?.desc);
    

  }
  return (
    <Modal
      visible={isvisible}
      onRequestClose={e => onclose()}
      animationType="slide"
      transparent>
      <TouchableOpacity
        style={styles.container}
        onPress={e => onclose()}
        activeOpacity={0.9}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Hello World!</Text>
          <TextInput
            placeholder="enter title"
            value={title }
            style={styles.inputtext}
            onChangeText={text => settitle(text)}
          />
          <TextInput
            placeholder="enter Desc"
            value={desc}
            style={styles.inputtext}
            onChangeText={text => setdesc(text)}
          />
          <TouchableOpacity
            style={styles.buttonstyle}
            onPress={() => onsubmit()}>
            <Text>add note</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default Notemodelupdate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF34',
    alignItems: 'center',
    justifyContent: 'center',
  },

  modalView: {
    width: '90%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  inputtext: {
    borderWidth: 2,
    marginVertical: 10,
    marginHorizontal: 10,
    width: vw(320),
  },
  buttonstyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff2',
    width: vw(320),
    height: vh(45),
    alignSelf: 'center',
  },
});
