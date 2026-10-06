import { StyleSheet } from 'react-native';

 export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ece5e5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCont: {
    borderWidth: 2,
    borderColor: '#000000',
    borderRadius: 10,
    padding: 20,
    color: '#000000', // Moved here if you wanted the text black
  },
  textDisplay: {
    color: 'red',
    fontSize: 20,
  },
  textInput: {
    borderWidth: 2,
    borderColor: '#000000',
    borderRadius: 10,
    padding: 20,
    width: '80%', // Add width so the input doesn't collapse or behave unpredictably
    marginTop: 10,
  },
});