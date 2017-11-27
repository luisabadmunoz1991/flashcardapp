import { StyleSheet, Platform, Dimensions } from 'react-native'
let { height, width } = Dimensions.get('window')

import { rojo, verde, gray, white, blue,  black, azul, azulcielo, azulpastel, rosita, azulfuerte,orange,green} from './color'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#313C86'
  },

  completed1:{

    justifyContent:'center',
    flex:2
  },
  flex1:{
    flex: 1
  },
  flex2:{
    flex: 2
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
    fontSize:29,
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

  buttonverde: {
    padding: 15,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 25,
    marginTop: 23,
    backgroundColor:verde
  },

    buttonrojo: {
    padding: 15,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 25,
    marginTop: 23,
    backgroundColor:rojo
  },
  button: {
    padding: 15,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 25,
    backgroundColor:white
    
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
    color:white,
    width: Math.floor(width * 0.8)

  },

  lore: {
    color: orange,
    marginBottom: 5
  },
  question: {
     color: green, 
     marginBottom: 5
  },

  quiz1:{
    flex:4,
    justifyContent:'center', 
  
  },

  cuadro:{
    width: Math.floor(width * 0.8)
  },

  display:{
    flex: 4,
     alignItems:'center', 
     justifyContent:'center'
  }, 
  quiz2:{
    flex: 4, 
    justifyContent:'center', 
    alignItems: 'center'
  },
  button3:{
     padding: 15,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 25,
    backgroundColor:blue
  }

  
})
