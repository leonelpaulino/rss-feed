import { StyleSheet, Dimensions } from 'react-native';
let {height: height, width: width} = Dimensions.get('window');

let styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    height: height * 0.1,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center'

  },
  text: {
    fontSize: 16,
    width: width - 50,
  }
});

module.exports = styles;