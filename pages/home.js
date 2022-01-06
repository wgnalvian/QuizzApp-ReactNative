import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import HomeImage from '../asset/homeImage.svg'
export default function Home({navigation}) {
    return (
        <View style={{flex : 1, backgroundColor : '#073b4c', display : 'flex', alignItems : 'center', justifyContent : 'center'}}>
            <Text style={{color : '#ff9e00', fontWeight : 'bold', fontSize : 80}}>Quizly</Text>
            <HomeImage  width={400} height={400}/>
            <TouchableOpacity onPress={() => navigation.navigate('question0')}>
            <View style={{width : 250, height : 60, backgroundColor : '#06d6a0', borderRadius : 10, display : 'flex', alignItems : 'center', justifyContent : 'center',}}>
                    <Text style={{ color : '#073b4c', fontWeight : 'bold', fontSize : 40}}>
                        Start Quizz
                    </Text>
            </View>
            </TouchableOpacity>
        </View>
    )
}
