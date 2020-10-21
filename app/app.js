// In App.js in a new project

import * as React from 'react';
import { useState } from 'react';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Theme from './variables';

// routes
import Dashboard from './views/Dashboard';
import Calculator from './views/Calculator';
import ExchangeRate from './views/ExchangeRate';
import HousingLoan from './views/HousingLoan';
import UnitConversion from './views/UnitConversion';
import DecimalConversion from './views/DecimalConversion';
import Sixteen from './views/DecimalConversion/Sixteen';
import Length from './views/UnitConversion/UnitKind/Length';
import Area from './views/UnitConversion/UnitKind/Area';
import Time from './views/UnitConversion/UnitKind/Time';
import Weight from './views/UnitConversion/UnitKind/Weight';
const Stack = createStackNavigator();

const styles = StyleSheet.create({
  navbar: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    //margin: 5,
  },
  icon: {
    width: 30,
    height: 30,
  },
  dark: {
    fontSize: 18,
    fontWeight: 'bold',
    position: 'absolute',
    left: 60,
  },
  titleRight: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 20,
  },
});

const App = () => {
  const [mode, setmode] = useState('夜间模式');

  return (
    <NavigationContainer theme={Theme.colorTheme ? DarkTheme : DefaultTheme}>
      <Stack.Navigator initialRouteName="Dashboard" headerMode="screen">
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={() => ({
            headerTitle: () => (
              <View style={styles.navbar}>
                <Text
                  style={[
                    styles.title,
                    { color: Theme.colorTheme ? 'white' : 'black' },
                    { margin: 5 },
                  ]}
                >
                  全能计算器
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    Theme.colorTheme = !Theme.colorTheme;
                    Theme.colorTheme
                      ? setmode('日间模式')
                      : setmode('夜间模式');
                  }}
                >
                  <Image
                    style={styles.icon}
                    source={
                      mode === '夜间模式'
                        ? require('./assets/icons/dark.png')
                        : require('./assets/icons/light.png')
                    }
                  />
                </TouchableOpacity>
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="Calculator"
          component={Calculator}
          initialParams={{ mode: 'base' }}
          options={({ navigation }) => ({
            headerTitle: () => (
              <View style={styles.navbar}>
                <Text
                  style={[
                    styles.title,
                    { color: Theme.colorTheme ? 'white' : 'black' },
                  ]}
                  onPress={() => {
                    navigation.navigate('Calculator', { mode: 'base' });
                  }}
                >
                  基础
                </Text>
                <Text
                  style={[
                    styles.titleRight,
                    { color: Theme.colorTheme ? 'white' : 'black' },
                  ]}
                  onPress={() => {
                    navigation.navigate('Calculator', { mode: 'scientific' });
                  }}
                >
                  科学
                </Text>
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="ExchangeRate"
          component={ExchangeRate}
          options={{
            title: '汇率换算',
          }}
        />
        <Stack.Screen
          name="HousingLoan"
          component={HousingLoan}
          options={{
            title: '房贷计算',
          }}
        />
        <Stack.Screen
          name="UnitConversion"
          component={UnitConversion}
          options={{
            title: '单位换算',
          }}
        />
        <Stack.Screen
          name="DecimalConversion"
          component={DecimalConversion}
          options={{
            title: '进制转换',
          }}
        />
        <Stack.Screen
          name="Sixteen"
          component={Sixteen}
          options={{
            title: '十六进制计算',
          }}
        />
        <Stack.Screen
          name="Length"
          component={Length}
          options={{
            title: '长度单位',
          }}
        />
        <Stack.Screen
          name="Area"
          component={Area}
          options={{
            title: '面积单位',
          }}
        />
        <Stack.Screen
          name="Time"
          component={Time}
          options={{
            title: '时间单位',
          }}
        />
        <Stack.Screen
          name="Weight"
          component={Weight}
          options={{
            title: '重量单位',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
