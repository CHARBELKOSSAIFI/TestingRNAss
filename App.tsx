import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import MainNavigator from './src/navigation/MainNavigator';
import {PhotoProvider} from './src/contexts/PhotoContext';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <PhotoProvider>
        <MainNavigator />
      </PhotoProvider>
    </NavigationContainer>
  );
}

export default App;
