import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, SafeAreaView } from 'react-native';
import Theme from '../../variables';

function Plural() {
  // 乘法
  const [a1, onChangeA1] = useState('1');
  const [b1, onChangeB1] = useState('1');
  const [c1, onChangeC1] = useState('1');
  const [d1, onChangeD1] = useState('1');
  // 除法
  const [a2, onChangeA2] = useState('1');
  const [b2, onChangeB2] = useState('1');
  const [c2, onChangeC2] = useState('1');
  const [d2, onChangeD2] = useState('1');
  // 结果
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');

  useEffect(() => {
    const result = `${a1 * c1 - b1 * d1}+${b1 * c1 + a1 * d1}*i`;
    setValue1(result);
  }, [a1, b1, c1, d1]);

  useEffect(() => {
    const result = `${
      (a2 * c2 + b2 * d2) / (Math.pow(c2, 2) + Math.pow(d2, 2))
    }+${(b2 * c2 - a2 * d2) / (Math.pow(c2, 2) + Math.pow(d2, 2))}*i`;
    setValue2(result);
  }, [a2, b2, c2, d2]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={{ color: Theme.colorTheme ? 'white' : 'black' }}>
          复数乘法 [ (a+bi) × (c+di) ]
        </Text>
        <View style={[styles.line, { justifyContent: 'space-around' }]}>
          <View style={styles.item}>
            <Text style={{ color: Theme.colorTheme ? 'white' : 'black' }}>
              a:
            </Text>
            <TextInput
              keyboardType="numeric"
              style={styles.TextInput}
              onChangeText={(text) => onChangeA1(text)}
              value={a1}
            />
          </View>
          <View style={styles.item}>
            <Text style={{ color: Theme.colorTheme ? 'white' : 'black' }}>
              b:
            </Text>
            <TextInput
              keyboardType="numeric"
              style={styles.TextInput}
              onChangeText={(text) => onChangeB1(text)}
              value={b1}
            />
          </View>
        </View>
        <View style={[styles.line, { justifyContent: 'space-around' }]}>
          <View style={styles.item}>
            <Text style={{ color: Theme.colorTheme ? 'white' : 'black' }}>
              c:
            </Text>
            <TextInput
              keyboardType="numeric"
              style={styles.TextInput}
              onChangeText={(text) => onChangeC1(text)}
              value={c1}
            />
          </View>
          <View style={styles.item}>
            <Text style={{ color: Theme.colorTheme ? 'white' : 'black' }}>
              d:
            </Text>
            <TextInput
              keyboardType="numeric"
              style={styles.TextInput}
              onChangeText={(text) => onChangeD1(text)}
              value={d1}
            />
          </View>
        </View>
        <View style={[styles.line, { justifyContent: 'space-around' }]}>
          <Text style={{ color: Theme.colorTheme ? 'white' : 'black' }}>
            乘法:
          </Text>
          <Text
            style={[
              styles.TextInput,
              { width: 220, backgroundColor: '#FFFFEE' },
            ]}
          >
            {value1}
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ color: Theme.colorTheme ? 'white' : 'black' }}>
          复数除法 [ (a+bi) / (c+di) ]
        </Text>
        <View style={[styles.line, { justifyContent: 'space-around' }]}>
          <View style={styles.item}>
            <Text style={{ color: Theme.colorTheme ? 'white' : 'black' }}>
              a:
            </Text>
            <TextInput
              keyboardType="numeric"
              style={styles.TextInput}
              onChangeText={(text) => onChangeA2(text)}
              value={a2}
            />
          </View>
          <View style={{ color: Theme.colorTheme ? 'white' : 'black' }}>
            <Text style={styles.text}>b:</Text>
            <TextInput
              keyboardType="numeric"
              style={styles.TextInput}
              onChangeText={(text) => onChangeB2(text)}
              value={b2}
            />
          </View>
        </View>
        <View style={[styles.line, { justifyContent: 'space-around' }]}>
          <View style={styles.item}>
            <Text style={{ color: Theme.colorTheme ? 'white' : 'black' }}>
              c:
            </Text>
            <TextInput
              keyboardType="numeric"
              style={styles.TextInput}
              onChangeText={(text) => onChangeC2(text)}
              value={c2}
            />
          </View>
          <View style={styles.item}>
            <Text style={{ color: Theme.colorTheme ? 'white' : 'black' }}>
              d:
            </Text>
            <TextInput
              keyboardType="numeric"
              style={styles.TextInput}
              onChangeText={(text) => onChangeD2(text)}
              value={d2}
            />
          </View>
        </View>
        <View style={[styles.line, { justifyContent: 'space-around' }]}>
          <Text style={{ color: Theme.colorTheme ? 'white' : 'black' }}>
            除法:
          </Text>
          <Text
            style={[
              styles.TextInput,
              { width: 220, backgroundColor: '#FFFFEE' },
            ]}
          >
            {value2}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  line: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  item: {
    flexShrink: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  TextInput: {
    width: 100,
    height: 30,
    padding: 6,
    marginLeft: 5,
    borderRadius: 6,
    borderColor: '#333',
    backgroundColor: '#fff',
    borderWidth: 1,
  },
  text: {
    color: '#666',
  },
});

export default Plural;
