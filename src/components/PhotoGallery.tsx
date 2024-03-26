import React, {useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {usePhotoContext} from '../contexts/PhotoContext';
import Animated, {
  useSharedValue,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';

const PhotoGallery: React.FC = () => {
  const {photos} = usePhotoContext();
  const fadeAnim = useSharedValue(0);

  useEffect(() => {
    // Fade-in animation when the component mounts
    fadeAnim.value = withTiming(1, {duration: 1000}, () => {
      // Optional callback function after animation completes
      // You can add additional logic here if needed
      runOnJS(console.log)('Fade-in animation completed');
    });
  }, [fadeAnim]);

  return (
    <View>
      <Text>Photo Gallery</Text>
      <FlatList
        data={photos}
        renderItem={({item}) => (
          <Animated.View style={{opacity: fadeAnim.value}}>
            {/* Display each photo in the gallery */}
            <Text>Photo ID: {item.id}</Text>
            <Text>
              Location: {item.location.latitude}, {item.location.longitude}
            </Text>
            {/* You can display the photo itself using Image component */}
          </Animated.View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default PhotoGallery;
