import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import moment from 'moment';
import { getExchangeRate } from '../../api';

// Base: USD
// openexchangerates.org :
// Changing the base currency is available for all clients of paid plans.
const CurrencyDATA = [
  {
    id: 'USD',
    currency: '美元',
  },
  {
    id: 'CNY',
    currency: '人民币',
  },
  {
    id: 'HKD',
    currency: '港币',
  },
  {
    id: 'AUD',
    currency: '澳大利亚元',
  },
  {
    id: 'GBP',
    currency: '英镑',
  },
  {
    id: 'EUR',
    currency: '欧元',
  },
  {
    id: 'JPY',
    currency: '日元',
  },
];
const CurrencyId = CurrencyDATA.map((item) => item.id);

function ExchangeRate() {
  const [time, setTime] = useState('');
  const [update, setUpdate] = useState(false);
  const [currency, setCurrency] = useState(CurrencyDATA);

  const fetchRateData = async () => {
    const results = await getExchangeRate();
    const { rates, timestamp } = results.data;
    setTime(moment(timestamp * 1000).format('MM-DD HH:mm:ss'));
    let newCurrency = currency;
    Object.entries(rates).map((item, key) => {
      const TheKey = CurrencyId.indexOf(item[0]);
      if (TheKey !== -1) {
        newCurrency[TheKey] = { ...currency[TheKey], rate: item[1] };
      }
    });
    setCurrency(newCurrency);
    setUpdate(true);
  };

  useEffect(() => {
    fetchRateData();
  }, [update]);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemId}>{item.id}</Text>
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
      <View style={styles.header}>
        <Text style={styles.headerText}>基准汇率</Text>
        <Text style={styles.headerText}>更新时间： {time ? time : '未知'}</Text>
      </View>
      <FlatList
        data={currency}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
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
    backgroundColor: '#fff',
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#e8e8e8',
    borderBottomWidth: 1,
  },
  itemId: {
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
    color: '#999',
  },
});

export default ExchangeRate;
