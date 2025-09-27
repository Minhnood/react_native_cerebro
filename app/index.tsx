import HomeMe from '@/screens/home/HomeScreen';
import LoginPage from '@/screens/login/LoginPage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


function RootStack() {
  return (
    <Stack.Navigator initialRouteName="login">
      <Stack.Screen name="login" component={LoginPage} />
      <Stack.Screen name="Home" component={HomeMe} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
      <RootStack />
  );
}