import React, { Component } from 'react'
import { Platform } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import DeckDetailScreen from './screens/DeckDetailScreen'
import DeckListScreen from './screens/DeckListScreen'
import QuizScreen from './screens/QuizScreen'
import AddCardScreen from './screens/AddCardScreen'
import AddDeckScreen from './screens/AddDeckScreen'

import { white, blue } from './utils/color'
import styles from './utils/styles'

const Home = TabNavigator({
  DeckList: {
    screen: DeckListScreen,
    navigationOptions: {
      tabBarLabel: 'DECKS',
      tabBarIcon: ({tintColor}) => Platform.OS === 'ios'
      ? <Ionicons size={33} name='ios-list-box-outline' style={{color:tintColor}} />
      : null
    }
  },
  AddDeck: {
    screen: AddDeckScreen,
    navigationOptions: {
      tabBarLabel: 'ADD DECK',
      tabBarIcon: ({tintColor}) => Platform.OS === 'ios'
      ? <MaterialIcons size={33} name='add-box' style={{color: tintColor}} />
      : null
    }
  }
}, {
  tabBarPosition: Platform.OS === 'ios' ? 'bottom' : 'top',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? blue : white ,
    showIcon: true
  }
})

export default StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  DeckDetail: {
    path: 'deckDetail/:id',
    screen: DeckDetailScreen,
    navigationOptions: ({navigation}) => ({
      headerStyle: styles.header,
      title: navigation.state.params.title
    })
  },
  AddCard: {
    path: 'addCard/:id',
    screen: AddCardScreen,
    navigationOptions: {
      headerStyle: styles.header,
      title: 'Add Card'
    }
  },
  Quiz: {
    path: 'quiz/:id',
    screen: QuizScreen,
    navigationOptions: {
      headerStyle: styles.header,
      title: 'Quiz'
    }
  }
})
