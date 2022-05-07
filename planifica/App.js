
import React, { useState } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Alert,
  Pressable,
  Image,
  SafeAreaView,
  Modal
} from 'react-native';
import Headers from './src/components/Header';
import NuevoPresupuesto from './src/components/NuevoPresupuesto';
import ControlPresupuesto from './src/components/ControlPresupuesto';
import FormularioGastos from './src/components/FormularioGastos';
import { generarId } from './src/helpers';
import ListadoGasto from './src/components/ListadoGasto';
import Filtro from './src/components/Filtro';

const App = () => {
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  const [presupuesto, setPresupuesto] = useState(0)
  const [gastos, setGastos] = useState([])
  const [modal, setModal] = useState(false)
  const [gasto, setGasto] = useState({})
  const [filtro, setFiltro] = useState('')
  const [gastosFiltrados, setGastosFiltrados] = useState('')

  const handlePresupuesto = (presupuesto) => {
    console.log('desde App', presupuesto)

    if (Number(presupuesto) > 0) {
      console.log('presupuesto valido')
      setIsValidPresupuesto(true)


    } else {
      console.log('presupuesto no valido')
      Alert.alert(
        'Error',
        'El presupuesto no puede ser 300 o menor'

      )
    }


  }

  const handleGasto = gasto => {
    console.log(gasto)

    if ([gasto.nombre, gasto.categoria, gasto.cantidad].includes('')) {
      Alert.alert('Error',
        'Llena todo los campos')
      return
    }

    if (gasto.id) {

      const gastosActualizados = gastos.map(gastoState => gastoState.id ===
        gasto.id ? gasto : gastoState)

      setGastos(gastosActualizados)
    }
    else {
      console.log('Nuevoregistro')
      gasto.id = generarId()
      gasto.fecha = Date.now()

      console.log(gasto)


      setGastos([...gastos, gasto])
    }

    //añadir gasto al state


    setModal(!modal)


  }
  const eliminarGasto = id => {
    Alert.alert(
      'Deseas eliminar este gasto',
      'un gasto eliminado no se puede recuperar',
      [{ text: 'no', style: 'cancel' },
      {
        text: 'si,Eliminar', onPress: () => {
          console.log('eliminando id ....', id)
          const gastosActualizados = gastos.filter(gastoState => gastoState.id !== id)
          setGastos(gastosActualizados)
          setModal(!modal)
          setGasto({})
        }
      }]

    ) 
  }

  return (

    <View style={estilo.contenedor}>
      <ScrollView>


        <View style={estilo.header}>

          <Headers />

          {isValidPresupuesto ? (
            <ControlPresupuesto
              presupuesto={presupuesto}
              gastos={gastos}
            />) : (
            <NuevoPresupuesto
              presupuesto={presupuesto}
              setPresupuesto={setPresupuesto}
              handlePresupuesto={handlePresupuesto}
            />
          )}

        </View>

        {isValidPresupuesto && (
          <>
          <Filtro
          setFiltro={setFiltro}
          filtro={filtro}
          />
            <ListadoGasto
              setGasto={setGasto}
              gastos={gastos}
              setModal={setModal}
            />
          </>

        )}

      </ScrollView>
      {modal && (
        <Modal
          animationType='slide'
          visible={modal}
          onRequestClose={() => {
            setModal(!modal)
          }}
        >

          <FormularioGastos
            setModal={setModal}
            handleGasto={handleGasto}
            gasto={gasto}
            setGasto={setGasto}
            eliminarGasto={eliminarGasto}

          />
        </Modal>
      )}


      {isValidPresupuesto && (
        <Pressable
          style={estilo.Pressable}
          onPress={() => setModal(!modal)}
        >

          <Image
            style={estilo.imagen}
            source={require('./src/img/nuevo-gasto.png')}

          />

        </Pressable>

      )}

    </View>

  );
};

const estilo = StyleSheet.create({

  header: {
    backgroundColor: '#3b82f6',
    marginBottom: 70

  },
  contenedor: {
    backgroundColor: '#F5F5F5',
    flex: 1,


  },
  Pressable: {
    position: 'absolute',
    bottom: 40,
    right: 30,
    width: 60,
    height: 60
  },
  imagen: {
    width: 60,
    height: 60
  },

});

export default App;