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
const BMI = () => {
  const [result, setresult] = useState('');

  function input1(text) {
    Theme.shengao = text;
  }
  function input2(text) {
    Theme.tizhong = text;
  }

  function calculate() {
    let shengao = (Theme.shengao * 1) / 100;
    let tizhong = Theme.tizhong * 1;
    indexresult = (tizhong / (shengao * shengao)).toFixed(2);
    setresult(indexresult);
  }
  function Clear() {
    setresult('');
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
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <View style={styles.valuetop}>
              <Text
                style={[
                  styles.valuetoptext,
                  { color: Theme.colorTheme ? 'white' : 'black' },
                ]}
              >
                身高:
              </Text>
              <TextInput
                style={styles.valuetopinput}
                placeholder="请输入你的身高(cm)"
                eyboardType="number-pad"
                onChangeText={(text) => input1(text)}
              />
            </View>
            <View style={[styles.valuetop, { marginTop: 20 }]}>
              <Text
                style={[
                  styles.valuetoptext,
                  {
                    color: Theme.colorTheme ? 'white' : 'black',
                  },
                ]}
              >
                体重:
              </Text>
              <TextInput
                style={styles.valuetopinput}
                placeholder="请输入你的体重(kg)"
                eyboardType="number-pad"
                onChangeText={(text) => input2(text)}
              />
            </View>
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
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Text
              style={[
                styles.result,
                { color: Theme.colorTheme ? 'white' : 'black' },
              ]}
            >
              您的BMI结果为: {result}
            </Text>
          </View>
          {/* <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={styles.result}>您的身体状况: {ststus}</Text>
          </View> */}
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
    justifyContent: 'flex-start',
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
  valuetopbtn: {
    backgroundColor: 'red',
    padding: 5,
    width: 75,
    height: 45,
    borderRadius: 10,
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
  btnText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 12,
  },
  result: {
    fontSize: 25,
    marginTop: 30,
  },
});

export default BMI;
