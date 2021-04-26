import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native'

import { FlatList } from 'react-native-gesture-handler'
import { formatDistance } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { PlantCardSecondary } from '../components/PlantCardSecondary'
import { Header } from '../components/Header'
import { Load } from '../components/Load'

import { loadPlants, PlantProps } from '../libs/storage'
import waterdrop from '../assets/waterdrop.png'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

export function MyPlants () {
  const [myPlants, setMyPlants] = useState<PlantProps[]>([])
  const [loading, setLoading] = useState(true)
  const [nextWatering, setNextWatering] = useState<string>()

  useEffect(() => {
    async function loadStorageData () {
      const storagedPlants = await loadPlants()

      const nextTime = formatDistance(
        new Date(storagedPlants[0].dateTimeNotification).getTime(),
        new Date().getTime(),
        { locale: ptBR }
      )

      setNextWatering(
        `Não esqueça de regar a ${storagedPlants[0].name} em: ${nextTime}`
      )

      setMyPlants(storagedPlants)
      setLoading(false)
    }

    loadStorageData()
  }, [])

  if (loading) return <Load />

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.spotlight}>
        <Image
          source={waterdrop}
          style={styles.spotlightImg}
        />

        <Text style={styles.spotlightTxt}>
          {nextWatering}
        </Text>
      </View>

      <View style={styles.plants}>
        <Text style={styles.plantsTitle}>
          Próximas Regas
        </Text>

        <FlatList
          data={myPlants}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <PlantCardSecondary data={item} />
          )}
          showsVerticalScrollIndicator={ false }
          contentContainerStyle={{ flex: 1 }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingTop: 50,
    backgroundColor: colors.background
  },
  spotlight: {
    backgroundColor: colors.blue_light,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 30,
    height: 110,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  spotlightImg: {
    width: 60,
    height: 60
  },
  spotlightTxt: {
    flex: 1,
    color: colors.blue,
    paddingHorizontal: 20
  },
  plants:{
    flex: 1,
    width: '100%'
  },
  plantsTitle: {
    fontSize: 24,
    fontFamily: fonts.heading,
    color: colors.heading,
    marginVertical: 20
  }
})