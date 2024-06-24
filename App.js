import React, {useState} from "react";
import { View, StyleSheet, FlatList, Text  } from "react-native";

export default function app(){
  const [feed, setFeed] = useState([
    {id: '1', nome: 'Matheus', idade: 50, email:'matheus@matheus.com'},
    {id: '2', nome: 'Lucas', idade: 23, email:'lucas@lucas.com'},
    {id: '3', nome: 'Luan', idade: 20, email:'luan@luan.com'},
    {id: '4', nome: 'Herberton', idade: 30, email:'herberton@herberton.com'},
    {id: '5', nome: 'Rafael', idade: 40, email:'rafael@rafael.com'}
  ])

  return (
    <View style={styles.container}>

      <FlatList
      showsVerticalScrollIndicator={false}
        data={feed}
        renderItem={({ item }) => <Pessoa data={item} /> }
      />

    </View>
  );
}

// Estilos para os componentes
const styles= StyleSheet.create({
  container:{
    flex: 1, // Ocupa todo o espaço disponível
  },
  areaPessoa:{
    backgroundColor:'#121212',
    height:200,
    marginBottom: 15,
    justifyContent: 'center'
  },
  textoPessoa:{
    color: '#fff',
    fontSize: 20
  }
})

function Pessoa(props){
  return(
    <View style={styles.areaPessoa}>
      <Text style={styles.textoPessoa}>{props.data.nome}</Text>
      <Text style={styles.textoPessoa}>{props.data.idade}</Text>
      <Text style={styles.textoPessoa}>{props.data.email}</Text>
      
    </View>
  );
}