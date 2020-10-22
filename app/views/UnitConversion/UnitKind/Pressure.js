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
import Theme from '../../../variables';
const Pressure = () => {
  const [pa, setpa] = useState('');
  const [baipa, setbaipa] = useState('');
  const [qianpa, setqianpa] = useState('');
  const [zhaopa, setzhaopa] = useState('');
  const [daqiya, setdaqiya] = useState('');
  const [mmgongzhu, setmmgongzhu] = useState('');
  const [ba, setba] = useState('');
  const [flagpa, setflagpa] = useState(true);
  const [flagbaipa, setflagbaipa] = useState(true);
  const [flagqianpa, setflagqianpa] = useState(false);
  const [flagzhaopa, setflagzhaopa] = useState(true);
  const [flagdaqiya, setflagdaqiya] = useState(true);
  const [flagmmgongzhu, setflagmmgongzhu] = useState(true);
  const [flagba, setflagba] = useState(true);

  function simplify(indexqianpa) {
    indexqianpa = (indexqianpa * 1).toFixed(2);
    let indexpa = (indexqianpa * 1000).toFixed(2);
    let indexbaipa = (indexqianpa * 10).toFixed(2);
    let indexzhaopa = (indexqianpa * 0.001).toFixed(2);
    let indexdaqiya = (indexqianpa * 0.00987).toFixed(2);
    let indexmmgongzhu = (indexqianpa * 7.5).toFixed(2);
    let indexba = (indexqianpa * 0.01).toFixed(2);
    setpa(indexpa);
    setbaipa(indexbaipa);
    setqianpa(indexqianpa);
    setzhaopa(indexzhaopa);
    setdaqiya(indexdaqiya);
    setmmgongzhu(indexmmgongzhu);
    setba(indexba);
  }

  function Transform(base) {
    if (!flagpa) {
      let indexqianpa = (base / 1000).toFixed(6);
      simplify(indexqianpa);
    }
    if (!flagbaipa) {
      let indexqianpa = (base / 10).toFixed(6);
      simplify(indexqianpa);
    }
    if (!flagzhaopa) {
      let indexqianpa = (base * 1000).toFixed(6);
      simplify(indexqianpa);
    }
    if (!flagqianpa) {
      let indexqianpa = (base * 1).toFixed(6);
      simplify(indexqianpa);
    }
    if (!flagdaqiya) {
      let indexqianpa = (base * 101.325).toFixed(6);
      simplify(indexqianpa);
    }
    if (!flagmmgongzhu) {
      let indexqianpa = (base * 0.133).toFixed(6);
      simplify(indexqianpa);
    }
    if (!flagba) {
      let indexqianpa = (base * 100).toFixed(6);
      simplify(indexqianpa);
    }
  }

  function Clear() {
    setpa('');
    setbaipa('');
    setqianpa('');
    setzhaopa('');
    setdaqiya('');
    setmmgongzhu('');
    setba('');
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
              keyboardType="number-pad"
              onChangeText={(text) => Transform(text)}
            />
            <TouchableOpacity style={styles.valuetopbtn} onPress={Clear}>
              <Text style={styles.btnText}>重置</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.units]}>
            <TouchableOpacity
              onPress={() => {
                if (flagpa == true) {
                  setflagpa(!flagpa);
                  setflagbaipa(true);
                  setflagqianpa(true);
                  setflagzhaopa(true);
                  setflagdaqiya(true);
                  setflagmmgongzhu(true);
                  setflagba(true);
                } else {
                  alert('请选择一个单位作为基准单位');
                }
              }}
              style={[
                styles.unitsview,
                {
                  backgroundColor: flagpa
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
                  { color: flagpa ? '#31A4F0' : 'white' },
                ]}
              >
                帕斯卡: {pa}
              </Text>
              <Text style={styles.textright}>Pa</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (flagbaipa == true) {
                  setflagpa(true);
                  setflagbaipa(!flagbaipa);
                  setflagqianpa(true);
                  setflagzhaopa(true);
                  setflagdaqiya(true);
                  setflagmmgongzhu(true);
                  setflagba(true);
                } else {
                  alert('请选择一个单位作为基准单位');
                }
              }}
              style={[
                styles.unitsview,
                {
                  backgroundColor: flagbaipa
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
                  { color: flagbaipa ? '#31A4F0' : 'white' },
                ]}
              >
                百帕: {baipa}
              </Text>
              <Text style={styles.textright}>hPa</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (flagqianpa == true) {
                  setflagpa(true);
                  setflagbaipa(true);
                  setflagqianpa(!flagqianpa);
                  setflagzhaopa(true);
                  setflagdaqiya(true);
                  setflagmmgongzhu(true);
                  setflagba(true);
                } else {
                  alert('请选择一个单位作为基准单位');
                }
              }}
              style={[
                styles.unitsview,
                {
                  backgroundColor: flagqianpa
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
                  { color: flagqianpa ? '#31A4F0' : 'white' },
                ]}
              >
                千帕: {qianpa}
              </Text>
              <Text style={styles.textright}>kPa</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (flagzhaopa == true) {
                  setflagpa(true);
                  setflagbaipa(true);
                  setflagqianpa(true);
                  setflagzhaopa(!flagzhaopa);
                  setflagdaqiya(true);
                  setflagmmgongzhu(true);
                  setflagba(true);
                } else {
                  alert('请选择一个单位作为基准单位');
                }
              }}
              style={[
                styles.unitsview,
                {
                  backgroundColor: flagzhaopa
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
                  { color: flagzhaopa ? '#31A4F0' : 'white' },
                ]}
              >
                兆帕: {zhaopa}
              </Text>
              <Text style={styles.textright}>MPa</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (flagdaqiya == true) {
                  setflagpa(true);
                  setflagbaipa(true);
                  setflagqianpa(true);
                  setflagzhaopa(true);
                  setflagdaqiya(!flagdaqiya);
                  setflagmmgongzhu(true);
                  setflagba(true);
                } else {
                  alert('请选择一个单位作为基准单位');
                }
              }}
              style={[
                styles.unitsview,
                {
                  backgroundColor: flagdaqiya
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
                  { color: flagdaqiya ? '#31A4F0' : 'white' },
                ]}
              >
                标准大气压: {daqiya}
              </Text>
              <Text style={styles.textright}>atm</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (flagmmgongzhu == true) {
                  setflagpa(true);
                  setflagbaipa(true);
                  setflagqianpa(true);
                  setflagzhaopa(true);
                  setflagdaqiya(true);
                  setflagmmgongzhu(!flagmmgongzhu);
                  setflagba(true);
                } else {
                  alert('请选择一个单位作为基准单位');
                }
              }}
              style={[
                styles.unitsview,
                {
                  backgroundColor: flagmmgongzhu
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
                  { color: flagmmgongzhu ? '#31A4F0' : 'white' },
                ]}
              >
                毫米汞柱: {mmgongzhu}
              </Text>
              <Text style={styles.textright}>mmHg</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (flagba == true) {
                  setflagpa(true);
                  setflagbaipa(true);
                  setflagqianpa(true);
                  setflagzhaopa(true);
                  setflagdaqiya(true);
                  setflagmmgongzhu(true);
                  setflagba(!flagba);
                } else {
                  alert('请选择一个单位作为基准单位');
                }
              }}
              style={[
                styles.unitsview,
                {
                  backgroundColor: flagba
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
                  { color: flagba ? '#31A4F0' : 'white' },
                ]}
              >
                巴: {ba}
              </Text>
              <Text style={styles.textright}>bar</Text>
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
    justifyContent: 'space-around',
  },
  valuetoptext: {
    fontSize: 30,
    fontWeight: '700',
    marginTop: 3,
  },
  valuetopinput: {
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
  btnText: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 7,
  },
});

export default Pressure;
