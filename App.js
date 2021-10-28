import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Navigator from './routes/drawer'

export default class App extends Component {
  render() {
    return (
          <Navigator />
    )
  }
}


// import React from 'react'
// import { View, Text } from 'react-native'
// import Navigator from './routes/drawer'

// export default function App() {
  
//   return (
//     <Navigator />
//     // <Home/>
//     // <About/>
//     // <ReviewDetails/>
//     // <Insta/>
    
//   )
// }
