import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import Theme from '../../variables';
const DecimalConversion = ({ navigation }) => {
  const [two, settwo] = useState('');
  const [eight, seteight] = useState('');
  const [ten, setten] = useState('');
  const [sixteen, setsixteen] = useState('');
  const [flagtwo, setflagtwo] = useState(true);
  const [flageight, setflageight] = useState(true);
  const [flagten, setflagten] = useState(false);
  const [flagsixteen, setflagsixteen] = useState(true);

  function simplify(indexten) {
    let indextwo = indexten.toString(2);
    let indexeight = indexten.toString(8);
    let indexsixteen = indexten.toString(16);
    settwo(indextwo);
    seteight(indexeight);
    setten(indexten);
    setsixteen(indexsixteen);
  }
  function setnum(text) {
    Theme.num = text;
  }

  function Transform(base) {
    if (!flagtwo) {
      let indexten = parseInt(base, 2);
      simplify(indexten);
    }
    if (!flageight) {
      let indexten = parseInt(base, 8);
      simplify(indexten);
    }
    if (!flagten) {
      let indexten = parseInt(base, 10);
      simplify(indexten);
    }
    if (!flagsixteen) {
      let indexten = parseInt(base, 16);
      simplify(indexten);
    }
  }

  function Clear() {
    settwo('');
    seteight('');
    setten('');
    setsixteen('');
  }
  return (
    <ScrollView>
      <KeyboardAvoidingView>
        <View
          style={[
            styles.body,
            { backgroundColor: Theme.colorTheme ? 'black' : 'white' },
          ]}
        >
          <View style={styles.valuetop}>
            <Text
              style={[
                styles.valuetoptext,
                { color: Theme.colorTheme ? 'white' : 'black' },
              ]}
            >
              数值:{' '}
            </Text>
            <TextInput
              style={styles.valuetopinput}
              placeholder="请输入数值"
              eyboardType="number-pad"
              onChangeText={(text) => setnum(text)}
            />
          </View>
          <View style={styles.btns}>
            <TouchableOpacity
              style={styles.valuetopbtn1}
              onPress={function () {
                Transform(Theme.num);
              }}
            >
              <Text style={styles.btnText}>转换</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.valuetopbtn2} onPress={Clear}>
              <Text style={styles.btnText}>重置</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.units]}>
            <TouchableOpacity
              onPress={() => {
                if (flagtwo == true) {
                  setflagtwo(!flagtwo);
                  setflageight(true);
                  setflagten(true);
                  setflagsixteen(true);
                } else {
                  alert('请选择一个单位作为基准单位');
                }
              }}
              style={[
                styles.unitsview,
                {
                  backgroundColor: flagtwo
                    ? Theme.colorTheme
                      ? '#222'
                      : 'white'
                    : '#5050F3',
                },
              ]}
            >
              <Text
                style={[
                  styles.textleft,
                  { color: flagtwo ? '#31A4F0' : 'white' },
                ]}
              >
                二进制: {two}
              </Text>
              <Text style={[styles.textright]}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (flageight == true) {
                  setflagtwo(true);
                  setflageight(!flageight);
                  setflagten(true);
                  setflagsixteen(true);
                } else {
                  alert('请选择一个单位作为基准单位');
                }
              }}
              style={[
                styles.unitsview,
                {
                  backgroundColor: flageight
                    ? Theme.colorTheme
                      ? '#222'
                      : 'white'
                    : '#5050F3',
                },
              ]}
            >
              <Text
                style={[
                  styles.textleft,
                  { color: flageight ? '#31A4F0' : 'white' },
                ]}
              >
                八进制: {eight}
              </Text>
              <Text style={[styles.textright]}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (flagten == true) {
                  setflagtwo(true);
                  setflageight(true);
                  setflagten(!flagten);
                  setflagsixteen(true);
                } else {
                  alert('请选择一个单位作为基准单位');
                }
              }}
              style={[
                styles.unitsview,
                {
                  backgroundColor: flagten
                    ? Theme.colorTheme
                      ? '#222'
                      : 'white'
                    : '#5050F3',
                },
              ]}
            >
              <Text
                style={[
                  styles.textleft,
                  { color: flagten ? '#31A4F0' : 'white' },
                ]}
              >
                十进制: {ten}
              </Text>
              <Text style={[styles.textright]}>10</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (flagsixteen == true) {
                  setflagtwo(true);
                  setflageight(true);
                  setflagten(true);
                  setflagsixteen(!flagsixteen);
                } else {
                  alert('请选择一个单位作为基准单位');
                }
              }}
              style={[
                styles.unitsview,
                {
                  backgroundColor: flagsixteen
                    ? Theme.colorTheme
                      ? '#222'
                      : 'white'
                    : '#5050F3',
                },
              ]}
            >
              <Text
                style={[
                  styles.textleft,
                  { color: flagsixteen ? '#31A4F0' : 'white' },
                ]}
              >
                十六进制: {sixteen}
              </Text>
              <Text style={[styles.textright]}>16</Text>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              marginTop: 30,
              color: Theme.colorTheme ? '#a4b0be' : '#636e72',
              fontSize: 17,
            }}
          >
            点击进入下方按钮进入十六进制计算
          </Text>
          <View style={styles.bottom}>
            <TouchableOpacity
              style={[
                styles.bottombtn,
                { backgroundColor: Theme.colorTheme ? '#2d3436' : '#f5f6fa' },
              ]}
              onPress={() => navigation.navigate('Sixteen')}
            >
              <Text style={[styles.bottombtnText]}>Get it!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    padding: 15,
  },
  valuetop: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
  },
  valuetoptext: {
    flex: 1,
    fontSize: 30,
    fontWeight: '700',
    marginTop: 3,
  },
  valuetopinput: {
    flex: 3,
    width: 185,
    height: 45,
    padding: 10,
    fontSize: 18,
    backgroundColor: '#EEEEEE',
    borderRadius: 10,
    color: '#111',
    fontWeight: '500',
  },
  btns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
    marginTop: 20,
  },
  valuetopbtn1: {
    flex: 1,
    backgroundColor: '#ffa502',
    padding: 5,
    width: 75,
    height: 60,
    borderRadius: 10,
    marginLeft: 25,
    marginRight: 40,
  },
  valuetopbtn2: {
    flex: 1,
    backgroundColor: 'red',
    padding: 5,
    width: 75,
    height: 60,
    borderRadius: 10,
    marginLeft: 40,
    marginRight: 25,
  },
  units: {
    flexDirection: 'column',
    alignItems: 'stretch',
    marginTop: 20,
  },
  unitsview: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderStyle: 'solid',
    borderBottomColor: '#CCCCCC',
    borderBottomWidth: 0.6,
    paddingTop: 5,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 10,
    marginTop: 5,
    borderRadius: 12,
  },
  textleft: {
    height: 30,
    marginTop: 8,
    fontSize: 23,
    fontWeight: '600',
  },
  textright: {
    height: 30,
    marginTop: 8,
    fontSize: 23,
    fontWeight: '600',
    color: '#bdc3c7',
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  bottombtn: {
    padding: 5,
    width: 200,
    height: 60,
    borderRadius: 10,
    marginTop: 50,
  },
  btnText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 13,
  },
  bottombtnText: {
    fontSize: 26,
    color: '#00a8ff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default DecimalConversion;
