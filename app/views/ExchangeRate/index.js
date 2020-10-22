import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Image,
  Linking,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';
import { getExchangeRate } from '../../api';
import { CurrencyDATA, CurrencyTime } from './data';
import Theme from '../../variables';

const CurrencyId = CurrencyDATA.map((item) => item.id);

function ExchangeRate() {
  const [base, setBase] = useState('USD');
  const [time, setTime] = useState('');
  const [currency, setCurrency] = useState(CurrencyDATA);
  const [money, onChangeMoney] = useState('100'); // base money

  const USMoney = money / currency.find((item) => item.id === base).rate;

  useEffect(() => {
    const fetchRateData = async () => {
      const results = await getExchangeRate();
      const { rates } = results.data;
      setTime(moment().format('MM-DD HH:mm:ss'));
      let newCurrency = currency;
      rates.map((item, key) => {
        const TheKey = CurrencyId.indexOf(item.currency_code);
        if (TheKey !== -1) {
          newCurrency[TheKey] = { ...currency[TheKey], rate: item.rate };
        }
      });
      setCurrency(newCurrency);
    };
    fetchRateData();
  }, [currency]);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => setBase(item.id)}>
      <View style={item.id === base ? baseItem : styles.item}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Image style={{ width: 80, height: 50 }} source={item.source} />
          <Text
            style={[
              styles.itemId,
              { color: Theme.colorTheme ? 'white' : 'black' },
            ]}
          >
            {item.id}
          </Text>
        </View>
        <View style={styles.currency}>
          {item.id === base ? (
            <TextInput
              style={styles.TextInput}
              keyboardType="numeric"
              onChangeText={(text) => onChangeMoney(text)}
              value={money}
            />
          ) : (
            <Text
              style={[
                styles.currencyNumber,
                { color: Theme.colorTheme ? 'white' : 'black' },
              ]}
            >
              {item.rate ? (USMoney * item.rate).toFixed(2) : 0}
            </Text>
          )}
          <Text style={styles.currencyName}>{item.currency}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={currency}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.headerText}>基准汇率</Text>
            <Text style={styles.headerText}>
              更新时间： {time ? time : CurrencyTime}
            </Text>
          </View>
        }
        ListFooterComponent={
          <Text
            style={{
              marginVertical: 10,
              textAlign: 'center',
              color: Theme.colorTheme ? 'white' : 'black',
            }}
          >
            感谢
            <Text
              style={{ color: Theme.colorTheme ? '#0ff' : '#0000ff' }}
              onPress={() => {
                let url = 'https://www.mycurrency.net/';
                Linking.openURL(url);
              }}
            >
              https://www.mycurrency.net/
            </Text>
            的API支持！
          </Text>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  headerText: {
    color: '#666',
  },
  item: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#e8e8e8',
    borderBottomWidth: 1,
  },
  itemId: {
    fontSize: 20,
    marginHorizontal: 10,
  },
  TextInput: {
    fontSize: 20,
  },
  currency: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  currencyNumber: {
    fontSize: 16,
  },
  currencyName: {
    color: '#95a5a6',
  },
  active: {
    backgroundColor: '#40739e',
  },
});

const baseItem = StyleSheet.compose(styles.item, styles.active);

export default ExchangeRate;
