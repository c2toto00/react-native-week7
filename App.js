import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { PaperProvider } from "react-native-paper"
import { StatusBar } from 'expo-status-bar';
import MainAppbar from './components/MainAppbar';
import Settings from './screens/Settings';
import Home from './screens/Home';
import ThemeProvider from './context/ThemeProvider';

export default function App() {
    const Stack = createNativeStackNavigator()

    return (
        <PaperProvider>
            <ThemeProvider>
                <NavigationContainer>
                    <StatusBar backgroundColor='#666' barStyle="light-content" />
                    <Stack.Navigator initialRouteName="Home" screenOptions={{header: (props) => 
                        <MainAppbar {...props} backgroundColor="#666" icon="cog" color="#fff" />
                    }}>
                        <Stack.Screen name="Home">
                            {() => <Home />}
                        </Stack.Screen>
                        <Stack.Screen name="Settings" component={Settings} />
                    </Stack.Navigator>
                </NavigationContainer>
            </ThemeProvider>
        </PaperProvider>
    );
}
