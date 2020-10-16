import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import CalculatorIcon from '../assets/images/calculator.svg';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#5c969e',
  },
  item: {
    flexShrink: 0,
    width: '33.3%',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#efefef',
  },
});

function Dashboard({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('Calculator')}
      >
        {/* <CalculatorIcon width={50} height={50} /> */}
        <Text>计算器</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('ExchangeRate')}
      >
        <Text>汇率换算</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('HousingLoan')}
      >
        <Text>房贷计算</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('UnitConversion')}
      >
        <Text>单位换算</Text>
      </TouchableOpacity>
      <View style={styles.item}>
        <Text>日期计算</Text>
      </View>
      <View style={styles.item}>
        <Text>万能公式</Text>
      </View>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('DecimalConversion')}
      >
        <Text>进制转换</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Dashboard;
