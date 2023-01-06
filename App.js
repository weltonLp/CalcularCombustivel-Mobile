
import React from "react";
import { Component } from "react";



import { 
  Text,
  StyleSheet,
  TextInput,
  View,
  Button,
  Modal,
  Keyboard,
  Image,
  TouchableOpacity,
  ScrollView,
 
 } from "react-native";


import Entrar from "./src/Modal/index";


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      img: require('./src/img/logo.png'),
      gasolina: 0.00,
      alcool: 0.00,
      diferenca: '',
      modalVisible: false,
      
      
    };
    this.precoGasolina = this.precoGasolina.bind(this);
    this.precoAlcool = this.precoAlcool.bind(this);
    this.calcular = this.calcular.bind(this);
  }
  
  precoGasolina(texto){
    this.setState({gasolina: texto})
    
  }

  precoAlcool(texto){
    this.setState({alcool: texto})
    
  }
  calcular(){
    let alc = this.state.alcool;
    let gas = this.state.gasolina;
    this.setState({diferenca: (alc/gas), modalVisible: true});
  }
  sair(visible){
    this.setState({modalVisible: visible, gasolina: 0, alcool: 0})
  }
  render(){
   
//  visible={this.state.modalVisible}
   
    return(
      <ScrollView style={styles.container}>
        <View style={styles.cabecalho}>
          <Image 
            style={styles.img}
            source={this.state.img}
          />
          <Text style={styles.txtImg}> Qual a melhor opção?</Text>
        </View>
        
        <View style={styles.areaInput}>
          <Text style={styles.txt}>Gasolina(preço por litro)</Text>
          <TextInput 
            style={styles.txtInput}
            placeholder='0.00'
            onChangeText={this.precoGasolina}
          />

          <Text style={styles.txt}>Álcool(preço por litro)</Text>
          <TextInput 
            style={styles.txtInput}
            placeholder='0.00'
            onChangeText={this.precoAlcool}
          />
        </View>
        <TouchableOpacity style={styles.btnCalcular} onPress={this.calcular}>
          <Text style={styles.txtButton}>Calcular</Text>
        </TouchableOpacity>

        <Modal animationType="slide" visible={this.state.modalVisible} >
          <Entrar fechar={ ()=> {this.sair(false)}} valorG = {this.state.gasolina} valorA={this.state.alcool} compensa={this.state.diferenca}/>
        </Modal>
        
      </ScrollView>
    );''
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#121111',
  },
  cabecalho:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 35,
    
  },
  img:{

  },
  txtImg:{
    color: '#FFF',
    fontSize: 20
  },
  areaInput:{
    marginTop: 35,
  },
  txt:{
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold'
  },
  txtInput:{
    backgroundColor: '#FFF',
    borderRadius: 5,
    padding: 3,
    marginBottom: 35
  },
  btnCalcular:{
    backgroundColor: '#ff4500',
    height: 35,
    alignItems: 'center',
    borderRadius: 5
  },
  txtButton:{
    color: '#FFF',
    fontSize: 20,
    textAlign: 'center',
    alignItems: 'center'
  },
  areaModal:{
    backgroundColor: '#000'
  }

})