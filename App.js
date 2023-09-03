import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import AppNavigation from './navigation/AppNavigation';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation/>
      <Toast/>
    </Provider>
  );
}
