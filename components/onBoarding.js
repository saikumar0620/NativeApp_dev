
import {StyleSheet, View, Text } from 'react-native'


export default function onBoardingScreen() {
  return (
  
    <View style={styles.text}>
      <Text >onBoardingScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    flex: 1,
    backgroundColor: '#ece5e5',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#e63030'
  }
})