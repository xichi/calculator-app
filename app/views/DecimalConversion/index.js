import React ,{useState} from 'react';
import { View,Text,StyleSheet,TextInput,TouchableOpacity, Keyboard } from 'react-native';

const DecimalConversion =() =>{
    const [txtValue2,settxtValue2]=useState('');
    const [txtValue8,settxtValue8]=useState('');
    const [txtValue10,settxtValue10]=useState('');
    const [txtValue16,settxtValue16]=useState('');

    function Transform(){
        let index = parseInt(txtValue10, 10);
        settxtValue2(index.toString(2));
        settxtValue8(index.toString(8));
        settxtValue16(index.toString(16));  
    }
    function Clear(){
        settxtValue2('');
        settxtValue8('');
        settxtValue10('');
        settxtValue16('');
    }
        return(
            <View style={styles.body}>
            <View style={styles.row}>
            <Text style={styles.text}>十进制: </Text>
                <TextInput
                    placeholder="请输入十进制数" 
                    keyboardType='number-pad'
                    clearButtonMode="while-editing"
                    clearTextOnFocus={true}
                    returnKeyType="done"
                    onChangeText={(text) =>{ 
                        settxtValue10(text)
                    }}
                    style={styles.inputstyle}
                />
            </View>
            <Text 
                style={styles.Decimaltext}
            >二进制:     {txtValue2}</Text>
           <Text 
                style={styles.Decimaltext}
            >八进制:     {txtValue8}</Text>
            <Text 
                style={styles.Decimaltext}
            >十进制:     {txtValue10}</Text>
            <Text 
                style={styles.Decimaltext}
            >十六进制:     {txtValue16}</Text>
            <TouchableOpacity 
                style={styles.btn1}
                onPress={Transform}
            >
                <Text style={styles.btnText}>转换</Text>
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
    },
    row:{
        flexDirection:'row',
        height:40,
        marginTop:20,
    },
    text:{
        flex:1,
        marginTop:6,   
        color:'#555',
        fontSize:20,
    },
    Decimaltext:{
        color:'#333',
        fontSize:23,
        marginTop:35,
    },
    inputstyle:{
        flex:2,
        padding:10,
        fontSize:17,
        height:40,
        borderColor:'black',
        borderWidth:1,
        borderRadius:10,
        width:200,
        marginRight:100,
    },
    btn1:{
        backgroundColor:'black',
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

export default DecimalConversion;
