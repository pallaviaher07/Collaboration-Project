import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Checkbox, TextInput } from 'react-native-paper';

const SignupScreen = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  return (
    <ScrollView style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: 'bold',marginLeft: 6,marginTop: 22}}>
        Create your DLifeJob profile </Text>
      <Text style={{ color: 'gray', fontSize: 9, paddingLeft: 9 }}>Search & apply to jobs from India's No.1 Job Site</Text>
      <TextInput style={styles.input}
        label="Full name*" value={fullName} onChangeText={text => setFullName(text)}
        mode='flat'
        underlineColor='#2196F3'
        activeUnderlineColor='#2196F3'
        theme={{
          colors: {
            background: 'transparent',
            text: '#000',
            placeholder: '#808080',
            primary: '#2196F3',
          }
        }}
      />
      <TextInput style={styles.input}
        label="Email ID*" keyboardType='email-address' value={email} onChangeText={setEmail}
        mode='flat'
        underlineColor='#2196F3'
        activeUnderlineColor='#2196F3'
        theme={{
          colors: {
            background: 'transparent',
            text: '#000',
            placeholder: '#808080',
            primary: '#2196F3',
          }
        }}
      />
      <Text style={{ color: 'gray', marginLeft: 20,fontSize:8 }}>We'll send relevant jobs and update to this email</Text>
      <TextInput style={styles.input}
        label="Password* (Minimum 6 characters)" secureTextEntry value={Password} onChangeText={setPassword}
        mode='flat'
        underlineColor='#2196F3'
        activeUnderlineColor='#2196F3'
        theme={{
          colors: {
            background: 'transparent',
            text: '#000',
            placeholder: '#808080',
            primary: '#2196F3',
          }
        }}
      />
      <Text style={{ color: 'gray', marginLeft: 20,fontSize:8 }}>This helps your account stay protected</Text>
      <TextInput style={styles.input}
        label="Mobile number*" keyboardType='phone-pad' value={mobile} onChangeText={setMobile}
        mode='flat'
        underlineColor='#2196F3'
        activeUnderlineColor='#2196F3'
        theme={{
          colors: {
            background: 'transparent',
            text: '#000',
            placeholder: '#808080',
            primary: '#2196F3',
          }
        }}
      />
      <Text style={{ color: 'gray', marginLeft: 20,fontSize:8 }}>Recruiters will contact you on this number</Text>
      <View style={styles.checkboxContainer}>
        <Checkbox status={isChecked ? 'checked' : 'unchecked'}
          onPress={() => setIsChecked(!isChecked)} />
        <Text style={{ flex: 1, fontSize: 10, marginTop: 20,  color:'gray'}}>
          Send me updates & promotions via email, SMS and WhatsApp
        </Text>
      </View>
      <View style={{ paddingLeft: 15, paddingBottom: 20 }}>
        <Text style={{ color: 'gray', fontSize: 7}}>By clicking Register, you agree to the <Text style={{ color: '#2E6CF6' }}>Terms and Conditions</Text> & <Text style={{ color: '#2E6CF6' }}>
          Privacy Policy</Text> of DLifeJob</Text>
      </View>
      <TouchableOpacity style={{ backgroundColor: '#448AFF', padding: 8, borderRadius: 25, alignItems: 'center',}}>
        <Text style={{ color: 'white', fontWeight: '500', fontSize: 15 }}>Register</Text>
      </TouchableOpacity>
      <View style={{ flex: 1, flexDirection: 'row', paddingTop: 30, paddingBottom: 20, alignItems: 'center' }}>
        <View style={{ height: 1, backgroundColor: '#E0E0E0', flex: 1 }}></View>
        <Text style={{ color: 'black' ,fontSize:9,fontWeight:'bold'}}>or</Text>
        <View style={{ height: 1, backgroundColor: '#E0E0E0', flex: 1 }}></View>
      </View>
      <TouchableOpacity style={{borderColor: '#E0E0E0', borderWidth: 1, padding: 11, borderRadius: 25, alignItems: 'center',  marginBottom: 50 }}>
        <Text style={{ color: 'black', fontSize: 11, fontWeight: '500' }}>Sign up with Google</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}
export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  input: {
    padding: 4,
    marginBottom: 5,
    marginTop: 35,
    backgroundColor: 'transparent',
    fontSize:12
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 8,
    alignItems: 'center',
    padding: 9,
     flexWrap: 'wrap'
  }
  
})
