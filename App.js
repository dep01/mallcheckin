import React,{useState,useEffect} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
  ActivityIndicator,
  TextInput,
  Alert
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import { RadioButton } from 'react-native-paper';
import QRCode from 'react-native-qrcode-svg';
function HomeScreen({ navigation }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,backgroundColor:'#ffffff' }}>
      <Text>Home Screen</Text>
    </View>
  );
}
const Login =({ navigation })=>{
  
    return(
      <View style={{ flex: 1, alignItems: 'center',backgroundColor:'#ffffff' }}>
      <Image source={require('./assets/mall.png')} style={{width:150,height:150,marginTop:'30%'}}/>
        
        <TouchableOpacity onPress={()=>navigation.navigate('Form')} style={{backgroundColor:'#FD064D',marginTop:'20%',height:50,width:'70%',justifyContent:'center',alignItems:'center'}}>
         <Text style={{fontSize:18,color:'#ffff'}}>CUSTOMER</Text> 
        </TouchableOpacity>
      </View>
    )
  }
const SplashScreen =({ navigation })=>{
setTimeout(async() => {
  try {
    const _nik = await AsyncStorage.getItem('nik'); 
    _nik?navigation.navigate('Login'):navigation.navigate('Login')
  } catch (e) {
  }
  
}, 2000)
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={require('./assets/mall.png')} style={{width:70,height:70}}/>
      <ActivityIndicator size="small" color="black" />
    </View>
  )
}

const Stack = createStackNavigator();
const QrCode =({navigation})=>{
// const a = await AsyncStorage.getItem('nik')
const [nik,set_nik]= useState('');
const [loading,set_loading]= useState(true)
const [count,set_count] = useState(0)
  useEffect(()=>{
const get=async()=>{
  set_loading(true)
  const a = await AsyncStorage.getItem('nik')
  set_nik(a)
  console.log(nik);
  set_loading(false)
}
get();
set_count(count+1);
  },[])
return(
  
    loading?<View/>:
  
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'#ffffff'  }}>
  <Image source={require('./assets/mall.png')} style={{width:100,height:100}}/>
<Text style={{fontSize:20,fontWeight:"bold",marginBottom:20}}>Thank you</Text>
<View style={styles.container}>
<Text numberOfLines={6} style={styles.text,{width:'100%',marginBottom:30}}>
  Terima kasih atas pengisian datanya. Silahkan untuk masuk dan berbelanja di tempat kami.
</Text>
</View>
<QRCode
          value={nik}
          size={200}/>
</View>
)
}
const Question =({navigation})=>{
  
  const [checked, setChecked] = useState('first');
  const [check,setcheck] =useState('first');
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'#ffffff'  }}>
      <Image source={require('./assets/mall.png')} style={{width:100,height:100}}/>
    <Text style={{fontSize:20,fontWeight:"bold",marginBottom:20}}>Self Check UP COVID-19</Text>
    <View style={styles.container}>
<Text numberOfLines={3} style={styles.text,{width:'100%'}}>
  1. Apakah Anda mengalami salah satu yang berikut?
</Text>


    </View>
    <View style={styles.container,{flexDirection:'column',width:'80%',paddingLeft:10}}>
    <Text style={styles.text,{width:'100%'}}>-Kesulitan bernafas yang parah</Text>
    <Text style={styles.text,{width:'100%'}}>-Nyeri dada yang parah</Text>
    <Text style={styles.text,{width:'100%'}}>-Sulit untuk bangun</Text>
    <Text style={styles.text,{width:'100%'}}>-Merasa kebingungan</Text>
    <Text style={styles.text,{width:'100%'}}>-Penurunan kesadaran</Text>
    <View style={{flexDirection:'row',alignItems:'center'}}>
    <RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
      />
      <Text>Yes</Text>
    </View>
    <View style={{flexDirection:'row',alignItems:'center'}}>
    <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      />
      <Text>No</Text>
    </View>
     
    </View>
    <View style={styles.container}>
<Text numberOfLines={3} style={styles.text,{width:'100%'}}>
  1. Apakah Anda mengalami salah satu yang berikut?
</Text>


    </View>
    <View style={styles.container,{flexDirection:'column',width:'80%',paddingLeft:10}}>
    <Text style={styles.text,{width:'100%'}}>-Demam</Text>
    <Text style={styles.text,{width:'100%'}}>-Batuk</Text>
    <Text style={styles.text,{width:'100%'}}>-Bersin</Text>
    <Text style={styles.text,{width:'100%'}}>-Sakit Tenggorokan</Text>
    <Text style={styles.text,{width:'100%'}}>-Sulit Bernafas</Text>
    <View style={{flexDirection:'row',alignItems:'center'}}>
    <RadioButton
        value="first"
        status={ check=== 'first' ? 'checked' : 'unchecked' }
        onPress={() => setcheck('first')}
      />
      <Text>Yes</Text>
    </View>
    <View style={{flexDirection:'row',alignItems:'center'}}>
    <RadioButton
        value="second"
        status={ check === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setcheck('second')}
      />
      <Text>No</Text>
    </View>
    </View>
    <TouchableOpacity onPress={()=>navigation.navigate('Qr')} style={{width:'50%',backgroundColor:'#009AFF',height:40,justifyContent:'center',alignItems:'center',borderRadius:15}}>
      <Text style={{color:'#ffffff'}}>Lanjutkan</Text>
    </TouchableOpacity>
    </View>
  )
}
const FormUser =({navigation})=>{
const [nik,set_nik] = useState('');
const [nama,set_nama] = useState('');
const [hp,set_hp] = useState('');
const [email,set_email] = useState('');
const [alamat,set_alamat] = useState('');
const save =async()=>{
if(nik==''){
Alert.alert('Lengkapi semua data!');
console.log(nik,nama,hp,email,alamat)
}else{
  await AsyncStorage.setItem('nik',nik)
  navigation.navigate('Quest')
}
}
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'#ffffff' }}>
    <Image source={require('./assets/mall.png')} style={{width:100,height:100}}/>
    <Text style={{fontSize:20,fontWeight:"bold",marginBottom:20}}>Personal Data</Text>
    <View style={styles.container}>
<Text style={styles.text}>NIK</Text>
         
<TextInput  keyboardType={'number-pad'} style={styles.inputText} onChangeText={(value)=>set_nik(value)} placeholder="Type something" />
    </View>
    <View style={styles.container}>
<Text style={styles.text}>Nama</Text>
<TextInput style={styles.inputText} onChangeText={(value)=>set_nama(value)} placeholder="Type something" />
    </View>
    <View style={styles.container}>
<Text style={styles.text}>HP</Text>
<TextInput  keyboardType={'number-pad'} style={styles.inputText}onChangeText={(value)=>set_hp(value)}  placeholder="Type something" />
    </View>
    <View style={styles.container}>
<Text style={styles.text}>Email</Text>
<TextInput style={styles.inputText} onChangeText={(value)=>set_email(value)}  placeholder="Type something" />
    </View>
    <View style={styles.container}>
<Text style={styles.text}>Alamat</Text>

<TextInput style={styles.inputText} onChangeText={(value)=>set_alamat(value)}  placeholder="Type something" />
    </View>
    <TouchableOpacity onPress={()=>save()} style={{width:'50%',backgroundColor:'#009AFF',height:40,justifyContent:'center',alignItems:'center',borderRadius:15}}>
      <Text style={{color:'#ffffff'}}>Lanjutkan</Text>
    </TouchableOpacity>
  </View>
  )
}
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen    options={{
          headerShown: false,
        }} name="Splash" component={SplashScreen} />
              <Stack.Screen    options={{
          headerShown: false,
        }} name="Login" component={Login} />
        <Stack.Screen    options={{
          headerShown: false,
        }} name="Home" component={HomeScreen} />
           <Stack.Screen    options={{
          headerShown: false,
        }} name="Form" component={FormUser} />
                   <Stack.Screen    options={{
          headerShown: false,
        }} name="Quest" component={Question} />
         <Stack.Screen    options={{
          headerShown: false,
        }} name="Qr" component={QrCode} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
 text:{fontSize:13,fontWeight:'normal',width:50},
 inputText:{backgroundColor:'#f7f7f7',width:'80%',borderRadius:15},
 container:{flexDirection:'row',width:'80%',margin:10,alignItems:'center'}
});

export default App;
