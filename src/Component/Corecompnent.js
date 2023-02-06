// import { View, Text } from 'react-native'
// import React from 'react'

import { Alert } from "react-native"

// const Corecompnent = () => {
//   return (
//     <View>
//       <Text>Corecompnent</Text>
//     </View>
//   )
// }

// export default Corecompnent
export const deletedilog = (onPress)=>{
    Alert.alert('Are you Sure ','deletenote',[{text:'delete',onPress :()=>{onPress}},{text:'No Thanks',onPress :()=>{onPress}}],{cancelable:true})
} 