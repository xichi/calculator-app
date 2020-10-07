import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

function Calculator({ route, navigation }) {
  const { mode } = route.params;

  return (
    <View>
      {mode === 'scientific' ? <ScientificCalculator /> : <BaseCalculator />}
    </View>
  );
}

const baseStyles = StyleSheet.create({
  line: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    flexShrink: 0,
    width: '25%',
    height: 100,
    lineHeight: 100,
    fontSize: 25,
    textAlign: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#e8e8e8',
    backgroundColor: '#fff',
  },
  equal: {
    color: '#fff',
    backgroundColor: '#ffa931',
  },
});

const equal = StyleSheet.compose(baseStyles.item, baseStyles.equal);

function BaseCalculator() {
  const [exp, setExp] = useState('');

  const DATA = [
    ['AC', '()', '☒', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['%', '0', '.', '='],
  ];

  const getCharCount = (str, char) => {
    var regex = new RegExp(char, 'g');
    var result = str.match(regex);
    var count = !result ? 0 : result.length;
    return count;
  };

  const getLatestNum = (str) => {
    var numArr = str.match(/-?([1-9]\d*(\.\d*)*|0\.[1-9]\d*)/g);
    return numArr.pop();
  };

  const compute = (item) => {
    let temp = exp;
    const getExp = () => {
      switch (item) {
        case 'AC':
          return '';
        case '=':
          return temp + '=' + eval(exp);
        case '☒':
          return temp.substr(0, temp.length - 1);
        case '%':
          const numStr = getLatestNum(temp);
          const percentage = numStr / 100;
          return temp.slice(0, temp.length - numStr.length) + percentage;
        case '()':
          const count = getCharCount(temp, '[(]') - getCharCount(temp, '[)]');
          return count === 0 ? temp.concat('(') : temp.concat(')');
        default:
          return temp.concat(item);
      }
    };
    setExp(getExp);
  };

  return (
    <View>
      <View style={{ height: 180 }}>
        <Text style={{ fontSize: 30 }}>{exp}</Text>
      </View>
      {DATA.map((line, lineIndex) => (
        <View style={baseStyles.line} key={`line-${lineIndex}`}>
          {line.map((item, itemIndex) => (
            <Text
              style={item === '=' ? equal : baseStyles.item}
              key={`${lineIndex}-${itemIndex}`}
              onPress={() => compute(item)}
            >
              {item}
            </Text>
          ))}
        </View>
      ))}
    </View>
  );
}

function ScientificCalculator() {
  const DATA = [
    ['AC', '（）', '☒', '÷'],
    ['7', '8', '9', '*'],
  ];

  return (
    <View>
      <View style={{ height: 180 }} />
      {DATA.map((line, lineIndex) => (
        <View style={baseStyles.line} key={`line-${lineIndex}`}>
          {line.map((item, itemIndex) => (
            <Text
              style={item === '=' ? equal : baseStyles.item}
              key={`${lineIndex}-${itemIndex}`}
            >
              {item}
            </Text>
          ))}
        </View>
      ))}
    </View>
  );
}

export default Calculator;
