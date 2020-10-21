import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  Alert,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { tools } from '../constants';

function Dashboard({ navigation }) {
  const [myTools, setMyTools] = useState(tools.slice(0, 1));
  const [selectMode, setSelectMode] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('MY_TOOLS');
        if (jsonValue) {
          setMyTools(JSON.parse(jsonValue));
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  const onTapTools = async (item) => {
    if (!selectMode) {
      navigation.navigate(item.id);
    } else {
      setSelectMode(false);
      const MY_TOOLS = myTools.concat(item);
      setMyTools(MY_TOOLS);
      await AsyncStorage.setItem('MY_TOOLS', JSON.stringify(MY_TOOLS));
    }
  };

  const showDeleteDialog = async (index) => {
    Alert.alert('提示', '是否移除该工具', [
      {
        text: '是',
        onPress: async () => {
          // let temp_tools = myTools;
          let temp_tools = [...myTools]; // 拷贝到新的数组，setState才能更新
          temp_tools.splice(index, 1);
          setMyTools(temp_tools);
          await AsyncStorage.setItem('MY_TOOLS', JSON.stringify(temp_tools));
        },
      },
      {
        text: '否',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>我的工具</Text>
          <TouchableOpacity onPress={() => setSelectMode(!selectMode)}>
            <Image
              style={{ width: 30, height: 30 }}
              source={require('../assets/icons/add.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.line}>
          {myTools.map((item, index) => (
            <TouchableOpacity
              style={styles.item}
              key={item.id}
              onPress={() => navigation.navigate(item.id)}
              onLongPress={() => showDeleteDialog(index)}
            >
              <Image style={styles.icon} source={item.img} />
              <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.header}>
          <Text style={styles.headerText}>全部工具</Text>
          {selectMode ? (
            <Text style={{ color: '#ffa931', fontSize: 12 }}>
              点击图标添加至我的工具箱
            </Text>
          ) : null}
        </View>
        <View style={!selectMode ? styles.line : selectLine}>
          {tools.map((item) => (
            <TouchableOpacity
              style={styles.item}
              key={item.id}
              onPress={() => onTapTools(item)}
            >
              <Image style={styles.icon} source={item.img} />
              <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  box: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  line: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  item: {
    width: '33%',
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 20,
    lineHeight: 50,
    color: '#555',
    fontWeight: 'bold',
  },
  boxItem: {
    flexShrink: 0,
    width: '33.3%',
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 70,
    height: 70,
  },
  text: {
    lineHeight: 30,
    color: '#666',
  },
});

const selectLine = StyleSheet.compose(styles.line, {
  backgroundColor: '#dfdfdf',
});

export default Dashboard;
