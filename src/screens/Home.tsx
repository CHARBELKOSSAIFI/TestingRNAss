import {View, Text, Button} from 'react-native';
import React from 'react';
import {styles} from '../styles/Styles';
import {useNavigation} from '@react-navigation/native';
import PhotoGallery from '../components/PhotoGallery';

const Home = () => {
  const navigation = useNavigation();

  const navigateToProfile = () => {
    navigation.navigate('CameraScreen');
  };

  return (
    <View style={styles.Button}>
      <Text>Home</Text>

      <View style={styles.Buttons}>
        <Button title="Go to Camera" onPress={navigateToProfile} />
      </View>
    </View>
  );
};
export default Home;
