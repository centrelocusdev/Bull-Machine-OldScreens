import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Gradient from './components/Gradient';
export default function App() {
  return (
    <View style={styles.container}>
      <Gradient fromColor={"rgba(249, 202, 135, 1)"} toColor={"rgba(236, 50, 55, 1)"}>
        <Text>Hello</Text>
      </Gradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
