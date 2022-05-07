import React from 'react'
import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import globalStyles from '../styles'
import { formatearCantidad, formatearFecha } from '../helpers'

const diccionarioIconos = {
  ahorro: require('../img/icono_ahorro.png'),
  comida: require('../img/icono_comida.png'),
  casa: require('../img/icono_casa.png'),
  varios: require('../img/icono_suscripciones.png'),
  ocio: require('../img/icono_ocio.png'),
  salud: require('../img/icono_salud.png'),
}

const Gasto = ({ gasto, setModal, setGasto }) => {


  const { nombre, categoria, cantidad, fecha } = gasto
const handleAcciones=()=>{
  setModal(true)
  setGasto(gasto)
  

}
  return (
    <Pressable
    onLongPress={handleAcciones}
    >
      <View style={style.contenedor}>
        <View style={style.contenido}>

          <View style={style.contenedorimgs}>
            <Image
              style={style.imagen}
              source={diccionarioIconos[categoria]}
            />
            <View style={style.contenedorTexto}>
              <Text style={style.categoria}>{categoria}</Text>
              <Text style={style.nombreGasto}>{nombre}</Text>
              <Text style={style.fecha}>Fecha: {formatearFecha(fecha)} </Text>
            </View>
          </View>
          <Text style={style.cantidad}>{formatearCantidad(cantidad)}</Text>
        </View>
      </View>
    </Pressable>

  )
}
const style = StyleSheet.create({
  contenedor: {
    ...globalStyles.contenedor
    , marginBottom: 15

  },
  contenido: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  contenedorimgs: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1


  },
  imagen: {
    height: 50
    , width: 50,
    marginRight: 20
  },
  contenedorTexto: {
    flex: 1
  },
  categoria: {
    color: '#94a3b8',
    fontSize: 13,
    textTransform: 'uppercase'
    , marginBottom: 5,
    fontWeight: '700'
  },
  nombreGasto: {
    fontSize: 16,
    color: '#64748b',
    marginBottom: 5,
  },
  cantidad: {
    fontSize: 13,
    fontWeight: '700'
  }
  ,
  fecha: {
    color: '#DB2777',
    fontWeight: '700'
  }
})

export default Gasto