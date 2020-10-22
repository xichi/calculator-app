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
const Speed = () => {
  const [ms, setms] = useState('');
  const [kms, setkms] = useState('');
  const [kmh, setkmh] = useState('');
  const [guang, setguang] = useState('');
  const [mahe, setmahe] = useState('');
  const [flagms, setflagms] = useState(true);
  const [flagkms, setflagkms] = useState(true);
  const [flagkmh, setflagkmh] = useState(false);
  const [flagguang, setflagguang] = useState(true);
  const [flagmahe, setflagmahe] = useState(true);

  function simplify(indexkmh) {
    indexkmh = (indexkmh * 1).toFixed(2);
    let indexms = (indexkmh / 3.6).toFixed(2);
    let indexkms = (indexkmh / 3600).toFixed(2);
    let indexguang = (indexkmh / 299792.458).toFixed(2);
    let indexmahe = (indexkmh * 0.0008163).toFixed(2);
    setms(indexms);
    setkms(indexkms);
    setkmh(indexkmh);
    setguang(indexguang);
    setmahe(indexmahe);
  }

  function Transform(base) {
    if (!flagms) {
      let indexkmh = (base * 3.6).toFixed(6);
      simplify(indexkmh);
    }
    if (!flagkms) {
      let indexkmh = (base * 3600).toFixed(6);
      simplify(indexkmh);
    }
    if (!flagkmh) {
      let indexkmh = (base * 1).toFixed(6);
      simplify(indexkmh);
    }
    if (!flagguang) {
      let indexkmh = (base * 299792.458).toFixed(6);
      simplify(indexkmh);
    }
    if (!flagmahe) {
      let indexkmh = (base * 1225.08).toFixed(6);
      simplify(indexkmh);
    }
  }

  function Clear() {
    setms('');
    setkms('');
    setkmh('');
    setguang('');
    setmahe('');
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
                if (flagms == true) {
                  setflagms(!flagms);
                  setflagkms(true);
                  setflagkmh(true);
                  setflagguang(true);
                  setflagmahe(true);
                } else {
                  alert('请选择一个单位作为基准单位');
                }
              }}
              style={[
                styles.unitsview,
                {
                  backgroundColor: flagms
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
                  { color: flagms ? '#31A4F0' : 'white' },
                ]}
              >
                米/秒: {ms}
              </Text>
              <Text style={styles.textright}>m / s</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (flagkms == true) {
                  setflagms(true);
                  setflagkms(!flagkms);
                  setflagkmh(true);
                  setflagguang(true);
                  setflagmahe(true);
                } else {
                  alert('请选择一个单位作为基准单位');
                }
              }}
              style={[
                styles.unitsview,
                {
                  backgroundColor: flagkms
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
                  { color: flagkms ? '#31A4F0' : 'white' },
                ]}
              >
                千米/秒: {kms}
              </Text>
              <Text style={styles.textright}>km / s</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (flagkmh == true) {
                  setflagms(true);
                  setflagkms(true);
                  setflagkmh(!flagkmh);
                  setflagguang(true);
                  setflagmahe(true);
                } else {
                  alert('请选择一个单位作为基准单位');
                }
              }}
              style={[
                styles.unitsview,
                {
                  backgroundColor: flagkmh
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
                  { color: flagkmh ? '#31A4F0' : 'white' },
                ]}
              >
                千米/时: {kmh}
              </Text>
              <Text style={styles.textright}>km / h</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (flagguang == true) {
                  setflagms(true);
                  setflagkms(true);
                  setflagkmh(true);
                  setflagguang(!flagguang);
                  setflagmahe(true);
                } else {
                  alert('请选择一个单位作为基准单位');
                }
              }}
              style={[
                styles.unitsview,
                {
                  backgroundColor: flagguang
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
                  { color: flagguang ? '#31A4F0' : 'white' },
                ]}
              >
                光速: {guang}
              </Text>
              <Text style={styles.textright}>c</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (flagmahe == true) {
                  setflagms(true);
                  setflagkms(true);
                  setflagkmh(true);
                  setflagguang(true);
                  setflagmahe(!flagmahe);
                } else {
                  alert('请选择一个单位作为基准单位');
                }
              }}
              style={[
                styles.unitsview,
                {
                  backgroundColor: flagmahe
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
                  { color: flagmahe ? '#31A4F0' : 'white' },
                ]}
              >
                马赫: {mahe}
              </Text>
              <Text style={styles.textright}>Ma</Text>
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

export default Speed;
