import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { digitUppercase } from './utils';
import Theme from '../../variables';

function MoneyConversion() {
  const [num, setNum] = useState('0');
  const [upperNum, setUpperNum] = useState(digitUppercase(num));

  useEffect(() => {
    setUpperNum(digitUppercase(num));
  }, [num]);

  const compute = (item) => {
    let temp = num;
    switch (item) {
      case '☒':
        temp = temp.substr(0, temp.length - 1);
        break;
      default:
        if (temp === '0' && item !== '.') {
          temp = '';
        }
        temp = temp.concat(item);
    }
    setNum(temp);
  };

  const DATA = [
    ['7', '8', '9'],
    ['4', '5', '6'],
    ['1', '2', '3'],
    ['0', '.', '☒'],
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.exp}>
        <Text
          ellipsizeMode="tail"
          numberOfLines={1}
          style={[
            styles.expText,
            { color: Theme.colorTheme ? 'white' : 'black' },
          ]}
        >
          {num}
        </Text>
        <View
          style={[
            styles.divider,
            { backgroundColor: Theme.colorTheme ? '#663' : '#cfcfcf' },
          ]}
        />
        <Text
          selectable={true}
          ellipsizeMode="tail"
          numberOfLines={2}
          style={[
            styles.expText,
            { color: Theme.colorTheme ? 'white' : 'black' },
          ]}
        >
          {upperNum}
        </Text>
      </View>
      <View>
        {DATA.map((line, lineIndex) => (
          <View style={styles.line} key={`line-${lineIndex}`}>
            {line.map((item, itemIndex) => (
              <Text
                style={Theme.colorTheme ? darkItem : lightItem}
                key={`${lineIndex}-${itemIndex}`}
                onPress={() => compute(item)}
              >
                {item}
              </Text>
            ))}
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  exp: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  expText: {
    width: '100%',
    fontSize: 50,
    textAlign: 'right',
  },
  divider: {
    width: '100%',
    height: 2,
  },
  line: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexShrink: 0,
  },
  item: {
    flexShrink: 0,
    width: '33%',
    height: 80,
    lineHeight: 80,
    fontSize: 25,
    textAlign: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#e8e8e8',
  },
  dark: {
    color: '#ffa931',
    backgroundColor: '#000',
  },
  light: {
    color: '#000',
    backgroundColor: '#fff',
  },
});

const darkItem = StyleSheet.compose(styles.item, styles.dark);
const lightItem = StyleSheet.compose(styles.item, styles.light);

export default MoneyConversion;
