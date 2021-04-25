import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Welcome } from '../pages/welcome'
import { Identification } from '../pages/identification'
import { Confirmation } from '../pages/confirmation'
import { PlantSelect } from '../pages/plant-select'
import { PlantSave } from '../pages/plant-save'

import colors from '../styles/colors'

const stackRoutes = createStackNavigator()

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    headerMode='none'
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.white
      }
    }}
  >
    <stackRoutes.Screen
      name="Welcome"
      component={Welcome}
    />

    <stackRoutes.Screen
      name="Identification"
      component={Identification}
    />

    <stackRoutes.Screen
      name="Confirmation"
      component={Confirmation}
    />

    <stackRoutes.Screen
      name="PlantSelect"
      component={PlantSelect}
    />

    <stackRoutes.Screen
      name="PlantSave"
      component={PlantSave}
    />
  </stackRoutes.Navigator>
)

export default AppRoutes