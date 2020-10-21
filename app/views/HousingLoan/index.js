import React, { useState } from 'react';
import {
  Text,
  View,
  Button,
  TextInput,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Picker } from 'native-base';
import Theme from '../../variables';

function HousingLoan() {
  const [amount, onChangeAmount] = useState('');
  const [years, onChangeYears] = useState('');
  const [rate, onChangeRate] = useState('4.9');
  const [selectedMethod, onChangeMethod] = useState('key0');
  const [results, setResults] = useState(undefined);

  const AM = amount * 10000; // AMount
  const MR = (rate * 0.01) / 12; // Monthly Rate
  const months = years * 12;

  const compute = () => {
    let r = results;
    if (selectedMethod === 'key0') {
      r = withEqualPrincipalAndInterest();
    } else {
      r = withEqualPrincipal();
    }
    setResults(r);
  };

  // 等额本金
  const withEqualPrincipal = () => {
    const totalInterest =
      ((AM / months + AM * MR + (AM / months) * (1 + MR)) / 2) * months - AM;
    const totalRepayment = totalInterest + AM;
    const details = [];
    let principalPaid = 0; // 已归还本金累计额

    for (let i = 0; i < months; i++) {
      const repayment = AM / months + (AM - principalPaid) * MR;
      const interest = (AM - principalPaid) * MR;
      const principal = AM / months;
      principalPaid += principal;
      const item = {
        index: `第${i + 1}期`,
        repayment: repayment.toFixed(2),
        principal: principal.toFixed(2),
        interest: interest.toFixed(2),
      };
      details.push(item);
    }

    return {
      monthRepayment: details[0].repayment, // 首月月供
      totalRepayment: totalRepayment.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
      details,
    };
  };

  // 等额本息
  const withEqualPrincipalAndInterest = () => {
    const monthRepayment =
      (AM * MR * Math.pow(1 + MR, months)) / (Math.pow(1 + MR, months) - 1);
    const totalRepayment = months * monthRepayment;
    const totalInterest = totalRepayment - amount;
    const details = [];
    for (let i = 0; i < months; i++) {
      const interest =
        (AM * MR * (Math.pow(1 + MR, months) - Math.pow(1 + MR, i))) /
        (Math.pow(1 + MR, months) - 1);
      const principal =
        (AM * MR * Math.pow(1 + MR, i)) / (Math.pow(1 + MR, months) - 1);
      const item = {
        index: `第${i + 1}期`,
        repayment: monthRepayment.toFixed(2),
        principal: principal.toFixed(2),
        interest: interest.toFixed(2),
      };
      details.push(item);
    }

    return {
      monthRepayment: monthRepayment.toFixed(2),
      totalRepayment: totalRepayment.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
      details,
    };
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.line}>
          <Text
            style={[
              styles.text,
              { color: Theme.colorTheme ? 'white' : 'black' },
            ]}
          >
            贷款金额（万元）
          </Text>
          <TextInput
            style={styles.TextInput}
            keyboardType="numeric"
            onChangeText={(text) => onChangeAmount(text)}
            value={amount}
          />
        </View>
        <View style={styles.line}>
          <Text
            style={[
              styles.text,
              { color: Theme.colorTheme ? 'white' : 'black' },
            ]}
          >
            贷款年限（年）
          </Text>
          <TextInput
            style={styles.TextInput}
            keyboardType="numeric"
            onChangeText={(text) => onChangeYears(text)}
            value={years}
          />
        </View>
        <View style={styles.line}>
          <Text
            style={[
              styles.text,
              { color: Theme.colorTheme ? 'white' : 'black' },
            ]}
          >
            贷款利率（%）
          </Text>
          <TextInput
            style={styles.TextInput}
            keyboardType="numeric"
            onChangeText={(text) => onChangeRate(text)}
            value={rate}
          />
        </View>
        <View style={styles.line}>
          <Text
            style={[
              styles.text,
              { color: Theme.colorTheme ? 'white' : 'black' },
            ]}
          >
            贷款方式
          </Text>
          <Picker
            mode="dialog"
            style={[
              styles.picker,
              { color: Theme.colorTheme ? 'white' : 'black' },
            ]}
            selectedValue={selectedMethod}
            onValueChange={(value) => onChangeMethod(value)}
          >
            <Picker.Item label="等额本息" value="key0" />
            <Picker.Item label="等额本金" value="key1" />
          </Picker>
        </View>
        <View style={styles.btn}>
          <Button onPress={compute} color="#ffa931" title="计算" />
        </View>
        {results ? (
          <View style={styles.results}>
            <View>
              <Text style={styles.secondaryColor}>
                {selectedMethod === 'key0' ? '每月月供' : '首月月供'}
              </Text>
              <Text>
                <Text
                  style={{ fontSize: 25, color: '#ffa931' }}
                >{`￥${results?.monthRepayment}`}</Text>
                <Text style={styles.secondaryColor}>元</Text>
              </Text>
            </View>
            <Text style={styles.secondaryColor}>
              <Text>累计利息（元）：</Text>
              <Text>{results?.totalInterest}</Text>
            </Text>
            <Text style={styles.secondaryColor}>
              <Text>累计还款总额（元）：</Text>
              <Text>{results?.totalInterest}</Text>
            </Text>
            <View>
              <View style={tableHeader}>
                <Text style={styles.item}>期数</Text>
                <Text style={styles.item}>月供</Text>
                <Text style={styles.item}>本金（元）</Text>
                <Text style={styles.item}>利息（元）</Text>
              </View>
              {results?.details?.map((item) => (
                <View style={tableLine} key={item.index}>
                  <Text style={styles.item}>{item.index}</Text>
                  <Text style={styles.item}>{item.repayment}</Text>
                  <Text style={styles.item}>{item.principal}</Text>
                  <Text style={styles.item}>{item.interest}</Text>
                </View>
              ))}
            </View>
          </View>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    marginHorizontal: 10,
    marginTop: 20,
  },
  line: {
    alignItems: 'stretch',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 17,
    marginTop: 3,
  },
  TextInput: {
    width: 200,
    height: 30,
    padding: 6,
    borderRadius: 6,
    borderColor: '#333',
    backgroundColor: '#fff',
    borderWidth: 1,
  },
  item: {
    width: '25%',
    textAlign: 'center',
    color: '#666',
  },
  picker: {
    width: 200,
    flexGrow: 0,
    color: '#333',
  },
  btn: {
    alignSelf: 'center',
    marginTop: 10,
    width: '100%',
    backgroundColor: '#fdcb6e',
    borderRadius: 6,
  },
  results: {
    marginVertical: 20,
  },
  secondaryColor: {
    color: '#666',
  },
  tableHeader: {
    marginTop: 10,
    backgroundColor: '#ddd',
    height: 30,
    borderColor: '#999',
    borderWidth: 1,
  },
  tableLine: {
    height: 30,
    borderColor: '#999',
    borderWidth: 1,
    marginTop: 0,
  },
});

const tableHeader = StyleSheet.compose(styles.line, styles.tableHeader);
const tableLine = StyleSheet.compose(styles.line, styles.tableLine);

export default HousingLoan;
