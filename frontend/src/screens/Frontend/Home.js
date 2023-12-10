// import { Image, StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import homePicture from '../../assets/homePicture.jpg'

// const Home = () => {
//     return (
//         <View style={styles.container}>
//             <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//                 <Text style={{ fontSize: 23,textAlign:'center', color: 'black', fontWeight: 'bold' }}>Schedule Your Wellness: Book Your Doctor's Appointment Today!</Text>
//             </View>
//             <View style={{ flex: 1 }}>
//                 <Image style={styles.picture} source={(homePicture)} />
//             </View>
//             <View style={{ flex: 1, }}>
//                 <Text style={{marginHorizontal:5, textAlign:'center',top:40,fontSize:20}}>
//                     Adhering to the recommended schedule of appointments is key to managing chronic conditions and promoting overall health
//                 </Text>
//             </View>
//         </View>
//     )
// }

// export default Home

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor:'white'
//     },
//     picture: {
//         left: 40,
//         borderRadius: 20,
//         height: 260,
//         width: 300,
//         backgroundColor: 'white',
//     },
// })

import { View, Text, Button, Image, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Fontisto from 'react-native-vector-icons/Fontisto';
import homeImage from "../../assets/home.jpg"
const Home = ({ navigation }) => {
    const handlePage = (item) => {
        console.log()
        navigation.navigate(item)
    }
    return (
        <View style={{ flex: 1 }}>
            <View>
                <Image
                    source={(homeImage)}
                    style={{ width: "full", height: 400 }}
                />
            </View>
            <View style={styles.box} >
                <TouchableOpacity onPress={() => handlePage("Doctor")} style={styles.box1}>
                    <FontAwesome6 name="user-doctor" color={"white"} size={40} />
                    <Text style={styles.text}>Doctore</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePage("Patient")} style={styles.box2}>
                    <Fontisto name="bed-patient" color={"white"} size={40} />
                    <Text style={styles.text}>Patient</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => handlePage("Appointment")} style={styles.appointment}>
                <FontAwesome6 name="notes-medical" color={"white"} size={40} />
                <Text style={styles.text}>Appoinment</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    box: {
        height: "25%",
        flexDirection: "row",
        justifyContent: "space-between",

    },
    box1: {
        backgroundColor: "green",
        width: "50%",
        justifyContent: "center",
        alignItems: "center",
    },
    box2: {
        backgroundColor: "#00d4ff",
        width: "50%",
        justifyContent: "center",
        alignItems: "center",
    },
    appointment: {
        backgroundColor: "red",
        height: "21%",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 30,
        color: "white"
    }
})

export default Home
