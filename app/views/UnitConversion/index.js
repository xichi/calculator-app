import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import CalculatorIcon from '../assets/images/calculator.svg';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#efefef',
  },
  item: {
    width: '41.5%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    margin:17,
    marginBottom:8,
    borderRadius:20,
    shadowColor: 'black',
    shadowOffset: {h: 10, w: 10},
    shadowRadius: 6,
    shadowOpacity: 0.1,

  },
  text:{
    fontSize:24,
    fontWeight:'600',
    color:'#1196EE',
    //color:'black'
  }
});

function index({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('Length')}
      >
        {/* <CalculatorIcon width={50} height={50} /> */}
        <Text style={styles.text}>长度单位</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('Time')}
      >
        <Text style={styles.text}>时间单位</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('Area')}
      >
        <Text style={styles.text}>面积单位</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('Weight')}
      >
        <Text style={styles.text}>重量单位</Text>
      </TouchableOpacity>
    </View>
  );
}

export default index;