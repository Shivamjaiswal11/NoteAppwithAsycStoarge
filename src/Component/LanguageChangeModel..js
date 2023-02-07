import {
    Modal,
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TextInput,
    FlatList,
    useWindowDimensions,
    Dimensions,
  } from 'react-native';
  import React, { useState } from 'react';
  import {vh, vw} from './Dimension';
  import { useIsFocused } from '@react-navigation/native';
  const {height,width}= Dimensions.get("window");
  const LanguageChangeModel = ({isvisible, onclose, onselectlang}) => {
    const [selectlang,setselectlang]=useState(0);
    const[hide,sethide]=useState(false);
    const [language,setlanguage]=useState([
        {name:'English',selected:true},
        {name:'Hindi',selected:false},
        {name:'punjabi',selected:false}
        // {name:'',selected:true
    ])
    const selectlanindex =(index)=>{
        // alert(index);
        const temp = language;
        temp.map((item,ind)=>{
            if(index==ind){
                if(item.selected == true){
                    item.selected=false;
                }
                else{
                    item.selected=true;
                    setselectlang(index);
                    sethide(!hide)
                }
            }
            else{
                item.selected=false;
            }
        });
        let temp2=[]
        temp.map(item=>{
            temp2.push(item);
        });
        setlanguage(temp2)

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
            <Text style={styles.modalText}>Change Language</Text>
            <View style={styles.mainview}>
            <FlatList
            data={language}
            renderItem={(({item,index})=>{
                return(
                    <TouchableOpacity style={[styles.languagebutton,{borderColor:item.selected == true?"blue":"black"}]} onPress={()=>selectlanindex(index)}>
                    <Text>{item.name}</Text>
                    </TouchableOpacity>
                )
            })}
            />
           <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                <TouchableOpacity style={styles.languagebutton} onPress={()=>{onclose();}}><Text>Cancel</Text></TouchableOpacity>
                <TouchableOpacity style={styles.languagebutton}  onPress={()=>{onclose();onselectlang(selectlang)}}><Text>Apply</Text></TouchableOpacity>
            </View>
            
          </View>
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };
  
  export default LanguageChangeModel;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FF2',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    modalView: {
      width: width-50,
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
    languagebutton:{
        borderColor:"#000"
        ,flexDirection:'row',
        padding:12,
        borderWidth:1,
        marginVertical:5
    },
    mainview:{
        // height:height/3,
        width:width-60
    }
  });
  