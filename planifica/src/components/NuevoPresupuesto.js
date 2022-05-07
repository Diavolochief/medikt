import React from 'react'
import { View, TextInput, Pressable, Text, StyleSheet,SafeAreaView} from 'react-native'
import globalStyles from '../styles'
const NuevoPresupuesto = ({
    presupuesto,
    setPresupuesto,
    handlePresupuesto}) => {


    return (
        <SafeAreaView style={estilos.contenedor}>

        <View>
            <Text style={estilos.label}> Definir Presupuesto: </Text>

            <TextInput
                style={estilos.input}
                keyboardType='numeric'
                placeholder='Ingresa tu presupuesto: Ej. 300'
                value={ presupuesto.toString() }
                onChangeText={setPresupuesto}
                />
            <Pressable
            onPress={()=>handlePresupuesto(presupuesto)}
            style={estilos.boton}>
                <Text style={estilos.botonTexto}>Agregar Presupuesto</Text>
            </Pressable>
        </View>

</SafeAreaView>
    )
}
const estilos = StyleSheet.create({
    
    contenedor: {
        ...globalStyles.contenedor
    },
    boton: {
        
        marginTop:30,
        backgroundColor:'#1048a4',
        padding:10,
        borderRadius:10
        ,
    },
    label: {
        textAlign:'center',
        fontSize:24,
        color:'#3b82f6',
        marginBottom:10,
        fontWeight:'bold'
        
    }, input: {
        backgroundColor:'#f5f5f5'
        ,padding:10,
        textAlign:'center',
        marginTop:30
    },
    botonTexto:{
        color:'#fff',
        textAlign:'center',
        fontSize:20,
        textTransform:'uppercase',
        fontWeight:'200'

    }

})
export default NuevoPresupuesto