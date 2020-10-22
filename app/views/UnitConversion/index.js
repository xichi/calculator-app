import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Theme from '../../variables';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  itemlight: {
    width: '41.5%',
    height: 100,
    backgroundColor: 'white',
    margin: 15,
    paddingTop: 37.5,
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: { h: 10, w: 10 },
    shadowRadius: 6,
    shadowOpacity: 0.1,
  },
  itemdark: {
    width: '41.5%',
    height: 100,
    backgroundColor: '#222',
    margin: 15,
    paddingTop: 37.5,
    borderRadius: 20,
  },
  text: {
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
    color: '#1196EE',
    //color:'black'
  },
});

function index({ navigation }) {
  return (
    <ScrollView>
      <View style={[styles.container]}>
        <TouchableOpacity
          style={Theme.colorTheme ? styles.itemdark : styles.itemlight}
          onPress={() => navigation.navigate('Length')}
        >
          <Text style={styles.text}>长度单位</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Theme.colorTheme ? styles.itemdark : styles.itemlight}
          onPress={() => navigation.navigate('Time')}
        >
          <Text style={styles.text}>时间单位</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Theme.colorTheme ? styles.itemdark : styles.itemlight}
          onPress={() => navigation.navigate('Area')}
        >
          <Text style={styles.text}>面积单位</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Theme.colorTheme ? styles.itemdark : styles.itemlight}
          onPress={() => navigation.navigate('Weight')}
        >
          <Text style={styles.text}>重量单位</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Theme.colorTheme ? styles.itemdark : styles.itemlight}
          onPress={() => navigation.navigate('Pressure')}
        >
          <Text style={styles.text}>压强单位</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Theme.colorTheme ? styles.itemdark : styles.itemlight}
          onPress={() => navigation.navigate('Speed')}
        >
          <Text style={styles.text}>速度单位</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default index;
