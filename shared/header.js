import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Header({navigation}) {
    const openMenu = () =>{
        navigation.openDrawer();
    }
    return (
        <View style={styles.header}>
            {/* icon for the menu */}
            <Icon name='menu' size={28} onPress={openMenu} style={styles.icon}/>
            <View>
                <Text style={styles.headerText}>Drawer Navigator</Text>
            </View>      
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width:'100%',
        height:'100%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    headerText: {
        fontWeight:'bold',
        fontSize: 20,
        color:'#4544',
        letterSpacing:1,
    },
    icon: {
        position: 'absolute',
        left: 12
    }
})
