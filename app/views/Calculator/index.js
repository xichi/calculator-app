import { Item } from 'native-base';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Pi, E } from '../../constants';
import Theme from '../../variables';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  exp: {
    flexGrow: 1,
    position: 'relative',
    paddingRight: 30,
    paddingTop: 15,
  },
  expText: {
    textAlign: 'right',
    fontSize: 50,
    position: 'absolute',
    bottom: 15,
    right: 15,
  },
  board: {
    flexShrink: 0,
  },
});

function Calculator({ route, navigation }) {
  const { mode } = route.params;
  const [exp, setExp] = useState('');

  const updateExp = (item) => {
    setExp(item);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.exp}>
        <Text
          style={[
            styles.expText,
            { color: Theme.colorTheme ? 'white' : 'black' },
          ]}
        >
          {exp}
        </Text>
      </View>
      <View style={styles.board}>
        {mode === 'scientific' ? (
          <ScientificCalculator />
        ) : (
          <BaseCalculator updateExp={updateExp} />
        )}
      </View>
    </SafeAreaView>
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
    height: 80,
    lineHeight: 80,
    fontSize: 25,
    textAlign: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#e8e8e8',
  },
  equal: {
    color: '#fff',
    backgroundColor: '#ffa931',
  },
});

const equal = StyleSheet.compose(baseStyles.item, baseStyles.equal);

function BaseCalculator(props) {
  const [exp, setExp] = useState('');
  const [flag, setFlag] = useState(false); // is finished
  const [result, setResult] = useState('');

  useEffect(() => {
    props.updateExp(exp);
  }, [exp, props]);

  const DATA = [
    ['AC', '()', 'e', '☒'],
    ['x²', '√', 'π', '/'],
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

  const getExp = (item, temp) => {
    switch (item) {
      case 'AC':
        return '';
      case '=':
        // auto fix: 8e -> 8*e
        temp = temp.replace(/(\w+)\*?π/gi, '$1' + '*' + Math.PI);
        temp = temp.replace(/(\w+)\*?e/gi, '$1' + '*' + E);
        temp = temp.replace(/(\w+)\*?\(/gi, '$1' + '*(');
        // 替换e、π的值：5e-5
        temp = temp.replace(/π/gi, Pi);
        temp = temp.replace(/e/gi, E);
        const temp_eval = eval(temp) + '';
        temp = exp + '\n' + '= ' + temp_eval;
        setResult(temp_eval);
        setFlag(true);
        return temp;
      case '☒':
        return temp.substr(0, temp.length - 1);
      case '()':
        const count = getCharCount(temp, '[(]') - getCharCount(temp, '[)]');
        const lastChar = temp.slice(temp.length - 1, temp.length);
        return count === 0 || lastChar === '('
          ? temp.concat('(')
          : temp.concat(')');
      case '%':
        const numStr = getLatestNum(temp);
        const percentage = numStr / 100;
        return temp.slice(0, temp.length - numStr.length) + percentage;
      case 'x²':
        const numStr1 = getLatestNum(temp);
        const square = Math.pow(numStr1, 2).toFixed(5);
        return temp.slice(0, temp.length - numStr1.length) + square;
      case '√':
        const numStr2 = getLatestNum(temp);
        const squareRoot = Math.sqrt(numStr2).toFixed(5);
        return temp.slice(0, temp.length - numStr2.length) + squareRoot;
      default:
        return temp.concat(item);
    }
  };

  const compute = (item) => {
    let temp = exp;

    if (flag) {
      if (item === '=') return;
      setFlag(false);
      temp = !isNaN(item) || item === 'e' || item === 'π' ? '' : result;
    }

    try {
      temp = getExp(item, temp);
    } catch {
      temp = 'ERROR';
      setFlag(true);
    } finally {
      setExp(temp);
    }
  };

  return (
    <View>
      {DATA.map((line, lineIndex) => (
        <View style={baseStyles.line} key={`line-${lineIndex}`}>
          {line.map((item, itemIndex) => (
            <Text
              style={[
                { backgroundColor: Theme.colorTheme ? 'black' : 'white' },
                { color: Theme.colorTheme ? '#ffa931' : 'black' },
                item === '=' ? equal : baseStyles.item,
              ]}
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
