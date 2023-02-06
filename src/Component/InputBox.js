import React from 'react'
import { Text, TextInput, View } from 'react-native'

// import { FontFamily } from '../utils/fontFamily'
import { normalize, vh, vw } from './Dimension'
import {COLORS} from '../Theme/Color'

export default InputBox = (props) => {
    return (
        <View style={{
            width: vw(390),
            height: vh(90),
            alignSelf: 'center',
            marginVertical: vh(7),margin:20,backgroundColor:'#ff2'
            
        }} >
            <Text style={{
                fontSize: normalize(18),
                // fontFamily: FontFamily.SemiBold,
                paddingBottom: vh(5),
                color:COLORS.scendarycolor ,

                ...props.labelStyle,
            }} >{props.label}</Text>
            <TextInput
                placeholder={props.placeholder}
                placeholderTextColor={COLORS.placeHolder}
                secureTextEntry={props.secureTextEntry}
                onChangeText={props.onChangeText}
                keyboardType={props.keyboardType}
                maxLength={props.maxLength}
                // keyboardType='phone-pad'
                style={{
                    width: vw(390),
                    height: vh(75),
                    borderWidth: 2,
                    borderRadius: normalize(5),
                    borderColor: "black",
                    paddingHorizontal: vw(20),
                    fontSize: normalize(16),
                    // fontFamily: FontFamily.Regular,
                    color: '#A4A4A4',
                    ...props.inputStyle
                }}
            />
        </View>
    )
}
