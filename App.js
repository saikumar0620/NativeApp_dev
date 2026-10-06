import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, TextInput, View, } from 'react-native';

import { styles } from './styles.js';


export default function App() {
  const [text, setText] = useState('');
  
  return (
   
    <View style={styles.container}>
      <Text style={styles.textCont} onTouchStart={()=> alert(' touched!') }>Sai's first App</Text>
      <StatusBar style="auto" />
      <View>
        <Text style={styles.textDisplay} numberOfLines={2}> {text.length > 0 ? text : "enter text"} </Text>
      </View>
      <TextInput style={styles.textInput} onChangeText={setText} placeholder="Enter text here..." onFocus={() => alert("input Focused")} multiline={true} editable={true}
      />
    </View>
    
  );
}


