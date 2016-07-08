import { StyleSheet } from 'react-native';

let styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingTop: 16
  },
  textTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00BCD4'
  },
  buttonContainer: {
    width: 100,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    borderColor: 'transparent',
    backgroundColor: '#00BCD4'
  },
  buttonText: {
    color: 'white'
  },
  rowText: {
    color: '#9E9E9E',
    width: 150
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16
  },
  listContainer: {
    borderRadius: 2,
    marginTop: 16,
    borderColor: '#9E9E9E',
    width: 205,
    borderWidth: 1
  },
  list: {
    height: 100,
    width: 200,
    marginTop: 8
  }
});

module.exports = styles;