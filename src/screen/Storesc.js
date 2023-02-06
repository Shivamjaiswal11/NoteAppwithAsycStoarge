// import {
//     StyleSheet,
//     Text,
//     TextInput,
//     TouchableOpacity,
//     View,
//   } from 'react-native';
//   import React, {useState} from 'react';
//   import AsyncStorage from '@react-native-async-storage/async-storage';
  
//   const Storesc = () => {
//     const [data, setdata] = useState('');
//     const [storedata, setstoredata] = useState([]);
  
//     React.useEffect(()=>{
//       updatedata();
//     },[data])
  
//     const updatedata = async  ()=>{
//       await getData();
//     }
  
//     const storeData = async () => {
//       try {
//         storedata.push(data);
//         const output = JSON.stringify(storedata);
//         // console.log(output);
//         await AsyncStorage.setItem('itemlist', output);
//         setdata('');
  
//         alert('data add');
//         // await getData();
//       } catch (e) {
//         // saving error
//         alert(e);
//       }
//     };
//     console.log(storedata);
//     const getData = async () => {
//       try {
//         const value = await AsyncStorage.getItem('itemlist')
//         const output = JSON.parse(value)
//           setstoredata(output);
//           // value previously stored
  
//       } catch(e) {
//         // error reading value
//       }
//     }
//     return (
//       <View>
//         <TextInput
//           placeholder="enter text"
//           value={data}
//           style={{borderWidth: 2, marginVertical: 10, marginHorizontal: 10}}
//           onChangeText={text => setdata(text)}
//         />
//         <TouchableOpacity
//           onPress={() => storeData()}
//           style={{
//             justifyContent: 'center',
//             alignItems: 'center',
//             backgroundColor: '#ff2',
//             width: '90%',
//             height: 45,
//             alignSelf: 'center',
//           }}>
//           <Text>Add Data</Text>
//         </TouchableOpacity>
//         {storedata && storedata.map((item,i)=><Text key={i}>{item}</Text>)} 
//         {/* <Text>{storedata}</Text> */}
//       </View>
//     );
//   };
  
//   export default Storesc;
  
//   const styles = StyleSheet.create({});
//   import {
//     StyleSheet,
//     Text,
//     View,
//     TextInput,
//     TouchableOpacity,
//     FlatList,
//     Button,
//     Keyboard,
//   } from 'react-native';
//   import React, {useState} from 'react';
//   import {SafeAreaView} from 'react-native-safe-area-context';
//   import {normalize, vw, vh} from '../Component/Dimension';
//   import {useIsFocused, useNavigation} from '@react-navigation/native';
//   import AsyncStorage from '@react-native-async-storage/async-storage';
  
//   const getdata = async () => {
//     const data = await AsyncStorage.getItem('note');
//     if (data) {
//       return JSON.parse(data);
//     } else {
//       return [];
//     }
//   };
//   const Home = () => {
//     const navigation = useNavigation();
//     const focus = useIsFocused();
//     const [notes, setnote] = React.useState(getdata());
//     const [title, settitle] = React.useState('');
//     const [desc, setdesc] = React.useState('');
//     console.log(JSON.stringify(notes));
  
//     React.useEffect(() => {
//       updatedata();
//       return () => {};
//     }, [notes]);
  
//     const updatedata = async () => {
//       await AsyncStorage.setItem('note', JSON.stringify(notes));
//     };
//     const addnote = () => {
//       let note = {
//         title,
//         desc,
//         id: Math.floor(Math.random() * 100 + 1),
//       };
//       console.log(note);
//       const  updatedata = [...notes,note]
//       setnote(updatedata);
//       setdesc('');
//       settitle('');
//     };
  
//     const deleteitem = id => {
//       let array = notes;
//       const Sortarray = array.filter((item, i) => {
//         return item.id != id;
//       });
//       setnote(Sortarray);
//     };
//     return (
//       <SafeAreaView style={styles.container}>
//         <Text>Home</Text>
//         <TextInput
//           placeholder="enter title"
//           value={title}
//           style={styles.inputtext}
//           onChangeText={text => settitle(text)}
//         />
//         <TextInput
//           placeholder="enter Desc"
//           value={desc}
//           style={styles.inputtext}
//           onChangeText={text => setdesc(text)}
//         />
//         <TouchableOpacity style={styles.buttonstyle} onPress={() => addnote()}>
//           <Text>add note</Text>
//         </TouchableOpacity>
//         <Text
//           onPress={() => {
//             setnote([]);
//             AsyncStorage.clear();
//           }}>
//           Clear all
//         </Text>
//         {/* {desplaydata} */}
//         <View style={{alignItems: 'center'}}>
//           {notes && (
//             <FlatList
//               data={notes}
//               keyExtractor={item => item.id}
//               renderItem={({item, i}) => (
//                 <View
//                   style={{
//                     width: vw(380),
//                     height: vh(100),
//                     borderWidth: 1,
//                     justifyContent: 'space-around',
//                     alignItems: 'center',
//                     flexDirection: 'row',
//                   }}
//                   key={i}>
//                   <Text>{item.id}</Text>
//                   <Text>{item.Title}</Text>
//                   <Button
//                     title="delete"
//                     onPress={e => deleteitem(item.id)}></Button>
//                 </View>
//               )}
//             />
//           )}
//         </View>
//         {/* {desplaydata.map((item, i) => (
//           <Text>{item.id}</Text>
//         ))} */}
//       </SafeAreaView>
//     );
//   };
  
//   export default Home;
  
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       // ,justifyContent:'center',
//       // alignItems:'center'
//     },
//     text: {
//       fontWeight: 'bold',
//       fontSize: normalize(20),
//     },
//     inputtext: {
//       borderWidth: 2,
//       marginVertical: 10,
//       marginHorizontal: 10,
//     },
//     buttonstyle: {
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: '#ff2',
//       width: vw(320),
//       height: vh(45),
//       alignSelf: 'center',
//     },
//   });
  