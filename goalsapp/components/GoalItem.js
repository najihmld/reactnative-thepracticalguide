import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const GoalItem = props => {
  return (
  <TouchableOpacity onPress={props.onDelete.bind( this, props.id )}>
    <View style={styles.listItem}>
    <Text>{props.title}</Text>
  </View>
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listItem: {
    margin:2,
    marginVertical:10,
    backgroundColor:'#fff',
    elevation: 4,
    padding: 10,
    borderRadius: 10
  }
})

export default GoalItem

