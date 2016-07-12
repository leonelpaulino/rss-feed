import { StyleSheet, Dimensions } from 'react-native';
let {height: height, width: width} = Dimensions.get('window');
let styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 8,
    height: height * 0.2 
  },
  image: {
    width: width * 0.3,
    height: width * 0.3,
    borderRadius: width * 0.3 / 2
  },
  descriptionContainer: {
    width: width * 0.6,
    flexWrap: 'wrap'

  },
  text: {
    marginLeft: 16
  }
});

module.exports = styles;