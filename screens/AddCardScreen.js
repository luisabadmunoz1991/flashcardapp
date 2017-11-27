import React, { Component } from 'react'
import { KeyboardAvoidingView, View, Text, TouchableOpacity, TextInput, Alert, Dimensions } from 'react-native'

import styles from '../utils/styles'
import { red, white} from '../utils/color'
import { addCardToDeck } from '../utils/api'

let { height, width } = Dimensions.get('window')

class AddCardScreen extends Component {

  state = {
    question: '',
    answer: ''
  }

  constructor(props){
    super(props);
    this.state = {
      question: '',
      answer: ''
    }
  }

  submit = () => {
    let _valid = this.valid()
    if (!_valid.result) {
      Alert.alert(
        'WARNING',
        `Porfavor Pon una pregunta ${_valid.info.toUpperCase()} para tu carta`,
        [
          {
            text: 'OK',
            onPress: () => {
              this[_valid.focus].focus()
            }
          },
        ],
        { cancelable: false }
      )
      return
    }
  
    const { question, answer } = this.state
    let card = { question, answer }
    const { navigation } = this.props
    const { id } = navigation.state.params

    addCardToDeck({
      id,
      card
    }).then(res => res.data)
    .then(res => {
      if (res) {
        this.setState({
          question: '',
          answer: ''
        })

        navigation.navigate('DeckDetail', {
            id: res.id,
            title: res.title
        })
      }
    })
  }

  valid = () => {
    const { question, answer } = this.state
    if (!question) {
      return {
        result: false,
        info: 'question',
        focus: 'questionEl'
      }
    }
    if (!answer) {
      return {
        result: false,
        info: 'answer',
        focus: 'answerEl'
      }
    }
    return {
      result: true
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.sintilla}>Ingresa tu pregunta</Text>
        <TextInput style={styles.textInput}
          autoCapitalize='sentences'
          autoCorrect={false}
          placeholder='Pregunta'
          ref={(el) => {
            this.questionEl = el
          }}
          style={styles.textInput}
          value={this.state.question}
          onChangeText={val => this.setState({question: val})}
          maxLength={100} />
        <Text style={styles.sintilla}>Ingresa tu respuesta</Text>
        <TextInput
          autoCapitalize='sentences'
          autoCorrect={false}
          placeholder='Respuesta'
          ref={(el) => {
            this.answerEl = el
          }}
          style={styles.textInput}
          value={this.state.answer}
          onChangeText={val => this.setState({answer: val})}
          maxLength={100} />
        <TouchableOpacity onPress={this.submit}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

export default AddCardScreen
