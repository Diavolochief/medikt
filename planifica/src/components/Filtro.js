import React,{useEffect} from 'react'
import{View,Text,StyleSheet}from 'react-native'
import{Picker}from'@react-native-picker/picker'
import globalStyles from '../styles'
const Filtro = ({setFiltro,filtro}) => {
  useEffect(() => {
   console.log('ya cambio')
  }, [filtro])
  
  
    return (
      <View style={style.contenedor}>
          <Text style={style.label}>Filtrar Gastos</Text>
          <Picker
          selectedValue={filtro}
            onValueChange={(valor)=>{
                setFiltro(valor)
            }}
          >
       <Picker.Item label="--Seleccione--" value=""/>
       <Picker.Item label="--Ahorro--" value='ahorro'/>
       <Picker.Item label="--Comida--" value='comida'/>
       <Picker.Item label="--Casa--" value='casa'/>
       <Picker.Item label="--Varios--" value='varios'/>
       <Picker.Item label="--Ocio--" value='ocio'/>
       <Picker.Item label="--Salud--" value='salud'/>
   </Picker>
    
    
      </View>
      
    


  )
}
const style=StyleSheet.create({
    contenedor:{
        ...globalStyles.contenedor,
        transform:[{translateY:-15}],
       
       

    },
    label:{
        fontSize:22,
        fontWeight:'900',
        color:'#64748b'
    }

})

export default Filtro;