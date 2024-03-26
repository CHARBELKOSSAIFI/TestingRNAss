import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  Alert,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import {Camera, useCameraDevice} from 'react-native-vision-camera';
import * as ImagePicker from 'react-native-image-picker';
import {styles} from '../styles/Styles';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import RNFS from 'react-native-fs';
import {usePhotoContext} from '../contexts/PhotoContext'; // Import the context

const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const device = useCameraDevice('back');
  const camera = useRef<Camera>(null);
  const {addPhoto} = usePhotoContext();

  useEffect(() => {
    const requestPermission = async () => {
      try {
        if (Platform.OS === 'android') {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: 'Camera Permission',
              message: 'This app needs access to your camera to take photos.',
              buttonPositive: 'OK',
            },
          );
          if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
            console.log('Camera permission denied');
            return;
          }
        }

        const status = await Camera.requestCameraPermission();
        setHasPermission(status === 'granted');
      } catch (err) {
        console.error('Error requesting permissions:', err);
      }
    };

    requestPermission();
  }, []);

  const savePhotoToGallery = async (photoPath: string) => {
    try {
      // Get the directory path for the device's gallery
      const galleryDir = Platform.select({
        android: RNFS.ExternalDirectoryPath,
        ios: RNFS.DocumentDirectoryPath,
      });

      // Create the directory if it doesn't exist
      const photosDir = `${galleryDir}/MyAppPhotos`;
      await RNFS.mkdir(photosDir, {intermediate: true});

      // Construct the new path in the gallery directory
      const newFilePath = `${photosDir}/photo_${Date.now()}.jpg`;

      // Move the photo file to the gallery directory
      await RNFS.moveFile(photoPath, newFilePath);

      Alert.alert('Success', 'Photo saved to gallery');
    } catch (error) {
      Alert.alert('Error', 'Failed to save photo to gallery');
      console.error('Error saving photo to gallery:', error);
    }
  };

  const handleTakePhoto = async () => {
    if (camera.current) {
      try {
        const photo = await camera.current.takePhoto();
        console.log('Photo taken:', photo);
        if (photo && photo.path) {
          console.log('Photo path:', photo.path);
          // Save the taken photo to device storage
          savePhotoToGallery(photo.path);
          // Add the captured photo to the photo gallery
          addPhoto({
            id: photo.path,
            path: photo.path,
            location: {latitude: 0, longitude: 0},
          });
        } else {
          throw new Error('Invalid photo path');
        }
      } catch (error) {
        Alert.alert('Error', 'Failed to take photo');
        console.error('Error taking photo:', error);
      }
    }
  };
  const handleChooseImage = async () => {
    try {
      const options: ImagePicker.Options = {
        mediaType: 'photo',
      };

      ImagePicker.launchImageLibrary(options, response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else {
          console.log('ImagePicker Response: ', response);
          setSelectedImage(response.uri);
        }
      });
    } catch (err) {
      console.error('Error launching image picker:', err);
    }
  };

  const cameraProps = {
    autoFocus: 'on',
    flashMode: 'auto',
    zoom: 0.5,
    enableShutterSound: false,
    qualityPrioritization: 'speed',
    // Other camera props...
  };

  return (
    <View style={{flex: 1}}>
      {device && hasPermission && (
        <View style={styles.containerCamera}>
          <View style={styles.cameraContainer}>
            <Camera
              ref={camera}
              {...cameraProps}
              photo={true}
              style={styles.camera}
              device={device}
              pixelFormat="yuv"
            />
          </View>
          {selectedImage ? (
            <Image
              source={{uri: selectedImage}}
              style={styles.selectedImageCamera}
            />
          ) : (
            <TouchableOpacity
              style={styles.chooseImageButtonCamera}
              onPress={handleChooseImage}>
              <Text style={styles.chooseImageTextCamera}>
                Choose Image from Gallery
              </Text>
            </TouchableOpacity>
          )}
          <View style={styles.buttonContainerCamera}>
            <TouchableOpacity
              style={styles.buttonCamera}
              onPress={handleTakePhoto}>
              <Text style={styles.buttonTextCamera}>Take Photo</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default CameraScreen;
function savePhotoToGallery(_path: string) {
  throw new Error('Function not implemented.');
}
