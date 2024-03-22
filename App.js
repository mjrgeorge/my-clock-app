import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';

export default function App() {
    let [fontsLoaded] = useFonts({
    inter_regular: Inter_400Regular,
    inter_bold: Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.container}>
      <Text style={{fontFamily: "inter_regular", fontSize: 20}}>Open up App.js to start working on your app!</Text>
      <Text style={{fontFamily: "inter_bold", fontSize: 20}}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
