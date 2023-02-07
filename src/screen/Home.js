import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Button,
  Keyboard,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {normalize, vw, vh} from '../Component/Dimension';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {deletedilog} from '../Component/Corecompnent';
import {useNotes} from '../context/NoteProvider';
import Notemodelupdate from '../Component/Notemodelupdate';
import LanguageChangeModel from '../Component/LanguageChangeModel.';
import { translation } from '../utiles/Translate';

// const getdata = async () => {
//   const data = await AsyncStorage.getItem('note');
//   if (data !== null) {
//     console.log("ram===========>",data)
//     return JSON.parse(data);
//   } else {
//     return [];
//   }
// };
const Home = () => {
  const navigation = useNavigation();
  const focus = useIsFocused();
  const [onselectlang, setonselectlang] = useState(0);
  const {notes, setnote} = useNotes();
  // const [notes, setnote] = React.useState([]);
  const [title, settitle] = React.useState('');
  const [desc, setdesc] = React.useState('');
  const [showmodel, setModel] = React.useState(false);
  const [showLangmodel, setLangModel] = React.useState(false);
  const [data, setdata] = React.useState([]);
  const [isEdit, setisEdit] = React.useState(false);
  console.log('hiii=========>', notes);
  const saveselectlanguage = async (index)=>{

    await AsyncStorage.setItem('LANG', JSON.stringify(onselectlang));

  }
  // React.useEffect(() => {
  //   updatedata();
  // }, [focus]);
  // const updatedata = async () => {
  //   const result = await AsyncStorage.getItem('note');
  //   if (result !== null) {
  //     // console.log('guuuuu=========>',JSON.parse(notes));
  //     setnote(JSON.parse(result));
  //   }
  // };
  const addnote = async (title, desc) => {
    let note = {
      title,
      desc,
      id: Date.now(),
    };
    const x = [...notes, note];
    setnote(x);
    await AsyncStorage.setItem('note', JSON.stringify(x));
    setdesc('');
    settitle('');
  };

  const deleteitem = id => {
    Alert.alert(
      'Are you Sure ',
      'deletenote',
      [
        {
          text: 'delete',
          onPress: () => {
            deletedata(id);
          },
        },
        {text: 'No Thanks', onPress: () => {}},
      ],
      {cancelable: true},
    );
  };
  const deletedata = async id => {
    const Sortarray = notes.filter((item, i) => {
      return item.id != id;
    });
    await AsyncStorage.setItem('note', JSON.stringify(Sortarray));
    setnote(Sortarray);
  };
  const handelupdate = () => {};
  console.log('data=====>', data);
  const handelopenmodel = () => {
    setisEdit(true);
    setModel(true);

    // alert(item.id);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>{onselectlang ==0?translation[0].English:onselectlang ==1?translation[0].Hindi:onselectlang ==2?translation[0].Punjabi:null}</Text>
      <TextInput
        placeholder="enter title"
        value={title}
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
        onPress={() => addnote(title, desc)}>
        <Text>add note</Text>
      </TouchableOpacity>
      <View style={styles.buttoncontianer}>
        
        <Text
          onPress={e => {
            setnote([]);
            AsyncStorage.clear();
          }}>
          Clear all
        </Text>
        <Text
          onPress={e => {
            setLangModel(true);
          }}>
          Change Language
        </Text>
      </View>

      <View style={{alignItems: 'center'}}>
        {/* {notes > 0 && notes.map((item, i) => ( <Text key={i}>{item.title}</Text>))} */}
        {notes.length !== 0 ? (
          <FlatList
            data={notes}
            keyExtractor={item => item.id}
            renderItem={({item, i}) => (
              <View
                style={{
                  width: vw(380),
                  height: vh(100),
                  borderWidth: 1,
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}
                key={i}>
                {/* <Text>{item.id}</Text> */}
                <Text>{item.title}</Text>
                <Button
                  title="delete"
                  onPress={e => deleteitem(item.id)}></Button>
                <Button
                  title="update"
                  onPress={e => {
                    handelopenmodel(), setdata(item);
                  }}></Button>
              </View>
            )}
          />
        ) : (
          <Text>No Data</Text>
        )}
      </View>
      <Notemodelupdate
        isvisible={showmodel}
        // onsubmit={addnote}
        onclose={e => setModel(false)}
        isEdit={true}
        // data1={data}
        data1={data}
      />
      <LanguageChangeModel
        isvisible={showLangmodel}
        onselectlang={(ind)=> {setonselectlang(ind);saveselectlanguage(ind)}}
        onclose={e => setLangModel(false)}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // ,justifyContent:'center',
    // alignItems:'center'
  },
  text: {
    fontWeight: 'bold',
    fontSize: normalize(20),
  },
  inputtext: {
    borderWidth: 2,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  buttonstyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff2',
    width: vw(320),
    height: vh(45),
    alignSelf: 'center',
  },
  buttoncontianer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical:10
  },
});
