import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Image} from 'react-native';
import {Camera, useCameraDevice} from 'react-native-vision-camera';
import * as ImagePicker from 'react-native-image-picker';
import {styles} from '../styles/Styles';

const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const device = useCameraDevice('back');
  const camera = useRef<Camera>(null);

  useEffect(() => {
    const requestPermission = async () => {
      const status = await Camera.requestCameraPermission();
      setHasPermission(status === 'granted');
    };

    requestPermission();
  }, []);

  const handleTakePhoto = async () => {
    if (camera.current) {
      const photo = await camera.current.takePhoto();
      console.log('Photo taken:', photo);
      // Handle the taken photo, such as saving it or displaying it
    }
  };

  const handleChooseImage = () => {
    ImagePicker.launchImageLibrary(
      {},
      (response: {
        didCancel: any;
        error: any;
        uri: React.SetStateAction<string | null>;
      }) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else {
          console.log('ImagePicker Response: ', response);
          setSelectedImage(response.uri);
        }
      },
    );
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
              isActive={isActive}
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
