//AQUI É ATELA DE MODAL
import React from "react";
import { Component } from "react";

import { 
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    Button,
} from "react-native";


export default class Entrar extends Component{
    constructor(props){
        super(props);
        this.state={
            img: require('../img/gas.png'),
            gas: this.props.nomeA 
        }
    }
    

    render(){
        return(
            <View style={styles.areaModal}>
                <View style={styles.areaImg}>
                    <Image
                        style={styles.img}
                        source={this.state.img}
                    />
                    <Text style={styles.txtImg}>Compensa usar:  {(this.props.compensa)>0.7?'Alcool' : 'Gasolina'}</Text>
                </View>
                <View style={{marginTop: 65}}>
                    <Text style={styles.txtRodape}>Com os preços:</Text>
                </View>
                <View style={styles.areaRodape}>
                    <Text style={styles.txtPreco}>Gasolina: {this.props.valorG} R$</Text>
                    <Text style={styles.txtPreco}>Álcool: {this.props.valorA} R$</Text>
                 </View>
                <Button title="Calcular Novamente" onPress={this.props.fechar}/>

                

            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    areaModal:{
        backgroundColor: '#000',
        flex:1,
    },
    areaImg:{
        marginTop: 10,
        alignItems: 'center',
    },
    img:{

    },
    txtImg:{
       fontSize: 25, 
       color: '#adff2f',
    },
    areaRodape:{
        flex: 1,
        marginTop: 65

    },
    txtRodape:{
        color: '#FFF',
        fontSize: 20,
        textAlign: 'center',
        
    },
    txtPreco:{
        color: '#FFF',
        textAlign: 'center',

       
    }
})
