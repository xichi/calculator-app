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
const Length = () => {
  const [mm, setmm] = useState('');
  const [cm, setcm] = useState('');
  const [dm, setdm] = useState('');
  const [m, setm] = useState('');
  const [km, setkm] = useState('');
  const [foot, setfoot] = useState('');
  const [inch, setinch] = useState('');
  const [flagmm, setflagmm] = useState(true);
  const [flagcm, setflagcm] = useState(true);
  const [flagdm, setflagdm] = useState(true);
  const [flagm, setflagm] = useState(false);
  const [flagkm, setflagkm] = useState(true);
  const [flagfoot, setflagfoot] = useState(true);
  const [flaginch, setflaginch] = useState(true);

  function simplify(indexm) {
    indexm = (indexm * 1).toFixed(2);
    let indexmm = (indexm * 1000).toFixed(2);
    let indexcm = (indexm * 100).toFixed(2);
    let indexdm = (indexm * 10).toFixed(2);
    let indexkm = (indexm / 1000).toFixed(2);
    let indexinch = (indexm * 39.3700787).toFixed(2);
    let indexfoot = (indexm * 3.2808399).toFixed(2);
    setmm(indexmm);
    setcm(indexcm);
    setdm(indexdm);
    setm(indexm);
    setkm(indexkm);
    setinch(indexinch);
    setfoot(indexfoot);
  }

  function Transform(base) {
    if (!flagmm) {
      let indexm = (base / 1000).toFixed(6);
      simplify(indexm);
    }
    if (!flagcm) {
      let indexm = (base / 100).toFixed(6);
      simplify(indexm);
    }
    if (!flagdm) {
      let indexm = (base / 10).toFixed(6);
      simplify(indexm);
    }
    if (!flagm) {
      let indexm = (base * 1).toFixed(6);
      simplify(indexm);
    }
    if (!flagkm) {
      let indexm = (base * 1000).toFixed(6);
      simplify(indexm);
    }
    if (!flagfoot) {
      let indexm = (base * 0.3048).toFixed(6);
      simplify(indexm);
    }
    if (!flaginch) {
      let indexm = (base * 0.0254).toFixed(6);
      simplify(indexm);
    }
  }

  function Clear() {
    setmm('');
    setcm('');
    setdm('');
    setm('');
    setkm('');
    setfoot('');
    setinch('');
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
                if (flagmm == true) {
                  setflagmm(!flagmm);
                  setflagcm(true);
                  setflagdm(true);
                  setflagm(true);
                  setflagkm(true);
                  setflagfoot(true);
                  setflaginch(true);
                } else {
                  alert('请选择一个单位作为基准单位');
                }
              }}
              style={[
                styles.unitsview,
                {
                  backgroundColor: flagmm
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
                  { color: flagmm ? '#31A4F0' : 'white' },
                ]}
              >
                毫米: {mm}
              </Text>
              <Text style={styles.textright}>mm</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (flagcm == true) {
                  setflagmm(true);
                  setflagcm(!flagcm);
                  setflagdm(true);
                  setflagm(true);
                  setflagkm(true);
                  setflagfoot(true);
                  setflaginch(true);
                } else {
                  alert('请选择一个单位作为基准单位');
                }
              }}
              style={[
                styles.unitsview,
                {
                  backgroundColor: flagcm
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
                  { color: flagcm ? '#31A4F0' : 'white' },
                ]}
              >
                厘米: {cm}
              </Text>
              <Text style={styles.textright}>cm</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (flagdm == true) {
                  setflagmm(true);
                  setflagcm(true);
                  setflagdm(!flagdm);
                  setflagm(true);
                  setflagkm(true);
                  setflagfoot(true);
                  setflaginch(true);
                } else {
                  alert('请选择一个单位作为基准单位');
                }
              }}
              style={[
                styles.unitsview,
                {
                  backgroundColor: flagdm
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
                  { color: flagdm ? '#31A4F0' : 'white' },
                ]}
              >
                分米: {dm}
              </Text>
              <Text style={styles.textright}>dm</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (flagm == true) {
                  setflagmm(true);
                  setflagcm(true);
                  setflagdm(true);
                  setflagm(!flagm);
                  setflagkm(true);
                  setflagfoot(true);
                  setflaginch(true);
                } else {
                  alert('请选择一个单位作为基准单位');
                }
              }}
              style={[
                styles.unitsview,
                {
                  backgroundColor: flagm
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
                  { color: flagm ? '#31A4F0' : 'white' },
                ]}
              >
                米: {m}
              </Text>
              <Text style={styles.textright}>m</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (flagkm == true) {
                  setflagmm(true);
                  setflagcm(true);
                  setflagdm(true);
                  setflagm(true);
                  setflagkm(!flagkm);
                  setflagfoot(true);
                  setflaginch(true);
                } else {
                  alert('请选择一个单位作为基准单位');
                }
              }}
              style={[
                styles.unitsview,
                {
                  backgroundColor: flagkm
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
                  { color: flagkm ? '#31A4F0' : 'white' },
                ]}
              >
                千米: {km}
              </Text>
              <Text style={styles.textright}>km</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (flagfoot == true) {
                  setflagmm(true);
                  setflagcm(true);
                  setflagdm(true);
                  setflagm(true);
                  setflagkm(true);
                  setflagfoot(!flagfoot);
                  setflaginch(true);
                } else {
                  alert('请选择一个单位作为基准单位');
                }
              }}
              style={[
                styles.unitsview,
                {
                  backgroundColor: flagfoot
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
                  { color: flagfoot ? '#31A4F0' : 'white' },
                ]}
              >
                英尺: {foot}
              </Text>
              <Text style={styles.textright}>foot</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (flaginch == true) {
                  setflagmm(true);
                  setflagcm(true);
                  setflagdm(true);
                  setflagm(true);
                  setflagkm(true);
                  setflagfoot(true);
                  setflaginch(!flaginch);
                } else {
                  alert('请选择一个单位作为基准单位');
                }
              }}
              style={[
                styles.unitsview,
                {
                  backgroundColor: flaginch
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
                  { color: flaginch ? '#31A4F0' : 'white' },
                ]}
              >
                英寸: {inch}
              </Text>
              <Text style={styles.textright}>inch</Text>
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

export default Length;
