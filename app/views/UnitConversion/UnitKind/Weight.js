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

const Weight = () => {
  //units
  //公制
  const [haoke, sethaoke] = useState('');
  const [ke, setke] = useState('');
  const [qianke, setqianke] = useState('');
  const [dun, setdun] = useState('');
  //英制
  const [bang, setbang] = useState('');
  const [angsi, setangsi] = useState('');
  const [kela, setkela] = useState('');
  //市制
  const [dan, setdan] = useState('');
  const [jin, setjin] = useState('');
  const [liang, setliang] = useState('');

  //flag
  //公制
  const [flaghaoke, setflaghaoke] = useState(true);
  const [flagke, setflagke] = useState(true);
  const [flagqianke, setflagqianke] = useState(false);
  const [flagdun, setflagdun] = useState(true);
  //英制
  const [flagbang, setflagbang] = useState(true);
  const [flagangsi, setflagangsi] = useState(true);
  const [flagkela, setflagkela] = useState(true);
  //市制
  const [flagdan, setflagdan] = useState(true);
  const [flagjin, setflagjin] = useState(true);
  const [flagliang, setflagliang] = useState(true);

  function simplify(indexqianke) {
    //公制
    indexqianke = (indexqianke * 1).toFixed(2);
    let indexhaoke = (indexqianke * 1000000).toFixed(2);
    let indexke = (indexqianke * 1000).toFixed(2);
    let indexdun = (indexqianke * 0.001).toFixed(2);
    //英制
    let indexbang = (indexqianke * 2.2046226).toFixed(2);
    let indexangsi = (indexqianke * 35.2739619).toFixed(2);
    let indexkela = (indexqianke * 5000).toFixed(2);
    //市制
    let indexdan = (indexqianke * 0.02).toFixed(2);
    let indexjin = (indexqianke * 2).toFixed(2);
    let indexliang = (indexqianke * 20).toFixed(2);

    //公制
    sethaoke(indexhaoke);
    setke(indexke);
    setqianke(indexqianke);
    setdun(indexdun);
    //英制
    setbang(indexbang);
    setangsi(indexangsi);
    setkela(indexkela);
    //市制
    setdan(indexdan);
    setjin(indexjin);
    setliang(indexliang);
  }
  function Transform(base) {
    //公制
    if (!flaghaoke) {
      let indexqianke = (base / 1000000).toFixed(6);
      simplify(indexqianke);
    }
    if (!flagke) {
      let indexqianke = (base / 1000).toFixed(6);
      simplify(indexqianke);
    }
    if (!flagqianke) {
      let indexqianke = (base * 1).toFixed(6);
      simplify(indexqianke);
    }
    if (!flagdun) {
      let indexqianke = (base * 1000).toFixed(6);
      simplify(indexqianke);
    }
    //英制
    if (!flagbang) {
      let indexqianke = (base * 0.4535924).toFixed(6);
      simplify(indexqianke);
    }
    if (!flagangsi) {
      let indexqianke = (base * 0.0283495).toFixed(6);
      simplify(indexqianke);
    }
    if (!flagkela) {
      let indexqianke = (base * 0.0002).toFixed(6);
      simplify(indexqianke);
    }
    //市制
    if (!flagdan) {
      let indexqianke = (base * 50).toFixed(6);
      simplify(indexqianke);
    }
    if (!flagjin) {
      let indexqianke = (base * 0.5).toFixed(6);
      simplify(indexqianke);
    }
    if (!flagliang) {
      let indexqianke = (base * 0.05).toFixed(6);
      simplify(indexqianke);
    }
  }

  function Clear() {
    //公制
    sethaoke('');
    setke('');
    setqianke('');
    setdun('');
    //英制
    setbang('');
    setangsi('');
    setkela('');
    //市制
    setdan('');
    setjin('');
    setliang('');
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
          <View style={styles.units}>
            {/* 公制 */}
            <Text
              style={[
                styles.unitkinds,
                { color: Theme.colorTheme ? '#a4b0be' : '#636e72' },
              ]}
            >
              公制
            </Text>
            <TouchableOpacity
              onPress={() => {
                if (flaghaoke == true) {
                  //公制
                  setflaghaoke(!flaghaoke);
                  setflagke(true);
                  setflagqianke(true);
                  setflagdun(true);
                  //英制
                  setflagbang(true);
                  setflagangsi(true);
                  setflagkela(true);
                  //市制
                  setflagdan(true);
                  setflagjin(true);
                  setflagliang(true);
                } else {
                  alert('请选择一个单位作为基准单位');
                }
              }}
              style={[
                styles.unitsview,
                {
                  backgroundColor: flaghaoke
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
                  { color: flaghaoke ? '#31A4F0' : 'white' },
                ]}
              >
                毫克: {haoke}
              </Text>
              <Text style={[styles.textright]}>mg</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (flagke == true) {
                  //公制
                  setflaghaoke(true);
                  setflagke(!flagke);
                  setflagqianke(true);
                  setflagdun(true);
                  //英制
                  setflagbang(true);
                  setflagangsi(true);
                  setflagkela(true);
                  //市制
                  setflagdan(true);
                  setflagjin(true);
                  setflagliang(true);
                } else {
                  alert('请选择一个单位作为基准单位');
                }
              }}
              style={[
                styles.unitsview,
                {
                  backgroundColor: flagke
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
                  { color: flagke ? '#31A4F0' : 'white' },
                ]}
              >
                克: {ke}
              </Text>
              <Text style={[styles.textright]}>g</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (flagqianke == true) {
                  //公制
                  setflaghaoke(true);
                  setflagke(true);
                  setflagqianke(!flagqianke);
                  setflagdun(true);
                  //英制
                  setflagbang(true);
                  setflagangsi(true);
                  setflagkela(true);
                  //市制
                  setflagdan(true);
                  setflagjin(true);
                  setflagliang(true);
                } else {
                  alert('请选择一个单位作为基准单位');
                }
              }}
              style={[
                styles.unitsview,
                {
                  backgroundColor: flagqianke
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
                  { color: flagqianke ? '#31A4F0' : 'white' },
                ]}
              >
                千克: {qianke}
              </Text>
              <Text style={[styles.textright]}>kg</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (flagdun == true) {
                  //公制
                  setflaghaoke(true);
                  setflagke(true);
                  setflagqianke(true);
                  setflagdun(!flagdun);
                  //英制
                  setflagbang(true);
                  setflagangsi(true);
                  setflagkela(true);
                  //市制
                  setflagdan(true);
                  setflagjin(true);
                  setflagliang(true);
                } else {
                  alert('请选择一个单位作为基准单位');
                }
              }}
              style={[
                styles.unitsview,
                {
                  backgroundColor: flagdun
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
                  { color: flagdun ? '#31A4F0' : 'white' },
                ]}
              >
                吨: {dun}
              </Text>
              <Text style={[styles.textright]}>t</Text>
            </TouchableOpacity>

            {/* 市制 */}
            <Text
              style={[
                styles.unitkinds,
                { marginTop: 15 },
                { color: Theme.colorTheme ? '#a4b0be' : '#636e72' },
              ]}
            >
              英制
            </Text>
            <TouchableOpacity
              onPress={() => {
                if (flagbang == true) {
                  //公制
                  setflaghaoke(true);
                  setflagke(true);
                  setflagqianke(true);
                  setflagdun(true);
                  //英制
                  setflagbang(!flagbang);
                  setflagangsi(true);
                  setflagkela(true);
                  //市制
                  setflagdan(true);
                  setflagjin(true);
                  setflagliang(true);
                } else {
                  alert('请选择一个单位作为基准单位');
                }
              }}
              style={[
                styles.unitsview,
                {
                  backgroundColor: flagbang
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
                  { color: flagbang ? '#31A4F0' : 'white' },
                ]}
              >
                磅: {bang}
              </Text>
              <Text style={[styles.textright]}>pound</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (flagangsi == true) {
                  //公制
                  setflaghaoke(true);
                  setflagke(true);
                  setflagqianke(true);
                  setflagdun(true);
                  //英制
                  setflagbang(true);
                  setflagangsi(!flagangsi);
                  setflagkela(true);
                  //市制
                  setflagdan(true);
                  setflagjin(true);
                  setflagliang(true);
                } else {
                  alert('请选择一个单位作为基准单位');
                }
              }}
              style={[
                styles.unitsview,
                {
                  backgroundColor: flagangsi
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
                  { color: flagangsi ? '#31A4F0' : 'white' },
                ]}
              >
                盎司: {angsi}
              </Text>
              <Text style={[styles.textright]}>盎司</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (flagkela == true) {
                  //公制
                  setflaghaoke(true);
                  setflagke(true);
                  setflagqianke(true);
                  setflagdun(true);
                  //英制
                  setflagbang(true);
                  setflagangsi(true);
                  setflagkela(!flagkela);
                  //市制
                  setflagdan(true);
                  setflagjin(true);
                  setflagliang(true);
                } else {
                  alert('请选择一个单位作为基准单位');
                }
              }}
              style={[
                styles.unitsview,
                {
                  backgroundColor: flagkela
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
                  { color: flagkela ? '#31A4F0' : 'white' },
                ]}
              >
                克拉: {kela}
              </Text>
              <Text style={[styles.textright]}>Ct</Text>
            </TouchableOpacity>

            {/* 市制 */}
            <Text
              style={[
                styles.unitkinds,
                { marginTop: 15 },
                { color: Theme.colorTheme ? '#a4b0be' : '#636e72' },
              ]}
            >
              市制
            </Text>
            <TouchableOpacity
              onPress={() => {
                if (flagdan == true) {
                  //公制
                  setflaghaoke(true);
                  setflagke(true);
                  setflagqianke(true);
                  setflagdun(true);
                  //英制
                  setflagbang(true);
                  setflagangsi(true);
                  setflagkela(true);
                  //市制
                  setflagdan(!flagdan);
                  setflagjin(true);
                  setflagliang(true);
                } else {
                  alert('请选择一个单位作为基准单位');
                }
              }}
              style={[
                styles.unitsview,
                {
                  backgroundColor: flagdan
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
                  { color: flagdan ? '#31A4F0' : 'white' },
                ]}
              >
                担: {dan}
              </Text>
              <Text style={[styles.textright]}>担</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (flagjin == true) {
                  //公制
                  setflaghaoke(true);
                  setflagke(true);
                  setflagqianke(true);
                  setflagdun(true);
                  //英制
                  setflagbang(true);
                  setflagangsi(true);
                  setflagkela(true);
                  //市制
                  setflagdan(true);
                  setflagjin(!flagjin);
                  setflagliang(true);
                } else {
                  alert('请选择一个单位作为基准单位');
                }
              }}
              style={[
                styles.unitsview,
                {
                  backgroundColor: flagjin
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
                  { color: flagjin ? '#31A4F0' : 'white' },
                ]}
              >
                斤: {jin}
              </Text>
              <Text style={[styles.textright]}>斤</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (flagliang == true) {
                  //公制
                  setflaghaoke(true);
                  setflagke(true);
                  setflagqianke(true);
                  setflagdun(true);
                  //英制
                  setflagbang(true);
                  setflagangsi(true);
                  setflagkela(true);
                  //市制
                  setflagdan(true);
                  setflagjin(true);
                  setflagliang(!flagliang);
                } else {
                  alert('请选择一个单位作为基准单位');
                }
              }}
              style={[
                styles.unitsview,
                {
                  backgroundColor: flagliang
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
                  { color: flagliang ? '#31A4F0' : 'white' },
                ]}
              >
                两: {liang}
              </Text>
              <Text style={[styles.textright]}>两</Text>
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
    backgroundColor: 'white',
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
  unitkinds: {
    fontSize: 20,
    marginBottom: 6,
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

export default Weight;
