import { StyleSheet, TouchableOpacity, Text, View, TouchableHighlight, useColorScheme } from 'react-native'
import React ,{ useState } from 'react'
import { TextInput } from 'react-native-paper'
const App = () => {
    const [text, setText] = useState('')
    const [pass, setPass] = useState('')
    const [email, setEmail] = useState('')
    const [selectedOption, setSelectedOption] = useState('');
   
   
    return (
        <View style={{ gap: 20,  flex: 1 }}>
            <Text style={[styles.text, { color: textColor }]}>Log in to DLifeJob</Text>
            <View style={styles.bmain}>
                <View style={styles.radiowrapper}>
                    <TouchableOpacity onPress={() => setSelectedOption('email')} style={styles.radioSelect}>
                        <View style={styles.radio}>
                            {selectedOption === 'email' && <View style={styles.innerradio} />}
                        </View>
                        <Text style={[styles.rtext, { color: '#808080' }]}>Email </Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.radiowrapper]}>
                    <TouchableOpacity onPress={() => setSelectedOption('username')} style={styles.radioSelect}>
                        <View style={styles.radio}>
                            {selectedOption === 'username' && <View style={styles.innerradio} />}
                        </View >
                        <Text style={[styles.rtext, { color: '#808080' }]}>Username</Text>
                    </TouchableOpacity>
                </View>
            </View>
            < TextInput
                style={styles.placeholder}
                label={selectedOption === 'email' ? 'Enter your Email address' : 'Enter your User name'}
                value={selectedOption === 'email' ? email : text}
                onChangeText={selectedOption === 'email' ? setEmail : setText}
                mode='flat'
                underlineColor="#2196F3"       // blue underline always
                activeUnderlineColor="#2196F3"
                theme={{
                    colors: {
                        background: 'transparent',
                        text: '#000',
                        placeholder: '#808080',     // gray label when not focused
                        primary: '#2196F3',         // blue label when focused
                    }
                }}
            />
            <TextInput
                style={styles.placeholder}
                label='Enter Password '
                value={pass}
                secureTextEntry={true}
                onChangeText={text => setPass(text)}
                mode='flat'
                underlineColor="#2196F3"       // blue underline always
                activeUnderlineColor="#2196F3"
                theme={{
                    colors: {
                        background: 'transparent',
                        text: '#000',
                        placeholder: '#808080',     // gray label when not focused
                        primary: '#2196F3',         // blue label when focused
                    }
                }}
            />
            <View style={{ flexDirection: 'row', marginLeft: 80, marginTop: 20 }}>
                <TouchableOpacity style={styles.otp}>
                    <Text style={styles.otptext} > Log in with OTP </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.log}>
                    <Text style={styles.logtext} > Log in</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.ormain}>
                <View style={[styles.line, { backgroundColor: '#808080' }]}></View>
                <Text style={styles.or}>or</Text>
                <View style={[styles.line, { backgroundColor: '#808080' }]}></View>
            </View>
            <Text style={styles.logusing}>
                Login using
            </Text>
            <View style={{ flexDirection: 'row', paddingLeft: 60 }}>
                <TouchableHighlight style={styles.gogglebtn}>
                    <Text style={styles.text2}>Google</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.wpbtn}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.text2}>WhatsApp</Text>
                    </View>
                </TouchableHighlight>
            </View>
            <Text style={styles.lasttext}> All your activity will remain private</Text>
            <Text style={styles.free} > Register for free</Text>
        </View >
    )
}
export default App
const styles = StyleSheet.create({
    bmain: {

        marginTop: 30,
        marginLeft: 40,
        flexDirection: 'row',

    }
    ,
    text: {
        fontSize: 23,
        fontWeight: '500',
        marginTop: 70,
        marginLeft: 40

    },
    rtext: {
        fontSize: 16,
        fontWeight: '400',
        color: 'black'

    },
    radio: {
        height: 25,
        width: 25,
        borderWidth: 2,
        borderColor: '#808080',
        borderRadius: 20,
        marginRight: 5
    },
    radiowrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 30,

    },
    radioSelect: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    innerradio: {
        height: 15,
        width: 15,
        backgroundColor: 'orange',
        borderRadius: 10,
        margin: 3
    },
    placeholder: {
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: 'transparent',
    },
    otp: {
        borderWidth: 2,
        borderColor: '#4169E1',
        height: 40,
        width: 150,
        borderRadius: 20
    },
    log: {
        backgroundColor: '#4169E1',
        height: 40,
        width: 100,
        borderRadius: 20,
        marginLeft: 10
    },
    otptext: {
        padding: 7,
        marginLeft: 15,
        color: '#4169E1',
        fontWeight: '600'
    },
    logtext: {
        padding: 7,
        marginLeft: 20,
        color: 'white',
        fontWeight: '500',
    },
    line: {
        flex: 1,
        height: 1,
        fontWeight: '100',
        backgroundColor: '#0000001A'
    },
    or: {
        color: 'grey',
        fontWeight: '300',
    },
    ormain: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 80
    },
    logusing: {
        paddingTop: 60,
        alignSelf: 'center',
        color: '#00336659'
    },
    gogglebtn: {
        borderWidth: 1,
        borderColor: '#0000001A',
        height: 40,
        width: 110,
        borderRadius: 20
    },
    text2: {
        padding: 7,
        marginLeft: 30,
        color: 'black',
        fontWeight: '500',

    },
    wpbtn: {
        borderWidth: 1,
        borderColor: '#0000001A',
        height: 40,
        width: 130,
        borderRadius: 20,
        marginLeft: 10

    },
    lasttext: {

        alignSelf: 'center',
        color: '#00336659'
    },
    free: {
        padding: 7,
        marginLeft: 110,
        color: '#4169E1',
        fontWeight: '600',
        fontSize: 16
    }

})