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

const Area = () => {
  const [us, setus] = useState('');
  const [s, sets] = useState('');
  const [min, setmin] = useState('');
  const [hour, sethour] = useState('');
  const [day, setday] = useState('');
  const [week, setweek] = useState('');
  const [year, setyear] = useState('');
  const [flagus, setflagus] = useState(true);
  const [flags, setflags] = useState(true);
  const [flagmin, setflagmin] = useState(true);
  const [flaghour, setflaghour] = useState(true);
  const [flagday, setflagday] = useState(false);
  const [flagweek, setflagweek] = useState(true);
  const [flagyear, setflagyear] = useState(true);

  function Transform(base) {
    if (!flagus) {
      let indexday = (base / 86400000000).toFixed(6);
      let indexus = (indexday * 86400000000).toFixed(6);
      let indexs = (indexday * 86400).toFixed(6);
      let indexmin = (indexday * 1440).toFixed(6);
      let indexhour = (indexday * 24).toFixed(6);
      let indexweek = (indexday * 0.1428571).toFixed(6);
      let indexyear = (indexday * 0.0027397).toFixed(6);
      setus(indexus);
      sets(indexs);
      setmin(indexmin);
      sethour(indexhour);
      setday(indexday);
      setweek(indexweek);
      setyear(indexyear);
    }
    if (!flags) {
      let indexday = (base / 86400).toFixed(6);
      let indexus = (indexday * 86400000000).toFixed(6);
      let indexs = (indexday * 86400).toFixed(6);
      let indexmin = (indexday * 1440).toFixed(6);
      let indexhour = (indexday * 24).toFixed(6);
      let indexweek = (indexday * 0.1428571).toFixed(6);
      let indexyear = (indexday * 0.0027397).toFixed(6);
      setus(indexus);
      sets(indexs);
      setmin(indexmin);
      sethour(indexhour);
      setday(indexday);
      setweek(indexweek);
      setyear(indexyear);
    }
    if (!flagmin) {
      let indexday = (base / 1440).toFixed(6);
      let indexus = (indexday * 86400000000).toFixed(6);
      let indexs = (indexday * 86400).toFixed(6);
      let indexmin = (indexday * 1440).toFixed(6);
      let indexhour = (indexday * 24).toFixed(6);
      let indexweek = (indexday * 0.1428571).toFixed(6);
      let indexyear = (indexday * 0.0027397).toFixed(6);
      setus(indexus);
      sets(indexs);
      setmin(indexmin);
      sethour(indexhour);
      setday(indexday);
      setweek(indexweek);
      setyear(indexyear);
    }
    if (!flaghour) {
      let indexday = (base / 24).toFixed(6);
      let indexus = (indexday * 86400000000).toFixed(6);
      let indexs = (indexday * 86400).toFixed(6);
      let indexmin = (indexday * 1440).toFixed(6);
      let indexhour = (indexday * 24).toFixed(6);
      let indexweek = (indexday * 0.1428571).toFixed(6);
      let indexyear = (indexday * 0.0027397).toFixed(6);
      setus(indexus);
      sets(indexs);
      setmin(indexmin);
      sethour(indexhour);
      setday(indexday);
      setweek(indexweek);
      setyear(indexyear);
    }
    if (!flagday) {
      let indexday = (base * 1).toFixed(6);
      let indexus = (indexday * 86400000000).toFixed(6);
      let indexs = (indexday * 86400).toFixed(6);
      let indexmin = (indexday * 1440).toFixed(6);
      let indexhour = (indexday * 24).toFixed(6);
      let indexweek = (indexday * 0.1428571).toFixed(6);
      let indexyear = (indexday * 0.0027397).toFixed(6);
      setus(indexus);
      sets(indexs);
      setmin(indexmin);
      sethour(indexhour);
      setday(indexday);
      setweek(indexweek);
      setyear(indexyear);
    }
    if (!flagweek) {
      let indexday = (base * 7).toFixed(6);
      let indexus = (indexday * 86400000000).toFixed(6);
      let indexs = (indexday * 86400).toFixed(6);
      let indexmin = (indexday * 1440).toFixed(6);
      let indexhour = (indexday * 24).toFixed(6);
      let indexweek = (indexday * 0.1428571).toFixed(6);
      let indexyear = (indexday * 0.0027397).toFixed(6);
      setus(indexus);
      sets(indexs);
      setmin(indexmin);
      sethour(indexhour);
      setday(indexday);
      setweek(indexweek);
      setyear(indexyear);
    }
    if (!flagyear) {
      let indexday = (base * 365).toFixed(6);
      let indexus = (indexday * 86400000000).toFixed(6);
      let indexs = (indexday * 86400).toFixed(6);
      let indexmin = (indexday * 1440).toFixed(6);
      let indexhour = (indexday * 24).toFixed(6);
      let indexweek = (indexday * 0.1428571).toFixed(6);
      let indexyear = (indexday * 0.0027397).toFixed(6);
      setus(indexus);
      sets(indexs);
      setmin(indexmin);
      sethour(indexhour);
      setday(indexday);
      setweek(indexweek);
      setyear(indexyear);
    }
  }

  function Clear() {
    setus('');
    sets('');
    setmin('');
    sethour('');
    setday('');
    setweek('');
    setyear('');
  }
  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="position">
        <View style={styles.body}>
          <View style={styles.valuetop}>
            <Text style={styles.valuetoptext}>数值: </Text>
            <TextInput
              style={styles.valuetopinput}
              placeholder="请输入数值"
              onChangeText={(text) => Transform(text)}
            />
            <TouchableOpacity style={styles.valuetopbtn} onPress={Clear}>
              <Text style={styles.btnText}>重置</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.units}>
            <TouchableOpacity
              onPress={() => {
                if (flagus == true) {
                  setflagus(!flagus);
                  setflags(true);
                  setflagmin(true);
                  setflaghour(true);
                  setflagday(true);
                  setflagweek(true);
                  setflagyear(true);
                } else {
                  alert('请选择一个单位作为基准单位');
                }
              }}
              style={[
                styles.unitsview,
                { backgroundColor: flagus ? 'white' : '#5050F3' },
              ]}
            >
              <Text
                style={[
                  styles.textleft,
                  { color: flagus ? '#31A4F0' : 'white' },
                ]}
              >
                微秒: {us}
              </Text>
              <Text
                style={[
                  styles.textright,
                  { color: flagus ? '#31A4F0' : 'white' },
                ]}
              >
                us
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (flags == true) {
                  setflagus(true);
                  setflags(!flags);
                  setflagmin(true);
                  setflaghour(true);
                  setflagday(true);
                  setflagweek(true);
                  setflagyear(true);
                } else {
                  alert('请选择一个单位作为基准单位');
                }
              }}
              style={[
                styles.unitsview,
                { backgroundColor: flags ? 'white' : '#5050F3' },
              ]}
            >
              <Text
                style={[
                  styles.textleft,
                  { color: flags ? '#31A4F0' : 'white' },
                ]}
              >
                秒: {s}
              </Text>
              <Text
                style={[
                  styles.textright,
                  { color: flags ? '#31A4F0' : 'white' },
                ]}
              >
                s
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (flagmin == true) {
                  setflagus(true);
                  setflags(true);
                  setflagmin(!flagmin);
                  setflaghour(true);
                  setflagday(true);
                  setflagweek(true);
                  setflagyear(true);
                } else {
                  alert('请选择一个单位作为基准单位');
                }
              }}
              style={[
                styles.unitsview,
                { backgroundColor: flagmin ? 'white' : '#5050F3' },
              ]}
            >
              <Text
                style={[
                  styles.textleft,
                  { color: flagmin ? '#31A4F0' : 'white' },
                ]}
              >
                分: {min}
              </Text>
              <Text
                style={[
                  styles.textright,
                  { color: flagmin ? '#31A4F0' : 'white' },
                ]}
              >
                min
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (flaghour == true) {
                  setflagus(true);
                  setflags(true);
                  setflagmin(true);
                  setflaghour(!flaghour);
                  setflagday(true);
                  setflagweek(true);
                  setflagyear(true);
                } else {
                  alert('请选择一个单位作为基准单位');
                }
              }}
              style={[
                styles.unitsview,
                { backgroundColor: flaghour ? 'white' : '#5050F3' },
              ]}
            >
              <Text
                style={[
                  styles.textleft,
                  { color: flaghour ? '#31A4F0' : 'white' },
                ]}
              >
                时: {hour}
              </Text>
              <Text
                style={[
                  styles.textright,
                  { color: flaghour ? '#31A4F0' : 'white' },
                ]}
              >
                hour
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              ouchableOpacity
              onPress={() => {
                if (flagday == true) {
                  setflagus(true);
                  setflags(true);
                  setflagmin(true);
                  setflaghour(true);
                  setflagday(!flagday);
                  setflagweek(true);
                  setflagyear(true);
                } else {
                  alert('请选择一个单位作为基准单位');
                }
              }}
              style={[
                styles.unitsview,
                { backgroundColor: flagday ? 'white' : '#5050F3' },
              ]}
            >
              <Text
                style={[
                  styles.textleft,
                  { color: flagday ? '#31A4F0' : 'white' },
                ]}
              >
                天: {day}
              </Text>
              <Text
                style={[
                  styles.textright,
                  { color: flagday ? '#31A4F0' : 'white' },
                ]}
              >
                天
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (flagweek == true) {
                  setflagus(true);
                  setflags(true);
                  setflagmin(true);
                  setflaghour(true);
                  setflagday(true);
                  setflagweek(!flagweek);
                  setflagyear(true);
                } else {
                  alert('请选择一个单位作为基准单位');
                }
              }}
              style={[
                styles.unitsview,
                { backgroundColor: flagweek ? 'white' : '#5050F3' },
              ]}
            >
              <Text
                style={[
                  styles.textleft,
                  { color: flagweek ? '#31A4F0' : 'white' },
                ]}
              >
                周: {week}
              </Text>
              <Text
                style={[
                  styles.textright,
                  { color: flagweek ? '#31A4F0' : 'white' },
                ]}
              >
                周
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (flagyear == true) {
                  setflagus(true);
                  setflags(true);
                  setflagmin(true);
                  setflaghour(true);
                  setflagday(true);
                  setflagweek(true);
                  setflagyear(!flagyear);
                } else {
                  alert('请选择一个单位作为基准单位');
                }
              }}
              style={[
                styles.unitsview,
                { backgroundColor: flagyear ? 'white' : '#5050F3' },
              ]}
            >
              <Text
                style={[
                  styles.textleft,
                  { color: flagyear ? '#31A4F0' : 'white' },
                ]}
              >
                年: {year}
              </Text>
              <Text
                style={[
                  styles.textright,
                  { color: flagyear ? '#31A4F0' : 'white' },
                ]}
              >
                年
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
    //For Dark Mode
    //borderColor:'orange',
    //borderWidth:0.8,
    borderRadius: 10,
    //For Dark Mode
    //color:'#fff',
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
