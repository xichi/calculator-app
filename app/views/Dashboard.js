import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';
import SortableGrid from 'react-native-sortable-grid';

const tools = [
  {
    id: 'Calculator',
    name: '计算器',
    img: require('../assets/icons/calculator.png'),
  },
  {
    id: 'ExchangeRate',
    name: '汇率换算',
    img: require('../assets/icons/rate.png'),
  },
  {
    id: 'HousingLoan',
    name: '房贷计算',
    img: require('../assets/icons/loan.png'),
  },
  {
    id: 'UnitConversion',
    name: '单位换算',
    img: require('../assets/icons/unit.png'),
  },
  {
    id: 'DecimalConversion',
    name: '进制转换',
    img: require('../assets/icons/10.png'),
  },
  {
    id: '1',
    name: '日期计算',
    img: require('../assets/icons/calendar.png'),
  },
  {
    id: '2',
    name: 'BMI计算',
    img: require('../assets/icons/BMI.png'),
  },
  {
    id: '4',
    name: '大写金额',
    img: require('../assets/icons/money.png'),
  },
];

function Dashboard({ navigation }) {
  const [myTools, setMyTools] = useState(tools.slice(0, 1));

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>我的工具</Text>
        <Image
          style={{ width: 30, height: 30 }}
          source={require('../assets/icons/add.png')}
        />
      </View>
      <SortableGrid
        style={styles.box}
        blockTransitionDuration={400}
        activeBlockCenteringDuration={200}
        itemsPerRow={3}
        dragActivationTreshold={200}
      >
        {myTools.map((item) => (
          <View
            key={item.id}
            style={styles.item}
            onTap={() => navigation.navigate(item.id)}
          >
            <Image style={styles.icon} source={item.img} />
            <Text style={styles.text}>{item.name}</Text>
          </View>
        ))}
      </SortableGrid>
      <View style={styles.header}>
        <Text style={styles.headerText}>全部工具</Text>
      </View>
      <SortableGrid
        style={styles.box}
        blockTransitionDuration={400}
        activeBlockCenteringDuration={200}
        itemsPerRow={3}
        dragActivationTreshold={200}
      >
        {tools.map((item) => (
          <View
            style={styles.item}
            key={item.id}
            onTap={() => navigation.navigate(item.id)}
          >
            <Image style={styles.icon} source={item.img} />
            <Text style={styles.text}>{item.name}</Text>
          </View>
        ))}
      </SortableGrid>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10,
  },
  box: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  line: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
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
  },
});

export default Dashboard;
