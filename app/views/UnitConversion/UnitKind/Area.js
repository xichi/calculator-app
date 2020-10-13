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

const Area = () => {
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
          </View>
          <View style={styles.units}>
            <TouchableOpacity
              onPress={() => {
                setflagmm(!flagmm);
              }}
              style={[
                styles.unitsview,
                { backgroundColor: flagmm ? 'white' : 'blue' },
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
                setflagdm(!flagdm);
              }}
              style={[
                styles.unitsview,
                { backgroundColor: flagdm ? 'white' : 'blue' },
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
                setflagm(!flagm);
              }}
              style={[
                styles.unitsview,
                { backgroundColor: flagm ? 'white' : 'blue' },
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
                setflagkm(!flagkm);
              }}
              style={[
                styles.unitsview,
                { backgroundColor: flagkm ? 'white' : 'blue' },
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
                setflagfoot(!flagfoot);
              }}
              style={[
                styles.unitsview,
                { backgroundColor: flagfoot ? 'white' : '#3333ff' },
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
                setflaginch(!flaginch);
              }}
              style={[
                styles.unitsview,
                { backgroundColor: flaginch ? 'white' : 'blue' },
              ]}
            >
              <Text
                style={[styles.text, { color: flaginch ? '#31A4F0' : 'white' }]}
              >
                英寸: {inch} inch
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.btn1} onPress={Transform}>
            <Text style={[styles.btnText, { color: 'white' }]}>转换</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn2} onPress={Clear}>
            <Text style={styles.btnText}>重置</Text>
          </TouchableOpacity>
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
    width: 285,
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
  btn1: {
    //For Dark Mode
    //backgroundColor:'white',
    backgroundColor: 'black',
    padding: 5,
    width: 150,
    height: 80,
    borderRadius: 20,
    position: 'absolute',
    top: 480,
    left: 40,
  },
  btn2: {
    backgroundColor: 'red',
    padding: 5,
    width: 150,
    height: 80,
    borderRadius: 20,
    position: 'absolute',
    top: 480,
    left: 220,
  },
  btnText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 23,
  },
});

export default Area;
