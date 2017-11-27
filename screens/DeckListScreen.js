import React, { Component } from 'react'
import { View, StyleSheet, ActivityIndicator, Platform, AsyncStorage } from 'react-native'
import { List, ListItem, Text, Body, Content } from 'native-base'

import styles from '../utils/styles'
import * as API from '../utils/api'

const CARD_STORAGE_KEY = 'MobileFlashCards:card'

class DeckListScreen extends Component {

  state = {
    list: null
  }

  constructor(props){
    super(props);
    this.state = {
      list: null
    }
  }

  componentWillMount(){
    this.fetchDeckList()
  }

  async fetchDeckList() {
    API.getDecks()
      .then(res => res.data)
      .then(res => {
        this.setState({ list: res })
      })
  }

  render() {
    const { list } = this.state
    const { navigation } = this.props

    if (list === null) {
      return (
        <ActivityIndicator style={styles.loading}/>
      )
    }
    
    return (
      <Content style={styles.content}>
        <List 
          style={styles.list}
          dataArray={list}
          renderRow={(l) =>
            <ListItem onPress={e => navigation.navigate('DeckDetail', {
                id: l.id,
                title: l.title
              })}>
              <Body>
                <Text>{l.title}</Text>
                <Text note>{`${l.questions.length} ${l.questions.length > 1 ? 'cards' : 'card'}`}</Text>
              </Body>
            </ListItem>
          }>
        </List>
      </Content>
    )
  }
}

export default DeckListScreen
