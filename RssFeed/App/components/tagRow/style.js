import { StyleSheet, Dimensions } from 'react-native';

let styles = StyleSheet.create({
  container: {
    marginTop: 70,
    paddingLeft: 16,
    paddingRight: 16,
    height: 40,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center'

  },
  text: {
    fontSize: 16,
    width: Dimensions.get('window').width - 50,
  }
});

module.exports = styles;