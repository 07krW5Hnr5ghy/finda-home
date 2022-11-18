import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,Text} from 'react-native';
import Slides from './components/Slides';


export default function App() {
  return (
    <View style={styles.container}>
      <Slides/>
      <StatusBar style='auto'/>
    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }
});
