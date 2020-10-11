import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  Modal,
  Image,
  Linking,
} from 'react-native';
import moment from 'moment';
import { getExchangeRate } from '../../api';
import { CurrencyDATA } from './data';

const CurrencyId = CurrencyDATA.map((item) => item.id);

function ExchangeRate() {
  const [time, setTime] = useState('');
  const [update, setUpdate] = useState(false);
  const [currency, setCurrency] = useState(CurrencyDATA);
  const [loadingVisible, onShowLoading] = useState(true);

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
    onShowLoading(false);
  };

  useEffect(() => {
    fetchRateData();
  }, [update]);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View
        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
      >
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
      <View style={styles.header}>
        <Text style={styles.headerText}>基准汇率</Text>
        <Text style={styles.headerText}>更新时间： {time ? time : '未知'}</Text>
      </View>
      <Modal visible={loadingVisible} transparent={true}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ActivityIndicator size="large" color="#0000ff" />
            <Text style={{ color: '#0000ff', marginTop: 10 }}>loading</Text>
          </View>
        </View>
      </Modal>
      <FlatList
        data={currency}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    width: 150,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default ExchangeRate;
