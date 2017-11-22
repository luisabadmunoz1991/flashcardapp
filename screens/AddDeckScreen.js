import React, { Component } from 'react'
import { KeyboardAvoidingView, View, Text, TouchableOpacity, TextInput, Alert } from 'react-native'
import { saveDeckTitle } from '../utils/api'
import { red, azul,white} from '../utils/color'
import styles from '../utils/styles'


class AddDeckScreen extends Component {

  state = {
    deckTitle: ''
  }

  constructor(props){
    super(props);
    this.state = {
      deckTitle: ''
    }
  }

  submit = () => {
   
    let _valid = this.valid()
    if (!_valid.result) {
      Alert.alert(
        'WARNING',
        'Porfavor Ingresa el titulo de tu deck',
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
  
    const { deckTitle } = this.state
    const { navigation } = this.props
    saveDeckTitle({
      title: deckTitle
    }).then(res => res.data)
      .then(res => {
        if (res) {
          this.setState({
            deckTitle: ''
          })
          res = res[Object.keys(res)]
         
          navigation.navigate('DeckDetail', {
            id: res.id,
            title: res.title
          })
        }
      })
  }

  valid = () => {
    const { deckTitle } = this.state
    if (!deckTitle) {
      return {
        result: false,
        focus: 'deckTitleEl'
      }
    }
    return {
      result: true
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.sintilla}>What's the name</Text>
        <Text style={styles.sintilla}>of your</Text>
        <Text style={styles.sintilla}>Deck?</Text>
        <TextInput style={styles.textInput}
          autoCapitalize='sentences'
          autoCorrect={false}
          placeholder ='Deck name'
          ref={(el) => {
            this.deckTitleEl = el
          }}
          value={this.state.deckTitle}
          onChangeText={val => this.setState({deckTitle: val})}
          maxLength={20} />
        <TouchableOpacity onPress={this.submit}>
          <View style={[styles.button, {backgroundColor:white, marginTop: 20}]}>
            <Text style={styles.buttonText}>Create Deck</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

export default AddDeckScreen
