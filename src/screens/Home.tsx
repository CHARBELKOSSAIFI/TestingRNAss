import React from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../styles/Styles';
import {useNavigation} from '@react-navigation/native';
import PhotoGallery from '../components/PhotoGallery';
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';

const Home = () => {
  const navigation = useNavigation();

  const navigateToCamera = () => {
    navigation.navigate('CameraScreen');
  };

  const navigateToMap = () => {
    navigation.navigate('MapScreen');
  };

  const handlePanGesture = (event: {nativeEvent: any}) => {
    const {translationX} = event.nativeEvent;

    // You can adjust the threshold for swipe detection
    const swipeThreshold = 50;

    if (translationX > swipeThreshold) {
      navigateToCamera();
    } else if (translationX < -swipeThreshold) {
      navigateToMap();
    }
  };

  return (
    <GestureHandlerRootView style={styles.containerGesture}>
      <PanGestureHandler onGestureEvent={handlePanGesture}>
        <View style={styles.containerGesture}>
          <Text>Home</Text>

          <View style={styles.Buttons}>
            <Button title="Go to Camera" onPress={navigateToCamera} />
            <Button title="Go to Map" onPress={navigateToMap} />
          </View>
          <View>
            <PhotoGallery />
          </View>
        </View>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
};

export default Home;
