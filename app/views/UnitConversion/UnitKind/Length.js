import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
} from 'react-native';

const Length = () => {
  const [mm, setmm] = useState('');
  const [cm, setcm] = useState('');
  const [dm, setdm] = useState('');
  const [m, setm] = useState('');
  const [km, setkm] = useState('');
  const [foot, setfoot] = useState('');
  const [inch, setinch] = useState('');
  const [flagmm, setflagmm] = useState(true);
  const [flagdm, setflagdm] = useState(true);
  const [flagm, setflagm] = useState(true);
  const [flagkm, setflagkm] = useState(true);
  const [flagfoot, setflagfoot] = useState(true);
  const [flaginch, setflaginch] = useState(true);

  function duserqq(indexm) {
    let indexkm = (indexm / 1000).toFixed(2);
    let indexdm = (indexm * 10).toFixed(2);
    let indexcm = (indexm * 100).toFixed(2);
    let indexmm = (indexm * 1000).toFixed(2);
    let indexfoot = (indexm * 3.2808399).toFixed(2);
    let indexinch = (indexm * 39.3700787).toFixed(2);
    setcm(indexcm);
    setdm(indexdm);
    setmm(indexmm);
    setkm(indexkm);
    setfoot(indexfoot);
    setinch(indexinch);
    setm(indexm);
    alert('Designed by NJR10byh in China.\nAssembled in NJUPT');
  }

  function Transform() {
    if (mm != '') {
      let indexmm = parseFloat(mm);
      indexm = (indexmm / 1000).toFixed(2);
      //alert(indexm);
      duserqq(indexm);
    }
    if (cm != '') {
      let indexcm = parseFloat(cm);
      indexm = (indexcm / 100).toFixed(2);
      duserqq(indexm);
    }
    if (dm != '') {
      let indexdm = parseFloat(dm);
      indexm = (indexdm / 10).toFixed(2);
      duserqq(indexm);
    }
    if (m != '') {
      indexm = parseFloat(m).toFixed(2);
      duserqq(indexm);
    }
    if (km != '') {
      let indexkm = parseFloat(km);
      indexm = (indexkm * 1000).toFixed(2);
      duserqq(indexm);
    }
    if (foot != '') {
      let indexfoot = parseFloat(foot);
      indexm = (indexfoot * 0.3048).toFixed();
      duserqq(indexm);
    }
    if (inch != '') {
      let indexinch = parseFloat(inch);
      indexm = (indexinch * 0.0254).toFixed(2);
      duserqq(indexm);
    }
  }
  function Clear() {
    setmm('');
    setcm('');
    setdm('');
    setm('');
    setkm('');
  }
  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="position">
        <View style={styles.body}>
          <View style={styles.valuetop}>
            <Text style={{ fontSize: 30, fontWeight: '500', marginTop: 3 }}>
              数值:{' '}
            </Text>
            <TextInput style={styles.inputstyletop} placeholder="请输入数值" />
            <TouchableOpacity style={styles.btn2} onPress={Clear}>
              <Text style={styles.btnText}>重置</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.units}>
            <TouchableOpacity
              onPress={() => {
                if (flagmm == true) {
                  setflagmm(!flagmm);
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
                { backgroundColor: flagmm ? 'white' : '#5050F3' },
              ]}
            >
              <Text
                style={[styles.text, { color: flagmm ? '#31A4F0' : 'white' }]}
              >
                毫米: {mm}{' '}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (flagdm == true) {
                  setflagmm(true);
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
                { backgroundColor: flagdm ? 'white' : '#5050F3' },
              ]}
            >
              <Text
                style={[styles.text, { color: flagdm ? '#31A4F0' : 'white' }]}
              >
                分米: {dm} dm{' '}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (flagm == true) {
                  setflagmm(true);
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
                { backgroundColor: flagm ? 'white' : '#5050F3' },
              ]}
            >
              <Text
                style={[styles.text, { color: flagm ? '#31A4F0' : 'white' }]}
              >
                米: {m} m
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (flagkm == true) {
                  setflagmm(true);
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
                { backgroundColor: flagkm ? 'white' : '#5050F3' },
              ]}
            >
              <Text
                style={[styles.text, { color: flagkm ? '#31A4F0' : 'white' }]}
              >
                千米: {km} km
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (flagfoot == true) {
                  setflagmm(true);
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
                { backgroundColor: flagfoot ? 'white' : '#5050F3' },
              ]}
            >
              <Text
                style={[styles.text, { color: flagfoot ? '#31A4F0' : 'white' }]}
              >
                英尺: {foot} foot
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (flaginch == true) {
                  setflagmm(true);
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
                { backgroundColor: flaginch ? 'white' : '#5050F3' },
              ]}
            >
              <Text
                style={[styles.text, { color: flaginch ? '#31A4F0' : 'white' }]}
              >
                英寸: {inch} inch
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
    //For Dark Mode
    //backgroundColor:'black',
    backgroundColor: 'white',
  },
  valuetop: {
    flexDirection: 'row',
  },
  units: {
    flexDirection: 'column',
    marginTop: 20,
  },
  unitsview: {
    borderStyle: 'solid',
    borderBottomColor: '#CCCCCC',
    borderBottomWidth: 0.6,
    paddingTop: 5,
    paddingBottom: 10,
    paddingLeft: 5,
    marginTop: 5,
    borderRadius: 15,
  },
  text: {
    height: 30,
    marginTop: 8,
    fontSize: 23,
    color: '#31A4F0',
    fontWeight: '600',
  },
  inputstyletop: {
    width: 185,
    height: 45,
    padding: 10,
    marginLeft: 25,
    fontSize: 18,
    backgroundColor: '#EEEEEE',
    //For Dark Mode
    //borderColor:'orange',
    //borderWidth:0.8,
    borderRadius: 10,
    //For Dark Mode
    //color:'#fff',
    color: '#111',
    fontWeight: '500',
  },
  btn2: {
    backgroundColor: 'red',
    padding: 5,
    width: 75,
    height: 45,
    marginLeft: 25,
    borderRadius: 10,
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
