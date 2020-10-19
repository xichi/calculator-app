import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Image,
  Linking,
} from 'react-native';
import moment from 'moment';
import { getExchangeRate } from '../../api';
import { CurrencyDATA, CurrencyTime } from './data';

const CurrencyId = CurrencyDATA.map((item) => item.id);

function ExchangeRate() {
  const [time, setTime] = useState('');
  const [update, setUpdate] = useState(false);
  const [currency, setCurrency] = useState(CurrencyDATA);

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
    setUpdate(true);
  };

  /*
    TODO:
    Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
  */
  useEffect(() => {
    fetchRateData();
  }, [update]);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image style={{ width: 80, height: 50 }} source={item.source} />
        <Text style={styles.itemId}>{item.id}</Text>
      </View>
      <View style={styles.currency}>
        <Text style={styles.currencyNumber}>
          {item.rate ? 100 * item.rate : 0}
        </Text>
        <Text style={styles.currencyName}>{item.currency}</Text>
      </View>
    </View>
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
          <Text style={{ marginVertical: 10, textAlign: 'center' }}>
            感谢
            <Text
              style={{ color: '#0000ff' }}
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
    //display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#e8e8e8',
    borderBottomWidth: 1,
  },
  itemId: {
    fontSize: 20,
    marginHorizontal: 10,
  },
  currency: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  currencyNumber: {
    fontSize: 16,
  },
  currencyName: {
    color: '#999',
  },
});

export default ExchangeRate;
