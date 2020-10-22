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

const Area = () => {
  //units
  //公制
  const [mm, setmm] = useState('');
  const [cm, setcm] = useState('');
  const [dm, setdm] = useState('');
  const [m, setm] = useState('');
  const [gongmu, setgongmu] = useState('');
  const [gongqin, setgongqin] = useState('');
  const [km, setkm] = useState('');
  //英制
  const [yingmu, setyingmu] = useState('');
  const [yingli, setyingli] = useState('');
  const [ma, setma] = useState('');
  const [foot, setfoot] = useState('');
  const [inch, setinch] = useState('');
  //市制
  const [qin, setqin] = useState('');
  const [mu, setmu] = useState('');
  const [fen, setfen] = useState('');
  const [chi, setchi] = useState('');
  const [cun, setcun] = useState('');

  //flag
  //公制
  const [flagmm, setflagmm] = useState(true);
  const [flagcm, setflagcm] = useState(true);
  const [flagdm, setflagdm] = useState(true);
  const [flagm, setflagm] = useState(false);
  const [flaggongmu, setflaggongmu] = useState(true);
  const [flaggongqin, setflaggongqin] = useState(true);
  const [flagkm, setflagkm] = useState(true);
  //英制
  const [flagyingmu, setflagyingmu] = useState(true);
  const [flagyingli, setflagyingli] = useState(true);
  const [flagma, setflagma] = useState(true);
  const [flagfoot, setflagfoot] = useState(true);
  const [flaginch, setflaginch] = useState(true);
  //市制
  const [flagqin, setflagqin] = useState(true);
  const [flagmu, setflagmu] = useState(true);
  const [flagfen, setflagfen] = useState(true);
  const [flagchi, setflagchi] = useState(true);
  const [flagcun, setflagcun] = useState(true);

  function tohtml(indexm) {
    //公制
    let indexmm = (indexm * 1000000).toFixed(2);
    let indexcm = (indexm * 10000).toFixed(2);
    let indexdm = (indexm * 100).toFixed(2);
    let indexgongmu = (indexm * 0.01).toFixed(2);
    let indexgongqin = (indexm * 0.0001).toFixed(2);
    let indexkm = (indexm / 1000000).toFixed(2);
    //英制
    let indexyingmu = (indexm * 0.0002471).toFixed(2);
    let indexyingli = (indexm / 38610000).toFixed(2);
    let indexma = (indexm * 1.19599).toFixed(2);
    let indexfoot = (indexm * 10.7639104).toFixed(2);
    let indexinch = (indexm * 1550.0031).toFixed(2);
    //市制
    let indexqin = (indexm * 0.000015).toFixed(2);
    let indexmu = (indexm * 0.0015).toFixed(2);
    let indexfen = (indexm * 0.015).toFixed(2);
    let indexchi = (indexm * 9).toFixed(2);
    let indexcun = (indexm * 900).toFixed(2);
    indexm = (indexm * 1).toFixed(2);

    //公制
    setmm(indexmm);
    setcm(indexcm);
    setdm(indexdm);
    setm(indexm);
    setgongmu(indexgongmu);
    setgongqin(indexgongqin);
    setkm(indexkm);
    //英制
    setyingmu(indexyingmu);
    setyingli(indexyingli);
    setma(indexma);
    setfoot(indexfoot);
    setinch(indexinch);
    //市制
    setqin(indexqin);
    setmu(indexmu);
    setfen(indexfen);
    setchi(indexchi);
    setcun(indexcun);
  }
  function Transform(base) {
    //公制
    if (!flagmm) {
      let indexm = (base / 1000000).toFixed(6);
      tohtml(indexm);
    }
    if (!flagcm) {
      let indexm = (base / 10000).toFixed(6);
      tohtml(indexm);
    }
    if (!flagdm) {
      let indexm = (base / 100).toFixed(6);
      tohtml(indexm);
    }
    if (!flagm) {
      let indexm = (base * 1).toFixed(6);
      tohtml(indexm);
    }
    if (!flaggongmu) {
      let indexm = (base / 0.01).toFixed(6);
      tohtml(indexm);
    }
    if (!flaggongqin) {
      let indexm = (base / 0.0001).toFixed(6);
      tohtml(indexm);
    }
    if (!flagkm) {
      let indexm = (base * 1000000).toFixed(6);
      tohtml(indexm);
    }

    //英制
    if (!flagyingmu) {
      let indexm = (base * 4046.8564224).toFixed(6);
      tohtml(indexm);
    }
    if (!flagyingli) {
      let indexm = (base * 2589988.110336).toFixed(6);
      tohtml(indexm);
    }
    if (!flagma) {
      let indexm = (base * 0.8361274).toFixed(6);
      tohtml(indexm);
    }
    if (!flagfoot) {
      let indexm = (base * 0.092903).toFixed(6);
      tohtml(indexm);
    }
    if (!flaginch) {
      let indexm = (base * 0.0006452).toFixed(6);
      tohtml(indexm);
    }

    //市制
    if (!flagqin) {
      let indexm = (base * 66666.6666667).toFixed(6);
      tohtml(indexm);
    }
    if (!flagmu) {
      let indexm = (base * 666.6666667).toFixed(6);
      tohtml(indexm);
    }
    if (!flagfen) {
      let indexm = (base * 66.6666667).toFixed(6);
      tohtml(indexm);
    }
    if (!flagchi) {
      let indexm = (base * 0.1111111).toFixed(6);
      tohtml(indexm);
    }
    if (!flagcun) {
      let indexm = (base * 0.0011111).toFixed(6);
      tohtml(indexm);
    }
  }

  function Clear() {
    //公制
    setmm('');
    setcm('');
    setdm('');
    setm('');
    setgongmu('');
    setgongqin('');
    setkm('');

    //英制
    setyingmu('');
    setyingli('');
    setma('');
    setfoot('');
    setinch('');

    //市制
    setqin('');
    setmu('');
    setfen('');
    setchi('');
    setcun('');
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
                if (flagmm == true) {
                  //公制
                  setflagmm(!flagmm);
                  setflagcm(true);
                  setflagdm(true);
                  setflagm(true);
                  setflaggongmu(true);
                  setflaggongqin(true);
                  setflagkm(true);

                  //英制
                  setflagyingmu(true);
                  setflagyingli(true);
                  setflagma(true);
                  setflagfoot(true);
                  setflaginch(true);

                  //市制
                  setflagqin(true);
                  setflagmu(true);
                  setflagfen(true);
                  setflagchi(true);
                  setflagcun(true);
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
                平方毫米: {mm}
              </Text>
              <Text style={styles.textright}>mm²</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (flagcm == true) {
                  //公制
                  setflagmm(true);
                  setflagcm(!flagcm);
                  setflagdm(true);
                  setflagm(true);
                  setflaggongmu(true);
                  setflaggongqin(true);
                  setflagkm(true);

                  //英制
                  setflagyingmu(true);
                  setflagyingli(true);
                  setflagma(true);
                  setflagfoot(true);
                  setflaginch(true);

                  //市制
                  setflagqin(true);
                  setflagmu(true);
                  setflagfen(true);
                  setflagchi(true);
                  setflagcun(true);
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
                平方厘米: {cm}
              </Text>
              <Text style={styles.textright}>cm²</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (flagdm == true) {
                  //公制
                  setflagmm(true);
                  setflagcm(true);
                  setflagdm(!flagdm);
                  setflagm(true);
                  setflaggongmu(true);
                  setflaggongqin(true);
                  setflagkm(true);

                  //英制
                  setflagyingmu(true);
                  setflagyingli(true);
                  setflagma(true);
                  setflagfoot(true);
                  setflaginch(true);

                  //市制
                  setflagqin(true);
                  setflagmu(true);
                  setflagfen(true);
                  setflagchi(true);
                  setflagcun(true);
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
                平方分米: {dm}
              </Text>
              <Text style={styles.textright}>dm²</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (flagm == true) {
                  //公制
                  setflagmm(true);
                  setflagcm(true);
                  setflagdm(true);
                  setflagm(!flagm);
                  setflaggongmu(true);
                  setflaggongqin(true);
                  setflagkm(true);

                  //英制
                  setflagyingmu(true);
                  setflagyingli(true);
                  setflagma(true);
                  setflagfoot(true);
                  setflaginch(true);

                  //市制
                  setflagqin(true);
                  setflagmu(true);
                  setflagfen(true);
                  setflagchi(true);
                  setflagcun(true);
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
                平方米: {m}
              </Text>
              <Text style={styles.textright}>m²</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (flaggongmu == true) {
                  //公制
                  setflagmm(true);
                  setflagcm(true);
                  setflagdm(true);
                  setflagm(true);
                  setflaggongmu(!flaggongmu);
                  setflaggongqin(true);
                  setflagkm(true);

                  //英制
                  setflagyingmu(true);
                  setflagyingli(true);
                  setflagma(true);
                  setflagfoot(true);
                  setflaginch(true);

                  //市制
                  setflagqin(true);
                  setflagmu(true);
                  setflagfen(true);
                  setflagchi(true);
                  setflagcun(true);
                } else {
                  alert('请选择一个单位作为基准单位');
                }
              }}
              style={[
                styles.unitsview,
                {
                  backgroundColor: flaggongmu
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
                  { color: flaggongmu ? '#31A4F0' : 'white' },
                ]}
              >
                公亩: {gongmu}
              </Text>
              <Text style={styles.textright}>公亩</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (flaggongqin == true) {
                  //公制
                  setflagmm(true);
                  setflagcm(true);
                  setflagdm(true);
                  setflagm(true);
                  setflaggongmu(true);
                  setflaggongqin(!flaggongqin);
                  setflagkm(true);

                  //英制
                  setflagyingmu(true);
                  setflagyingli(true);
                  setflagma(true);
                  setflagfoot(true);
                  setflaginch(true);

                  //市制
                  setflagqin(true);
                  setflagmu(true);
                  setflagfen(true);
                  setflagchi(true);
                  setflagcun(true);
                } else {
                  alert('请选择一个单位作为基准单位');
                }
              }}
              style={[
                styles.unitsview,
                {
                  backgroundColor: flaggongqin
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
                  { color: flaggongqin ? '#31A4F0' : 'white' },
                ]}
              >
                公顷: {gongqin}
              </Text>
              <Text style={styles.textright}>公顷</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (flagkm == true) {
                  //公制
                  setflagmm(true);
                  setflagcm(true);
                  setflagdm(true);
                  setflagm(true);
                  setflaggongmu(true);
                  setflaggongqin(true);
                  setflagkm(!flagkm);

                  //英制
                  setflagyingmu(true);
                  setflagyingli(true);
                  setflagma(true);
                  setflagfoot(true);
                  setflaginch(true);

                  //市制
                  setflagqin(true);
                  setflagmu(true);
                  setflagfen(true);
                  setflagchi(true);
                  setflagcun(true);
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
                平方千米: {km}
              </Text>
              <Text style={styles.textright}>km²</Text>
            </TouchableOpacity>

            {/* 英制 */}
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
                if (flagyingmu == true) {
                  //公制
                  setflagmm(true);
                  setflagcm(true);
                  setflagdm(true);
                  setflagm(true);
                  setflaggongmu(true);
                  setflaggongqin(true);
                  setflagkm(true);

                  //英制
                  setflagyingmu(!flagyingmu);
                  setflagyingli(true);
                  setflagma(true);
                  setflagfoot(true);
                  setflaginch(true);

                  //市制
                  setflagqin(true);
                  setflagmu(true);
                  setflagfen(true);
                  setflagchi(true);
                  setflagcun(true);
                } else {
                  alert('请选择一个单位作为基准单位');
                }
              }}
              style={[
                styles.unitsview,
                {
                  backgroundColor: flagyingmu
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
                  { color: flagyingmu ? '#31A4F0' : 'white' },
                ]}
              >
                英亩: {yingmu}
              </Text>
              <Text style={styles.textright}>英亩</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (flagyingli == true) {
                  //公制
                  setflagmm(true);
                  setflagcm(true);
                  setflagdm(true);
                  setflagm(true);
                  setflaggongmu(true);
                  setflaggongqin(true);
                  setflagkm(true);

                  //英制
                  setflagyingmu(true);
                  setflagyingli(!flagyingli);
                  setflagma(true);
                  setflagfoot(true);
                  setflaginch(true);

                  //市制
                  setflagqin(true);
                  setflagmu(true);
                  setflagfen(true);
                  setflagchi(true);
                  setflagcun(true);
                } else {
                  alert('请选择一个单位作为基准单位');
                }
              }}
              style={[
                styles.unitsview,
                {
                  backgroundColor: flagyingli
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
                  { color: flagyingli ? '#31A4F0' : 'white' },
                ]}
              >
                英里: {yingli}
              </Text>
              <Text style={styles.textright}>英里</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (flagma == true) {
                  //公制
                  setflagmm(true);
                  setflagcm(true);
                  setflagdm(true);
                  setflagm(true);
                  setflaggongmu(true);
                  setflaggongqin(true);
                  setflagkm(true);

                  //英制
                  setflagyingmu(true);
                  setflagyingli(true);
                  setflagma(!flagma);
                  setflagfoot(true);
                  setflaginch(true);

                  //市制
                  setflagqin(true);
                  setflagmu(true);
                  setflagfen(true);
                  setflagchi(true);
                  setflagcun(true);
                } else {
                  alert('请选择一个单位作为基准单位');
                }
              }}
              style={[
                styles.unitsview,
                {
                  backgroundColor: flagma
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
                  { color: flagma ? '#31A4F0' : 'white' },
                ]}
              >
                平方码: {ma}
              </Text>
              <Text style={styles.textright}>平方码</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (flagfoot == true) {
                  //公制
                  setflagmm(true);
                  setflagcm(true);
                  setflagdm(true);
                  setflagm(true);
                  setflaggongmu(true);
                  setflaggongqin(true);
                  setflagkm(true);

                  //英制
                  setflagyingmu(true);
                  setflagyingli(true);
                  setflagma(true);
                  setflagfoot(!flagfoot);
                  setflaginch(true);

                  //市制
                  setflagqin(true);
                  setflagmu(true);
                  setflagfen(true);
                  setflagchi(true);
                  setflagcun(true);
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
                平方英尺: {foot}
              </Text>
              <Text style={styles.textright}>平方英尺</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (flaginch == true) {
                  //公制
                  setflagmm(true);
                  setflagcm(true);
                  setflagdm(true);
                  setflagm(true);
                  setflaggongmu(true);
                  setflaggongqin(true);
                  setflagkm(true);

                  //英制
                  setflagyingmu(true);
                  setflagyingli(true);
                  setflagma(true);
                  setflagfoot(true);
                  setflaginch(!flaginch);

                  //市制
                  setflagqin(true);
                  setflagmu(true);
                  setflagfen(true);
                  setflagchi(true);
                  setflagcun(true);
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
                平方英寸: {inch}
              </Text>
              <Text style={styles.textright}>平方英寸</Text>
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
                if (flagqin == true) {
                  //公制
                  setflagmm(true);
                  setflagcm(true);
                  setflagdm(true);
                  setflagm(true);
                  setflaggongmu(true);
                  setflaggongqin(true);
                  setflagkm(true);

                  //英制
                  setflagyingmu(true);
                  setflagyingli(true);
                  setflagma(true);
                  setflagfoot(true);
                  setflaginch(true);

                  //市制
                  setflagqin(!flagqin);
                  setflagmu(true);
                  setflagfen(true);
                  setflagchi(true);
                  setflagcun(true);
                } else {
                  alert('请选择一个单位作为基准单位');
                }
              }}
              style={[
                styles.unitsview,
                {
                  backgroundColor: flagqin
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
                  { color: flagqin ? '#31A4F0' : 'white' },
                ]}
              >
                顷: {qin}
              </Text>
              <Text style={styles.textright}>顷</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (flagmu == true) {
                  //公制
                  setflagmm(true);
                  setflagcm(true);
                  setflagdm(true);
                  setflagm(true);
                  setflaggongmu(true);
                  setflaggongqin(true);
                  setflagkm(true);

                  //英制
                  setflagyingmu(true);
                  setflagyingli(true);
                  setflagma(true);
                  setflagfoot(true);
                  setflaginch(true);

                  //市制
                  setflagqin(true);
                  setflagmu(!flagmu);
                  setflagfen(true);
                  setflagchi(true);
                  setflagcun(true);
                } else {
                  alert('请选择一个单位作为基准单位');
                }
              }}
              style={[
                styles.unitsview,
                {
                  backgroundColor: flagmu
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
                  { color: flagmu ? '#31A4F0' : 'white' },
                ]}
              >
                亩: {mu}
              </Text>
              <Text style={styles.textright}>亩</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (flagfen == true) {
                  //公制
                  setflagmm(true);
                  setflagcm(true);
                  setflagdm(true);
                  setflagm(true);
                  setflaggongmu(true);
                  setflaggongqin(true);
                  setflagkm(true);

                  //英制
                  setflagyingmu(true);
                  setflagyingli(true);
                  setflagma(true);
                  setflagfoot(true);
                  setflaginch(true);

                  //市制
                  setflagqin(true);
                  setflagmu(true);
                  setflagfen(!flagfen);
                  setflagchi(true);
                  setflagcun(true);
                } else {
                  alert('请选择一个单位作为基准单位');
                }
              }}
              style={[
                styles.unitsview,
                {
                  backgroundColor: flagfen
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
                  { color: flagfen ? '#31A4F0' : 'white' },
                ]}
              >
                分: {fen}
              </Text>
              <Text style={styles.textright}>分</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (flagchi == true) {
                  //公制
                  setflagmm(true);
                  setflagcm(true);
                  setflagdm(true);
                  setflagm(true);
                  setflaggongmu(true);
                  setflaggongqin(true);
                  setflagkm(true);

                  //英制
                  setflagyingmu(true);
                  setflagyingli(true);
                  setflagma(true);
                  setflagfoot(true);
                  setflaginch(true);

                  //市制
                  setflagqin(true);
                  setflagmu(true);
                  setflagfen(true);
                  setflagchi(!flagchi);
                  setflagcun(true);
                } else {
                  alert('请选择一个单位作为基准单位');
                }
              }}
              style={[
                styles.unitsview,
                {
                  backgroundColor: flagchi
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
                  { color: flagchi ? '#31A4F0' : 'white' },
                ]}
              >
                尺: {chi}
              </Text>
              <Text style={styles.textright}>尺</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (flagcun == true) {
                  //公制
                  setflagmm(true);
                  setflagcm(true);
                  setflagdm(true);
                  setflagm(true);
                  setflaggongmu(true);
                  setflaggongqin(true);
                  setflagkm(true);

                  //英制
                  setflagyingmu(true);
                  setflagyingli(true);
                  setflagma(true);
                  setflagfoot(true);
                  setflaginch(true);

                  //市制
                  setflagqin(true);
                  setflagmu(true);
                  setflagfen(true);
                  setflagchi(true);
                  setflagcun(!flagcun);
                } else {
                  alert('请选择一个单位作为基准单位');
                }
              }}
              style={[
                styles.unitsview,
                {
                  backgroundColor: flagcun
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
                  { color: flagcun ? '#31A4F0' : 'white' },
                ]}
              >
                寸: {cun}
              </Text>
              <Text style={styles.textright}>寸</Text>
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

export default Area;
