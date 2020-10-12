import React ,{useState} from 'react';
import { View,Text,StyleSheet,TextInput,TouchableOpacity, Keyboard } from 'react-native';

const Length =() =>{
    const [mm,setmm]=useState('');
    const [cm,setcm]=useState('');
    const [dm,setdm]=useState('');
    const [m,setm]=useState('');
    const [km,setkm]=useState('');

    function Transform(){
        if(mm!=''){
            let indexmm = parseFloat(mm);
            let indexcm = indexmm/10;
            let indexdm = indexmm/100;
            let indexm = indexmm/1000;
            let indexkm = indexmm/1000000;
            setcm(indexcm);
            setdm(indexdm);
            setm(indexm);
            setkm(indexkm);
        }
        if(cm!=''){
            let indexcm = parseFloat(cm);
            let indexmm = indexcm*10;
            let indexdm = indexcm/10;
            let indexm = indexcm/100;
            let indexkm = indexcm/100000;
            setmm(indexmm);
            setdm(indexdm);
            setm(indexm);
            setkm(indexkm);
        }
        if(dm!=''){
            let indexdm = parseFloat(dm);
            let indexmm = indexdm*100;
            let indexcm = indexdm*10;
            let indexm = indexdm/10;
            let indexkm = indexdm/10000;
            setcm(indexcm);
            setmm(indexmm);
            setm(indexm);
            setkm(indexkm);
        }
        if(m!=''){
            let indexm = parseFloat(m);
            let indexcm = indexm*100;
            let indexdm = indexm*10;
            let indexmm = indexm*1000;
            let indexkm = indexm/1000;
            setcm(indexcm);
            setdm(indexdm);
            setmm(indexmm);
            setkm(indexkm);
        }
        if(km!=''){
            let indexkm = parseFloat(km);
            let indexcm = indexkm*100000;
            let indexdm = indexkm*10000;
            let indexm = indexkm*1000;
            let indexmm = indexkm*1000000;
            setcm(indexcm);
            setdm(indexdm);
            setm(indexm);
            setmm(indexmm);
        }
    }
    function Clear(){
        setmm('');
        setcm('');
        setdm('');
        setm('');
        setkm('');
    }
        return(
            <View style={styles.body}>
            <View style={styles.row}>
            <Text style={styles.text}>毫米:  {mm} mm</Text>
                <TextInput
                    placeholder="毫米" 
                    keyboardType='number-pad'
                    clearButtonMode="while-editing"
                    clearTextOnFocus={true}
                    returnKeyType="done"
                    onChangeText={(text) =>{ 
                        setmm(text);
                        setcm('');
                        setdm('');
                        setm('');
                        setkm('');
                    }}
                    style={styles.inputstyle}
                />
            </View>
            <View style={styles.row}>
            <Text style={styles.text}>厘米:  {cm} cm</Text>
                <TextInput
                    placeholder="厘米" 
                    keyboardType='number-pad'
                    clearButtonMode="while-editing"
                    clearTextOnFocus={true}
                    returnKeyType="done"
                    onChangeText={(text) =>{ 
                        setmm('');
                        setcm(text);
                        setdm('');
                        setm('');
                        setkm('');
                    }}
                    style={styles.inputstyle}
                />
            </View>
            <View style={styles.row}>
            <Text style={styles.text}>分米:  {dm} dm</Text>
                <TextInput
                    placeholder="分米" 
                    keyboardType='number-pad'
                    clearButtonMode="while-editing"
                    clearTextOnFocus={true}
                    returnKeyType="done"
                    onChangeText={(text) =>{ 
                        setmm('');
                        setcm('');
                        setdm(text);
                        setm('');
                        setkm('');
                    }}
                    style={styles.inputstyle}
                />
            </View>
            <View style={styles.row}>
            <Text style={styles.text}>     米:  {m} m</Text>
                <TextInput
                    placeholder="米" 
                    keyboardType='number-pad'
                    clearButtonMode="while-editing"
                    clearTextOnFocus={true}
                    returnKeyType="done"
                    onChangeText={(text) =>{ 
                        setmm('');
                        setcm('');
                        setdm('');
                        setm(text);
                        setkm('');
                    }}
                    style={styles.inputstyle}
                />
            </View>
            <View style={styles.row}>
            <Text style={styles.text}>千米:  {km} km</Text>
                <TextInput
                    placeholder="千米"
                    placeholdertTextColor='red'
                    keyboardType='number-pad'
                    clearButtonMode="while-editing"
                    clearTextOnFocus={true}
                    returnKeyType="done"
                    onChangeText={(text) =>{ 
                        setmm('');
                        setcm('');
                        setdm('');
                        setm('');
                        setkm(text);
                    }}
                    style={styles.inputstyle}
                />
            </View>
            <TouchableOpacity 
                style={styles.btn1}
                onPress={Transform}
            >
                <Text style={[styles.btnText,{color:'black'}]}>转换</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.btn2}
                onPress={Clear}
            >
                <Text style={styles.btnText}>重置</Text>
            </TouchableOpacity>
            </View>
        );
}

const styles=StyleSheet.create({
    body:{
        padding:15,
        height:'100%',
        backgroundColor:'black',
    },
    row:{
        flexDirection:'row',
        height:40,
        marginTop:20,
    },
    text:{
        flex:1,
        height:100,
        marginTop:8,  
        color:'#31A4F0',
        fontSize:23,
        fontWeight:'600',
    },
    inputstyle:{
        width:160,
        height:45,
        padding:10,
        fontSize:18,
        borderColor:'orange',
        borderWidth:0.8,
        //borderBottomWidth:1,
        borderRadius:10,
        color:'#fff',
        fontWeight:'500'
    },
    btn1:{
        backgroundColor:'white',
        padding:5,
        width:80,
        height:80,
        borderRadius:50,
        position:"absolute",
        top:360,
        left:80,
    },
    btn2:{
        backgroundColor:'red',
        padding:5,
        width:80,
        height:80,
        borderRadius:50,
        position:"absolute",
        top:360,
        left:260,
    },
    btnText:{
        fontSize:25,
        color:'white',
        fontWeight:'bold',
        textAlign:'center',
        marginTop:23,
    }
});

export default Length;
