import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'
import Splash from '../../assets/splash.jpg'
const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => { navigation.navigate('TabNavigation') }, 2000)
    }, [])
    return (
        <View style={styles.container}>
            <Image
                source={(Splash)}
                style={{ width: 340, height: 500, borderRadius: 50, }}
            />
            <View>
                <Text style={{ fontSize: 20, marginTop: 20 }}>Welcom to Health Care</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
    }
})
export default SplashScreen