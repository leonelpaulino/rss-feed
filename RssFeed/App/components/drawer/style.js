import { StyleSheet } from 'react-native';

let style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    paddingTop: 16,
    paddingLeft: 16,
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    opacity: 0.5
  },
  text: {
    marginLeft: 16,
    color: 'rgba(0,0,0,0.87)',
    fontSize: 14
  }
});

module.exports = style;