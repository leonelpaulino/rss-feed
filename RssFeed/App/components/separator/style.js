import { StyleSheet, Dimensions } from 'react-native';

let {height: height, width: width} = Dimensions.get('window');
let styles = StyleSheet.create({
  separator: {
    width: width,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderWidth: 2,
    borderColor: 'rgba(0,0,0,0.3)'
  }
});

module.exports = styles;