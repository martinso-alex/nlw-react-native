import React from 'react'
import {
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  View
} from 'react-native'

import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core'

import watering from '../assets/watering.png'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

export function Welcome () {
  const navigation = useNavigation()

  function handleNavigation () {
    navigation.navigate('Identification')
  }

  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Gerencie suas plantas {'\n'}
          de forma fácil
        </Text>

        <Image
          source={watering}
          resizeMode="contain"
        />

        <Text style={styles.subtitle}>
          Não esqueça mais de regar as suas plantas. {'\n'}
          Nós cuidamos de lembrar você {'\n'}
          sempre que precisar.
        </Text>

        <TouchableOpacity 
          style={styles.button} 
          activeOpacity={0.4}
          onPress={handleNavigation}
        >
          <Feather
            name="chevron-right"
            style={styles.buttonIcon}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

var {height, width} = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: height * 0.1
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 34
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.text
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: width * 0.05,
    borderRadius: 5,
    height: 56
  },
  buttonIcon: {
    color: colors.white,
    fontSize: 24
  }
})