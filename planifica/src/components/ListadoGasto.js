import React from 'react'
import {Text,View,StyleSheet} from 'react-native'
import Gasto from './Gasto'


const listadoGasto = ({gastos,setModal,setGasto}) => {
  return (
      <View style={style.contenedor}>
    <Text style={style.titulo}>Gastos</Text>

    {gastos.length === 0 ? 
    <Text style={style.noGasto}>no hay gastos</Text> :
    gastos.map(gasto=> (
     <Gasto
     key={gasto.id}
     gasto={gasto}
     setModal={setModal}
     setGasto={setGasto}
     />

    ))}

      </View>
  )
}
const style=StyleSheet.create({
contenedor:{
marginTop:5,
marginBottom:100,

},
titulo:{
color:'#64748b',
textAlign:'center',
fontWeight:'bold',
fontSize:30,
marginTop:10

},noGasto:{
    marginTop:10,
    textAlign:'center',
    fontSize:20,
    

}


})

export default listadoGasto