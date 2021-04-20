import React from 'react'
import { SafeAreaView, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'

import watering from '../assets/watering.png'
import colors from '../styles/colors'
import { Button } from '../components/Button'

export function Welcome () {
  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie {'\n'}
        suas plantas {'\n'}
        de forma fácil
      </Text>

      <Image source={watering} style={styles.image} />

      <Text style={styles.subtitle}>
        Não esqueça mais de regar as suas plantas. 
        Nós cuidamos de lembrar você sempre que precisar.
      </Text>

      <Button title="Avançar" />
    </SafeAreaView>
  )
}

var {height, width} = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: height * 0.1,
    marginHorizontal: width * 0.1
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    color: colors.heading
  },
  image: {
    width: 292,
    height: 284
  }
})