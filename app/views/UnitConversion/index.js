import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
// import CalculatorIcon from 'app/assets/images/calculator.svg';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: '#efefef',
  },
  item: {
    width: '41.5%',
    height: 100,
    backgroundColor: 'white',
    margin: 15,
    paddingTop: 37.5,
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: { h: 10, w: 10 },
    shadowRadius: 6,
    shadowOpacity: 0.1,
    //textAlign: 'center',
  },
  text: {
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
    color: '#1196EE',
    //color:'black'
  },
});

function index({ navigation }) {
  return (
    <ScrollView>
      <View style={[styles.container]}>
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
          //onPress={() => navigation.navigate('Area')}
          onPress={() => alert('此模块还在维护，尚未开放！')}
        >
          <Text style={styles.text}>面积单位</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          //onPress={() => navigation.navigate('Weight')}
          onPress={() => alert('此模块还在维护，尚未开放！')}
        >
          <Text style={styles.text}>重量单位</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default index;
