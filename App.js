import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
// import {  } from 'react-native/types_generated/index';

export default function App() {
  const [text, setText] = useState('');
  
  return (
    <View style={styles.container}>
      <Text style={{ borderWidth: 2, borderColor: '#000000', borderRadius: 10, padding: 20 }} onTouchStart={()=> alert(' touched!') }>Sai's first App</Text>
      <StatusBar style="auto" />
      <TextInput onChangeText={(text)=>setText(text)} placeholder="Enter text here..." />
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
    
  }
});
