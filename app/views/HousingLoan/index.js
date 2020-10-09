import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import { Picker } from 'native-base';

function HousingLoan() {
  const [amount, onChangeAmount] = useState('');
  const [years, onChangeYears] = useState('');
  const [rate, onChangeRate] = useState('4.9');
  const [selectedMethod, onChangeMethod] = useState('key0');

  return (
    <View>
      <View>
        <Text>贷款金额（万元）</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          keyboardType="numeric"
          onChangeText={(text) => onChangeAmount(text)}
          value={amount}
        />
      </View>
      <View>
        <Text>贷款年限（年）</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          keyboardType="numeric"
          onChangeText={(text) => onChangeYears(text)}
          value={years}
        />
      </View>
      <View>
        <Text>贷款利率（%）</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          keyboardType="numeric"
          onChangeText={(text) => onChangeRate(text)}
          value={rate}
        />
      </View>
      <View>
        <Text>贷款方式</Text>
        <Picker
          note
          mode="dropdown"
          style={{ width: 200 }}
          selectedValue={selectedMethod}
          onValueChange={(value) => onChangeMethod(value)}
        >
          <Picker.Item label="等额本息" value="key0" />
          <Picker.Item label="等额本金" value="key1" />
        </Picker>
      </View>
    </View>
  );
}

export default HousingLoan;
