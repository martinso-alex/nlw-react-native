import React from 'react'
import { TouchableOpacity, Text, StyleSheet, Dimensions, TouchableOpacityProps } from 'react-native'

import colors from '../styles/colors'

interface ButtonProps extends TouchableOpacityProps {
  title: string
}

export function Button ({ title } : ButtonProps) {
  return(
    <TouchableOpacity style={styles.button} activeOpacity={0.4}>
      <Text style={styles.buttonText}>
        { title }
      </Text>
    </TouchableOpacity>
  )
}

var {height, width} = Dimensions.get('window')

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: width * 0.2,
    borderRadius: 5,
    height: 56
  },
  buttonText: {
    color: colors.white,
    fontSize: 24
  }
})