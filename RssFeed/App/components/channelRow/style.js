import { StyleSheet, Dimensions } from 'react-native';

let styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  buttonContainer: {
    width: Dimensions.get('window').width * 0.2,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: 'transparent',
    marginTop: 8,
    marginBottom: 8
  },
  text: {
    width: Dimensions.get('window').width * 0.5
  },
  buttonText: {
    color: 'white'
  },
  deleteContainer: {
    backgroundColor: '#D32F2F'
  },
  editContainer: {
    marginRight: 8,
    backgroundColor: '#FFC107'
  },
});

module.exports = styles;
