import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';

// import {  } from 'react-native/types_generated/index';

export default function App() {
  const [text, setText] = useState('');
  
  return (
    
    <View style={styles.container}>
      <Text style={styles.textCont} onTouchStart={()=> alert(' touched!') }>Sai's first App</Text>
      <StatusBar style="auto" />
      <View>
        <Text style={styles.textDisplay} numberOfLines={2}> {text.length > 0 ? text : "enter text"} </Text>
      </View>
      <TextInput style={styles.textInput} onChangeText={(text) => setText(text)} placeholder="Enter text here..." onFocus={() => alert("input Focused")} multiline={true} editable={true}
      />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ece5e5',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000000',
    textCont: {
      borderWidth: 2,
      borderColor: '#000000',
      borderRadius: 10,
      padding: 20 
    },
    textDisplay: {
      color: "red",
      fontSize: 20
    },
    textInput: {
      borderWidth: 2,
      borderColor: '#000000',
      borderRadius: 10,
      padding: 20
    }

  }
});
