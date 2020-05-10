import React,{useState, useEffect} from 'react';
import { YellowBox,StyleSheet,  ScrollView, Text, View,FlatList, TextInput,TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const ws = new WebSocket('ws://192.168.15.6:8888');

export default function App() {
  YellowBox.ignoreWarnings([
    'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?'
  ]);

  const [chatMessage,setchatMessage] = useState('');
  const [chatMessages,setchatMessages] = useState([]);

  ws.onmessage = ({ data }) => appendToChat([data]);

  function appendToChat(data) {
    let key = chatMessages.length+1;
    setchatMessages(chatMessages.concat([{text: data, key: key}]));
    setchatMessage('');
  }

  function enviarmensagem(data) {
    ws.send(data);
  }

  const Lista =()=>{
   return(
    chatMessages.map(item=>(
      <Text style={styles.Mensagem}
      key={item.key}>{item.text}</Text>)
    ))
  }


 return (
 <>

 <ScrollView style={{marginTop: 20, marginBottom: 75}}>
   {<Lista/>}
 </ScrollView>

 <View style={styles.mensageForm} >
   <TextInput 
   style={styles.searchInput}
   placeholder='mensagem'
   placeholderTextColor='#999'
   autoCapitalize='words'
   autoCorrect={false}
   value={String(chatMessage)}
   onChangeText={setchatMessage}
   />

   <TouchableOpacity  style={styles.searchButton} onPress={ () => enviarmensagem(chatMessage) }>
     <MaterialIcons name="send" size={20} color="#FFF" />
   </TouchableOpacity>
 </View>

 </>
   );
 }



 const styles = StyleSheet.create({
  mensageForm: {
    position: 'absolute',
    left: 20,
    right: 20,
    zIndex: 5,
    flexDirection: 'row',
    bottom: 20,
    flex:1
  },
  searchInput: {
    flex: 1,
    height: 50,
    backgroundColor: '#FFF',
    color: '#333',
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    elevation: 2
  },
  searchButton: {
    width: 50,
    height: 50,
    backgroundColor: 'skyblue',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },
  Mensagem:{
    minWidth: '40%',
    maxWidth: '50%',
    width: 'auto',
    borderRadius: 10,
    backgroundColor: 'lightblue',
    marginTop: 8
  }
});