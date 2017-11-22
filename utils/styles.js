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
    fontSize:22
   },


  header: {
    justifyContent: 'center',
    backgroundColor:azul,
    fontSize:29
    
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
    fontSize:29,
    paddingBottom: 20,
    color: blue
  },

   titledetalles: {
    fontSize:29,
    paddingBottom: 20,
    color: white
  },
  counts2: {
    fontSize:18,
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
    fontSize: 26,
    alignSelf: 'center',
    color: white
  },
  buttonText: {
    fontSize: 26,
    alignSelf: 'center',
    color: black
  },

  scoreText: {
    fontSize: 22
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
    fontSize: 22,
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
