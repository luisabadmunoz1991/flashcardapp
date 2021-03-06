import React, { Component } from 'react'
import { View, Text, StyleSheet, ActivityIndicator, Dimensions, TouchableOpacity } from 'react-native'

import Card from '../components/Card'
import { getDeck } from '../utils/api'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'
import { red, white, blue, rojo, verde} from '../utils/color'

import styles from '../utils/styles'

class QuizScreen extends Component {

  state = {
    deckData: null,
    progress: 1,
    correct: 0,
    completed: false
  }

  constructor(props){
    super(props);
    this.state = {
      deckData: null,
      progress: 1,
      correct: 0,
      completed: false
    }
  }

  componentDidMount() {
    const { navigation } = this.props
    this.setState({
      deckData: navigation.state.params.deckData
    })
  }

  restart = () => {
    this.dailyCompleted()
    this.setState({
      progress: 1,
      correct: 0,
      completed: false
    })
  }

  completedBack = () => {
    const { navigation } = this.props
    this.dailyCompleted()
    navigation.goBack()
  }

  dailyCompleted = () => {
    clearLocalNotification()
    .then(setLocalNotification)
  }

  goNextQuestion = (bool) => {
    const { deckData } = this.state
    let _questions = deckData.questions.filter(item => !item.deleted)
    this.setState(state => ({
      progress: state.progress + 1 > _questions.length
                ? _questions.length
                : state.progress + 1,
      correct: bool
                ? state.progress + 1 > _questions.length + 1
                  ? state.correct
                  : state.correct + 1
                : state.correct,
      completed: state.progress + 1 > _questions.length
    }))
  }

  render() {

    const { deckData, progress, completed, correct } = this.state
    if (deckData === null) {
      return (
        <ActivityIndicator style={styles.loading}/>
      )
    }

    const { navigation } = this.props
    const _questions = deckData.questions

    return (
      <View style={styles.detailWrapper}>
        {
          completed
          ? <View style={styles.quiz2}>
              <Text style={styles.scoreText}>
                Total: {_questions.length}
              </Text>
              <Text style={styles.scoreText}>
                Correct: {correct}
              </Text>
              <Text style={styles.scoreText}>
                YOUR SCORE : { (correct / _questions.length * 100).toFixed(1) }
              </Text>
            </View>
          : <View style={styles.quiz2}>
              <Text style={styles.progressText}>
                {`${progress}/${_questions.length}`}
              </Text>
              <Card data={_questions[progress - 1]} />
            </View>
        }
        {
          completed
          ? <View style={styles.completed1}>
              <TouchableOpacity style={styles.flex1} onPress={this.restart}>
                <View style={styles.button3}>
                  <Text style={styles.buttonText2}>
                    Restart Quiz
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.flex1}  onPress={this.completedBack}>
                <View style={styles.button3}>
                  <Text style={styles.buttonText2}>
                    Back To Deck
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          : <View style={styles.flex2}>
              <TouchableOpacity onPress={e => this.goNextQuestion(true)}>
                <View style={styles.buttonverde}>
                  <Text style={styles.buttonText2}>
                    True
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity  style={styles.flex1} onPress={e => this.goNextQuestion(false)}>
                <View style={styles.buttonrojo}>
                  <Text style={styles.buttonText2}>
                    False
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
        }
      </View>
    )
  }
}

export default QuizScreen
