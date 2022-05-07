import React,{useState,useEffect} from 'react'
import{Text,TextInput,View,StyleSheet,Pressable,SafeAreaView} from 'react-native'
import {Picker} from '@react-native-picker/picker'
import globalStyles from '../styles'

const FormularioGastos = ({
    setModal ,
     handleGasto,
    gasto,
    setGasto,
eliminarGasto}) => {
    const [nombre, setNombre] = useState('')
    const [categoria, setCategoria] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [id, setId] = useState('')
    const [fecha, setFecha] = useState('')

    useEffect(() => {
      if(gasto?.nombre){
          
          setNombre(gasto.nombre)
          setCantidad(gasto.cantidad)
          setCategoria(gasto.categoria)
         setId(gasto.id)
         setFecha(gasto.fecha)
      }
     
    }, [gasto])

  return ( 
      <SafeAreaView style={estilo.contenedor}>
<View style={estilo.contenedorBotones}>
    <Pressable
     style={[estilo.btn, estilo.btnCancelar]}
    onLongPress={()=> {
        setModal(false)
        setGasto({})
    }}
    >

        <Text style={estilo.btncancelarTxt}>Cancelar</Text>
    </Pressable>
    {!!id&&(
    <Pressable
    style={[estilo.btn, estilo.btnEliminar]}
    onLongPress={()=>eliminarGasto(id)}
    >

        <Text style={estilo.btncancelarTxt}>Eliminar</Text>
    </Pressable>
    )}
</View>

<View style={estilo.formulario}>
    <Text style={estilo.titulo}> {gasto?.nombre? 'Editar Gasto':'Nuevo Gasto'}</Text>

    <View style={estilo.campo}>
  <Text style={estilo.label}>Nombre Gasto</Text>
    <TextInput
    style={estilo.input}
    placeholder='nombre del gasto ,ej. comida'
    value={nombre}
    onChangeText={setNombre}
    />
    </View>

<View style={estilo.campo}>
    <Text style={estilo.label}>Cantidad Gasto</Text>
    <TextInput
     style={estilo.input}
     placeholder='Cantidad del Gasto ej.300'
     keyboardType='numeric'
     value={cantidad}
    onChangeText={setCantidad}
     />
</View>


<View style={estilo.campo}>
    <Text style={estilo.label}>Categoria Gastos</Text>
   <Picker
   selectedValue={categoria}
   onValueChange={(valor)=>{
       setCategoria(valor)
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
<View>
    <Pressable style={estilo.boton}
    onPress={()=>handleGasto({nombre,cantidad,categoria,id,fecha})}
    >

        <Text style={estilo.botonText}>{gasto?.nombre? 'Editar Gasto':'Agregar Gasto'}</Text>
    </Pressable>
</View>

</View>
      </SafeAreaView>
       
  )
}

const estilo=StyleSheet.create({
    contenedor:{
        backgroundColor:'#1e40af',
        flex:1
    },contenedorBotones:{
        flexDirection:'row',
        justifyContent:'space-between'
    },btn:{
        padding:10,
        marginTop:30,
        marginHorizontal:10,
        flex:1  
    },
    btnCancelar:{
        
        backgroundColor:'#Db2777'


    },
    btnEliminar:{
        
        backgroundColor:'red',
        
    },
    btncancelarTxt:{
textTransform:'uppercase',
color:'#fff',
textAlign:'center'
,fontWeight:'bold'

    },
    formulario:{
    ...globalStyles.contenedor
    },
    titulo:{
 textAlign: 'center',
 fontSize:28,
 color:'#64748B',
 marginBottom:30

    },
    campo:{
        marginVertical:10
    }
    ,
    label:{
        color:'#64748B',
        textTransform:'uppercase',
        fontSize:12,
        fontWeight:'bold'
    },
    input:{
        backgroundColor:'#f5f5f5'
        ,padding:10,
        borderRadius:10,
        marginTop:5
    },
    boton: {
        marginTop:10,
        backgroundColor:'#3b82f6',
        padding:10,
        borderRadius:10,
        marginHorizontal :20,
        marginBottom:15
        ,
            },
            botonText:{
                color:'#fff',
                textAlign:'center',
                fontWeight:'bold',
                textTransform:'uppercase',
                
            }

})

export default FormularioGastos