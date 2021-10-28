import React, {useState} from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native'

export default function Insta() {

const [userName, setUserName]=useState('')
const [password, setPassword] = useState('')

function logIn(){
  console.warn(userName)
  console.warn(password)
}
  return (
    <View style={styles.mainView}>
      {/* <Image style={styles.instaStyle} source={require('../FirstProject/assets/insta.png')}/> */}
      <TextInput 
      style={styles.textInputStyle}
      placeholder='Phone Number or Email or Username' 
      placeholderTextColor='#C3C3C3'
      value={userName} //this textinput value is recognized by userName state i.e. gives userName
      onChangeText={(v)=>{
          setUserName(v)
      }}
      //in react native Text, TextInput, View, Image, Button, TouchableOpacity, etc are components.
      //in react native styles, placeholder, placeholderTextColor, value, onChangeText, etc are props(properties)
     />
     <TextInput 
      secureTextEntry={true}
      style={styles.textInputStyle}
      placeholder='Password' 
      placeholderTextColor='#C3C3C3'
      value={password}
      onChangeText={(v)=>{
        setPassword(v)
      }}
     />
     <Text style={styles.forgotPassword}>Forgot Password?</Text>
      <TouchableOpacity style={styles.loginBtn} 
      onPress={()=>{      
        logIn()
      }}>
        <Text style={styles.loginText}>Log In</Text>
      </TouchableOpacity>
      <View style={styles.secondView}>
        {/* <Image style={styles.fbStyle} source={require('../FirstProject/assets/fb.png')}/> */}
      <Text style={styles.iconText}>Continue as Maria Siddiqui</Text>
      </View>
      <View style={styles.thirdView}>
      {/* <View style={{borderBottomColor:'#C3C3C3', borderBottomWidth:10}}></View> */}
      <Text style={styles.orStyle}>OR</Text>
      {/* <View style={{borderBottomColor:'#C3C3C3', borderBottomWidth:10}}></View> */}
      </View>
      <View style={styles.fourthView}>
        <Text style={styles.accountText}>Don't have an account? </Text>
        <Text  style={styles.signUpText}>Sign Up</Text>
      </View>
    </View>
  )
}

const styles= StyleSheet.create({
mainView:{
  backgroundColor:'white',
  display:'flex',
  flex:1,
  paddingHorizontal:20,
  justifyContent:'center'
},

 textInputStyle:{
   borderWidth: 1,
   borderColor: '#C3C3C3',
   backgroundColor:'#FAFAFA',
   padding:10,
   marginTop:20
 },
 forgotPassword:{
   color:'#388FE5',
   fontWeight:'bold',
   alignSelf:'flex-end',
   marginTop: 10,
 },
 loginText:{
   color:'white',
   fontWeight:'bold',
 },
 loginBtn:{
   backgroundColor:'#388FE5',
   marginTop: 20,
   paddingVertical: 10,
   alignItems: 'center'
  },
  secondView:{
      display:'flex',
      flexDirection: 'row',
      marginTop: 40,
      justifyContent:'center'
  },
  fbStyle:{
    height:27,
    width:27,
    
  },
  instaStyle:{
    height:50,
    width:50,
    alignSelf:'center',
    marginBottom: 40
  },
  iconText:{
    color:'#388FE5',
   fontWeight:'bold',
   alignSelf:'center',
   marginLeft: 10  
  },
  orStyle:{
    color:'#C3C3C3',
    fontWeight:'bold',
    alignSelf:'center',
  },
  fourthView:{
    display: 'flex',
    flexDirection:'row',
    marginTop: 40,
    justifyContent:'center'
  },
  accountText:{
    color:'#C3C3C3',
    fontWeight:'bold',
  },
  signUpText:{
    color: '#388FE5',
    fontWeight: 'bold'
  },
  thirdView:{
    display: 'flex',
    flexDirection:'row',
    marginTop: 40,
    justifyContent:'center'
  },
})
