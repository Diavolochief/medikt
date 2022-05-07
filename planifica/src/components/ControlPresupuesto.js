import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Image, SafeAreaView } from 'react-native'
import globalStyles from '../styles'
import { formatearCantidad } from '../helpers'
import CircularProgress from 'react-native-circular-progress-indicator'

const ControlPresupuesto = ({ presupuesto, gastos }) => {
  const [disponible, setDisponible] = useState(0)
  const [gastado, setGastado] = useState(0)
  const [porcentaje, setPorcentaje] = useState(0)

  useEffect(() => {
    const totalGastado = gastos.reduce((total, gasto) => Number(gasto.cantidad) + total, 0)
    const totalDisponible = presupuesto - totalGastado
    
    const nuevoPorcentaje=(
      ((presupuesto-totalDisponible)/presupuesto)*100

    )
    setPorcentaje(nuevoPorcentaje)

    setGastado(totalGastado)
    setDisponible(totalDisponible)


  }, [gastos])

  return (

    <View style={styles.contenedor}>
      <View style={styles.centrarGrafica}>
       <CircularProgress
       value={porcentaje}
       duration={1500}
       radius={105}
       valueSuffix={'%'}
       title='Gastado'
       inActiveStrokeColor='#f5f5f5'
       inActiveStrokeWidth={25}
       activeStrokeColor='#3b82f6'
       activeStrokeWidth={20}
       titleStyle={{fontWeight:'bold', fontSize:20}}
       titleColor='#64748b'
       />
      </View>

      <View style={styles.contenedorTexto}>
        <Text style={styles.valor}>
          <Text style={styles.label}>Presupuesto:{' '}</Text>
          {formatearCantidad(presupuesto)}
        </Text>

        <Text style={styles.valor}>
          <Text style={styles.label}>Disponible{' '}:</Text>
          {formatearCantidad(disponible)}
        </Text>

        <Text style={styles.valor}>
          <Text style={styles.label}>Gastado:{' '}</Text>
          {formatearCantidad(gastado)}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    ...globalStyles.contenedor
  }
  ,
  centrarGrafica: {
    alignItems: 'center'
  },
  imagen: {
    height: 175,
    width: 175
  },
  contenedorTexto: {
    marginTop: 10,

  },
  valor: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10
  },
  label: {
    fontWeight: '700',
    color: '#3B82F6'
  },

})

export default ControlPresupuesto