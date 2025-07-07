import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import HomeScreen from './screens/HomeScreen';
import BottomDrawer from './components/BottomDrawer';

const App = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const handleOpenDrawer = () => {
    setIsDrawerVisible(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerVisible(false);
  };

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
        <SafeAreaView style={styles.safeArea}>
          <HomeScreen onOpenDrawer={handleOpenDrawer} />
          <BottomDrawer
            isVisible={isDrawerVisible}
            onClose={handleCloseDrawer}
          />
        </SafeAreaView>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default App;