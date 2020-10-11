import React, { useState } from 'react';
import {
  Text,
  View,
  Button,
  TextInput,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Picker } from 'native-base';

function HousingLoan() {
  const [amount, onChangeAmount] = useState('');
  const [years, onChangeYears] = useState('');
  const [rate, onChangeRate] = useState('4.9');
  const [selectedMethod, onChangeMethod] = useState('key0');

  const compute = () => {
    console.log('11');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.line}>
        <Text>贷款金额（万元）</Text>
        <TextInput
          style={styles.TextInput}
          keyboardType="numeric"
          onChangeText={(text) => onChangeAmount(text)}
          value={amount}
        />
      </View>
      <View style={styles.line}>
        <Text>贷款年限（年）</Text>
        <TextInput
          style={styles.TextInput}
          keyboardType="numeric"
          onChangeText={(text) => onChangeYears(text)}
          value={years}
        />
      </View>
      <View style={styles.line}>
        <Text>贷款利率（%）</Text>
        <TextInput
          style={styles.TextInput}
          keyboardType="numeric"
          onChangeText={(text) => onChangeRate(text)}
          value={rate}
        />
      </View>
      <View style={styles.line}>
        <Text>贷款方式</Text>
        <Picker
          mode="dialog"
          style={styles.picker}
          selectedValue={selectedMethod}
          onValueChange={(value) => onChangeMethod(value)}
        >
          <Picker.Item label="等额本息" value="key0" />
          <Picker.Item label="等额本金" value="key1" />
        </Picker>
      </View>
      <View style={{ marginTop: 20 }}>
        <Button onPress={compute} color="#ffa931" title="计算" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    marginTop: 20,
  },
  line: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  TextInput: {
    width: 200,
    height: '80%',
    borderColor: '#999',
    backgroundColor: '#fff',
    borderWidth: 1,
  },
  picker: {
    width: 200,
    flexGrow: 0,
    color: '#333',
  },
});

export default HousingLoan;
