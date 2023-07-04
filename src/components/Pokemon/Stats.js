import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Stats({stats}) {
  const barValue = (item) => {
    return {width: item.base_stat, ...styles.barStat}
  }
  return (
    <View>
      <View>
        {stats.map((item, index) => {
          return (
            <View key={index} style={styles.statsContainer}>
              <Text>{item.stat.name}</Text>
              <View style={styles.barContainer}>
                <View style={styles.bar}>
                  <View style={barValue(item)}></View>
                </View>
                <Text>{item.base_stat}</Text>
              </View>
            </View>
          )
        })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  textContainer: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  statsContainer:{
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  barContainer:{
    width: '40%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 20,
  },
  bar:{
    width: 100,
    height: 10,
    backgroundColor: '#CFD8DC',
    borderRadius: 10,
  },
  barStat:{
    height: 10,
    backgroundColor: 'green',
    borderRadius: 10,
  }
});