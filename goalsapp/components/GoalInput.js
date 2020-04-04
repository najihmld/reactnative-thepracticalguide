import React, { useState } from 'react'
import { TextInput, View, Button, StyleSheet, Modal } from 'react-native'

const GoalInput = props => {
  const [enteredGoal, setEnterdGoal] = useState('')

  const goalInputhandler = (enteredText) => {
    setEnterdGoal(enteredText)
  }

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal)
    setEnterdGoal('')
  }

  return (
    <Modal visible={props.visible} animationType="slide" >
        <View style={styles.inputContainer}>
        <TextInput
        placeholder="Course Goal"
        style={styles.textInput}
        onChangeText={goalInputhandler}
        value={enteredGoal}
        />
    <View style={styles.buttonContainer}>
     <Button style={styles.button} title='CANCEL' color='red' onPress={props.onCancel} />
     <Button style={styles.button} title='ADD' onPress={addGoalHandler} />
    </View>
    </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  textInput: {
    borderBottomColor:'#e7e7e7',
    width:'80%',
    borderBottomWidth:1,
    padding: 10,
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%'
  },
  button: {
    width: 80,
    marginHorizontal: 20,
    borderRadius: 10,
    elevation: 4,
  }
})
export default GoalInput