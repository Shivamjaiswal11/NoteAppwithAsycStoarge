import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {normalize, vh, vw} from '../Component/Dimension';
import {SafeAreaView} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = (props) => {
    const [inputs, setInputs] = React.useState({
        email: '',
        fullname: '',
        phone: '',
        password: '',
      });

      const handleOnchange = (text, input) => {
        setInputs(prevState => ({...prevState, [input]: text}));
      };
//   const [email, setEmail] = useState('');
//   const [pass, setpass] = useState('');
//   const [storedata,setStroedata]=useState([])

// console.log(storedata.email);
  const storeData = async () => {
    try {
      await AsyncStorage.setItem('itemlist', JSON.stringify(inputs));
      props.navigation.navigate('Home')
      alert('data add');
      // await getData();
    } catch (e) {
      // saving error
      alert(e);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text>Login</Text>
      <TextInput
        placeholder="enter Email"
        // value={email}
        style={styles.inputtext}
        onChangeText={text => handleOnchange(text, 'email')}
      />
      <TextInput
        placeholder="enter Pass"
        // value={pass}
        style={styles.inputtext}
        onChangeText={text => handleOnchange(text, 'password')}
      />
      <TouchableOpacity style={styles.buttonstyle} onPress={()=>storeData()}>
        <Text>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
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
    width: vw(390),
    height: vh(78),
    alignSelf: 'center',
  },
});
