import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Platform, Dimensions } from 'react-native'

import FlipCard from 'react-native-flip-card'
import styles from '../utils/styles'
import { blue} from '../utils/color'

let { height, width } = Dimensions.get('window')

class Card extends Component {

  state = {
    showAnswer: false
  }


  componentWillReceiveProps () {
    this.setState({showAnswer: false})
  }

  render(){
    const { data } = this.props
    const { showAnswer } = this.state

    return (
      <View style={styles.container}>
        <FlipCard flip={showAnswer}
          perspective={Platform.OS === 'ios' ? 0 : 800}
          friction={8}
          flipHorizontal={true}
          flipVertical={false}>
          <View style={[styles.quizCard, styles.cardFace]}>
            <Text style={styles.sintilla}>
              {data.question + '?'}
            </Text>
            <Text style={styles.lore}>Show Answer</Text>
          </View>
          <View style={[styles.quizCard, styles.cardBack]}>
            <Text style={styles.sintilla}>
              {data.answer}
            </Text>
            <Text style={styles.questi}>Question</Text>
          </View>
        </FlipCard>
      </View>
    )
  }
}

export default Card
