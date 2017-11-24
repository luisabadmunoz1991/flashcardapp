import { StyleSheet, Platform, Dimensions } from 'react-native'
let { height, width } = Dimensions.get('window')

import { gray, white, blue,  black, azul, azulcielo, azulpastel, rosita, azulfuerte} from './color'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#313C86'
  },

   sintilla:{
    color: white,
   },


  header: {
    justifyContent: 'center',
    backgroundColor:azul,
    
  },
  loading: {
    flex: 1
  },
  list: {
    marginTop: (Platform.OS === 'ios') ? 30 : 0,
    backgroundColor: 'white'
  },
  content :{
    backgroundColor: 'white'
  },
  title: {
    paddingBottom: 20,
    color: blue
  },

   titledetalles: {
    paddingBottom: 20,
    color: white
  },
  counts2: {
    color:rosita
  },
  detailWrapper: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    padding: 15,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 25,
    
  },

    button2: {
    padding: 15,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 25,
    marginTop: 23
  },

    buttonText2: {
    alignSelf: 'center',
    color: white
  },
  buttonText: {
    alignSelf: 'center',
    color: black
  },

  scoreText: {
  },
  progressText: {
    fontSize: 28,
    marginTop: 15
  },
  quizCard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 280,
    margin: 20,
    borderRadius: 8,
    borderWidth: 0
  },
 

  textInput: {
    height: 50,
    borderRadius: 8,
    margin: 15,
    padding: 8,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: white,
    color:white

  },
  
})
