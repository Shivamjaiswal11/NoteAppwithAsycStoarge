import React from 'react'
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native'
import { Colors } from '../utils/colors'

import { FontFamily } from '../utils/fontFamily'
import { normalize, vh, vw } from './Dimension'

export default function CustomButton(props) {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            disabled={props.disabled}
            style={{
                width: vw(374),
                height: vh(70),
                backgroundColor: Colors.themeColor,
                borderRadius: normalize(20),
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: vh(20),
                ...props.style
            }} >
            {props.loading && (
                <View style={{ width: '100%', height: '100%', position: 'absolute', justifyContent: 'center', alignItems: 'center' }} >
                    <ActivityIndicator size={'large'} color={Colors.white} />
                </View>

            )}
            <Text style={{
                fontSize: normalize(24),
                color: Colors.white,
                fontFamily: FontFamily.SemiBold
            }} >{props.name}</Text>
        </TouchableOpacity>
    )
}