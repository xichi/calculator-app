import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';

function HousingLoan() {
  const [amount, onChangeAmount] = useState('');
  const [years, onChangeYears] = useState('');
  const [rate, onChangeRate] = useState('4.9');

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
      </View>
    </View>
  );
}

export default HousingLoan;
