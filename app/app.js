// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';

// routes
import Dashboard from './views/Dashboard';
import Calculator from './views/Calculator';

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  navbar: { display: 'flex', flexDirection: 'row' },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  titleRight: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 20,
  },
});

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard" headerMode="screen">
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            title: '全能计算器',
          }}
        />
        <Stack.Screen
          name="Calculator"
          component={Calculator}
          initialParams={{ mode: 'base' }}
          options={({ navigation }) => ({
            headerTitle: () => (
              <View style={styles.navbar}>
                <Text
                  style={styles.title}
                  onPress={() => {
                    navigation.navigate('Calculator', { mode: 'base' });
                  }}
                >
                  基础
                </Text>
                <Text
                  style={styles.titleRight}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
