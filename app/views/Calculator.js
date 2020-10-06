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

  const updateExpression = (e) => {
    console.log(e.target);
    //setExp(exp.concat(item));
  };

  const DATA = [
    ['AC', '（）', '☒', '÷'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['%', '0', '.', '='],
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

function ScientificCalculator() {
  const DATA = [
    ['AC', '（）', '☒', '÷'],
    ['7', '8', '9', 'x'],
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
