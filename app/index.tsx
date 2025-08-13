import HomeMe from '@/screens/home/HomeScreen';
import { StyleSheet, View } from 'react-native';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <HomeMe />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 41,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 21
  },
});
