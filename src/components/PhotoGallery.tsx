import React, {useRef, useEffect} from 'react';
import {FlatList, Text, View, Animated} from 'react-native';
import {usePhotoContext} from '../contexts/PhotoContext';

const PhotoGallery: React.FC = () => {
  const {photos} = usePhotoContext();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Fade-in animation when the component mounts
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true, // Add this for performance optimization
    }).start();
  }, [fadeAnim]);

  return (
    <View>
      <Text>Photo Gallery</Text>
      <FlatList
        data={photos}
        renderItem={({item}) => (
          <Animated.View style={{opacity: fadeAnim}}>
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
