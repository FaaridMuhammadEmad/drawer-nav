import React, {useState} from 'react'
import { View, Text, Button } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

export default function Home({navigation}) {
    
    const [reviews, setReviews] = useState([ // creating array object
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
      ]);

    const pressHandler = () => {
        navigation.navigate('ReviewDetails')
        // navigation.push('ReviewDetails') //this and above line do same thing

    }
    return (
        <View>
            <Text style={{color:'blue', textAlign: 'center', fontWeight:'bold', fontSize:28}}>Home Screen</Text>
            <Text> </Text>
            <FlatList //creating flatlist
                data={reviews} //flatlist have data prop which specifies what data we want to cycle through
                renderItem={({item}) => ( //this is renderItem function prop, here we have access to item through Dstructuring and we will access individual review via this item 
                    <TouchableOpacity onPress={ () => navigation.navigate('ReviewDetails',item)}>
                      <Text style={{fontSize:16, color:'red'}}>{item.title}</Text> 
                      {/* here we are making a flatlist of only titles of reviews */}
                    </TouchableOpacity>
                )}
            />
            <Text> </Text>
            <Button title='Go to Review Details' onPress={pressHandler}/>
            
            <TouchableOpacity onPress={()=>{
            console.warn("test clicked")
            navigation.openDrawer()
            }}><Text>TEST</Text></TouchableOpacity>
        </View>
    )
}
