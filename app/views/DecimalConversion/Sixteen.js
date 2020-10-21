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
const Sixteen = () => {
  const [add, setadd] = useState('');
  const [sub, setsub] = useState('');
  const [mul, setmul] = useState('');
  const [div, setdiv] = useState('');
  const [sympol, setsympol] = useState('+');
  const [flagadd, setflagadd] = useState(false);
  const [flagsub, setflagsub] = useState(true);
  const [flagmul, setflagmul] = useState(true);
  const [flagdiv, setflagdiv] = useState(true);

  function calculate() {
    if (!flagadd) {
      let result = parseInt(Theme.input1, 16) + parseInt(Theme.input2, 16);
      result = result.toString(16);
      setadd(result);
    }
    if (!flagsub) {
      let result = parseInt(Theme.input1, 16) - parseInt(Theme.input2, 16);
      result = result.toString(16);
      setsub(result);
    }
    if (!flagmul) {
      let result = parseInt(Theme.input1, 16) * parseInt(Theme.input2, 16);
      result = result.toString(16);
      setmul(result);
    }
    if (!flagdiv) {
      let result = parseInt(Theme.input1, 16) / parseInt(Theme.input2, 16);
      result = result.toString(16);
      setdiv(result);
    }
  }

  function Input1(text) {
    Theme.input1 = text;
  }
  function Input2(text) {
    Theme.input2 = text;
  }

  function Clear() {
    setadd('');
    setsub('');
    setmul('');
    setdiv('');
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
          <View>
            <View style={styles.topinput}>
              <TextInput
                style={styles.valuetopinput1}
                placeholder="请输入十六进制数"
                onChangeText={(text) => Input1(text)}
              />
              <Text
                style={{
                  color: Theme.colorTheme ? '#a4b0be' : '#636e72',
                  fontWeight: '700',
                  fontSize: 30,
                }}
              >
                {sympol}
              </Text>
              <TextInput
                style={styles.valuetopinput2}
                placeholder="请输入十六进制数"
                onChangeText={(text) => Input2(text)}
              />
            </View>
            <View style={styles.btns}>
              <TouchableOpacity
                style={styles.valuetopbtn1}
                onPress={function () {
                  calculate();
                }}
              >
                <Text style={styles.btnText}>计算</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.valuetopbtn2} onPress={Clear}>
                <Text style={styles.btnText}>重置</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.units]}>
            <TouchableOpacity
              onPress={() => {
                if (flagadd == true) {
                  setflagadd(!flagadd);
                  setflagsub(true);
                  setflagmul(true);
                  setflagdiv(true);
                  setsympol('+');
                } else {
                  alert('请选择一个单位作为基准单位');
                }
              }}
              style={[
                styles.unitsview,
                {
                  backgroundColor: flagadd
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
                  { color: flagadd ? '#31A4F0' : 'white' },
                ]}
              >
                加法结果: {add}
              </Text>
              <Text
                style={[
                  styles.textright,
                  { color: flagadd ? '#31A4F0' : 'white' },
                ]}
              >
                +
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (flagsub == true) {
                  setflagadd(true);
                  setflagsub(!flagsub);
                  setflagmul(true);
                  setflagdiv(true);
                  setsympol('-');
                } else {
                  alert('请选择一个单位作为基准单位');
                }
              }}
              style={[
                styles.unitsview,
                {
                  backgroundColor: flagsub
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
                  { color: flagsub ? '#31A4F0' : 'white' },
                ]}
              >
                减法结果: {sub}
              </Text>
              <Text
                style={[
                  styles.textright,
                  { color: flagsub ? '#31A4F0' : 'white' },
                ]}
              >
                -
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (flagmul == true) {
                  setflagadd(true);
                  setflagsub(true);
                  setflagmul(!flagmul);
                  setflagdiv(true);
                  setsympol('x');
                } else {
                  alert('请选择一个单位作为基准单位');
                }
              }}
              style={[
                styles.unitsview,
                {
                  backgroundColor: flagmul
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
                  { color: flagmul ? '#31A4F0' : 'white' },
                ]}
              >
                乘法结果: {mul}
              </Text>
              <Text
                style={[
                  styles.textright,
                  { color: flagmul ? '#31A4F0' : 'white' },
                ]}
              >
                x
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (flagdiv == true) {
                  setflagadd(true);
                  setflagsub(true);
                  setflagmul(true);
                  setflagdiv(!flagdiv);
                  setsympol('/');
                } else {
                  alert('请选择一个单位作为基准单位');
                }
              }}
              style={[
                styles.unitsview,
                {
                  backgroundColor: flagdiv
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
                  { color: flagdiv ? '#31A4F0' : 'white' },
                ]}
              >
                除法结果: {div}
              </Text>
              <Text
                style={[
                  styles.textright,
                  { color: flagdiv ? '#31A4F0' : 'white' },
                ]}
              >
                /
              </Text>
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
  topinput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  valuetopinput1: {
    flex: 1,
    height: 45,
    padding: 10,
    fontSize: 15,
    backgroundColor: '#EEEEEE',
    borderRadius: 10,
    color: '#111',
    fontWeight: '500',
    marginRight: 20,
  },
  valuetopinput2: {
    flex: 1,
    height: 45,
    padding: 10,
    fontSize: 15,
    backgroundColor: '#EEEEEE',
    borderRadius: 10,
    color: '#111',
    fontWeight: '500',
    marginLeft: 20,
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
  },
  btnText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 12,
  },
});

export default Sixteen;
