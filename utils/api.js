import { AsyncStorage } from 'react-native'
import shortid from 'shortid'

export const CARD_STORAGE_KEY = 'MobileFlashCards:card'
export const NOTIFICATION_KEY = 'MobileFlashCards:notifications'

export const initData = {
  React: {
    id: 'React',
    timestamp: '012390123',
    title: 'React',
    backgroundColor: '#f26f28',
    deleted: false,
    questions: [
      {
        question: 'what is react  native?',
        answer: 'its just the best thing in the programing people?',
        deleted: false,
        id: 1
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event',
        deleted: false,
        id: 2
      }
    ]
  },
  JavaScript: {
    id: 'JavaScript',
    timestamp: '012390124',
    title: 'JavaScript',
    backgroundColor: '#7c53c3',
    deleted: false,
    questions: [
      {
        question: 'is JavaScript the best lenguaje on the world??',
        deleted: false,
        answer: 'its a lenguaje who makes more easy all on programing time'
      }
    ]
  }
}

export const getDecks = () => {
    return AsyncStorage.getItem(CARD_STORAGE_KEY)
      .then(JSON.parse)
      .then(res => {
        return res
      })
      .then(res => ({
        status: 200,
        data: res,
        info: 'fetch deck info succeed'
      }))
      .catch(err => ({
        status: 500,
        data: null,
        info: 'An ERROR occured when fetching specific deck'
      }))
}

export const getDeck = ({id}) => {
    return AsyncStorage.getItem(CARD_STORAGE_KEY)
        .then(JSON.parse)
        .then(res => {
          return res
        })
        .then(res => ({
          status: 200,
          data: res[id] || null,
          info: 'fetch deck info succeed'
        }))
        .catch(err => ({
          status: 500,
          data: null,
          info: 'An ERROR occured when fetching specific deck'
        }))
}

export const saveDeckTitle = ({ title }) => {
  let _deck = newDeckData(title)
  return AsyncStorage.mergeItem(CARD_STORAGE_KEY, JSON.stringify(_deck))
    .then(() => ({
      status: 200,
      data: _deck,
      info: 'add deck succeed'
    }))
    .catch(err => ({
      status: 500,
      data: null,
      info: 'An ERROR occured when adding new deck'
    }))
}

export const addCardToDeck = ({ id, card }) => {
  return getDeck({id})
    .then(res => res.data)
    .then(res => {
    if (!res) return {
      status: 500,
      data: null,
      info: 'An ERROR occured when adding card to deck'
    }
    let _targetDeck = JSON.parse(JSON.stringify(res))
    _targetDeck.questions && _targetDeck.questions.push(newCardData(card))

    AsyncStorage.mergeItem(CARD_STORAGE_KEY, JSON.stringify({
      [id]: _targetDeck
    }))
    return {
      status: 200,
      data: _targetDeck,
      info: 'Card add succeed'
    }
  }).catch(err => ({
    status: 500,
    data: null,
    info: 'An ERROR occured when adding card to deck'
  }))
}

function newCardData (card) {
  const _uid = shortid.generate()
  return {
    id: _uid,
    deleted: false,
    ...card
  }
}

function newDeckData (title) {
  const _uid = shortid.generate()
  return {
    [_uid]: {
      id: _uid,
      timestamp: new Date().getTime(),
      title,
      questions: [],
      deleted: false
    }
  }
}

AsyncStorage.getItem(CARD_STORAGE_KEY)
  .then(JSON.parse)
  .then(res => {
    if (!res) {
      AsyncStorage.setItem(CARD_STORAGE_KEY, JSON.stringify(initData))
    }
  })
