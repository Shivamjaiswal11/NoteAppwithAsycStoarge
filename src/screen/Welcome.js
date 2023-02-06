import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {vh, vw, normalize} from '../Component/Dimension';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation,useIsFocused} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Welcome = () => {
  const navigation = useNavigation();
  const focus = useIsFocused();
  // // const [data,setstoredata]=React.useState('')
  // console.log("hii",data.email);
  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  }, [focus]);
  // const getData = async () => {
  //   try {
  //   let value = await AsyncStorage.getItem('itemlist')
  //   const output = JSON.parse(value)
  //   console.log("hii===============>", output.email);
  //     // setstoredata(output);
  //     if (output.email == null) {
  //       navigation.navigate('Login');
  //     } else {
  //       navigation.navigate('Home');
  //     }
  //   } catch (e) {
  //       console.log(e);
  //   }
  // };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Welcome</Text>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: normalize(20),
  },
});
