import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  Button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
  },

  Buttons: {
    marginRight: 15,
    marginVertical: 5,
    width: '100%',
  },
  hdRight: {
    marginRight: 10,
  },
  hdRightImg: {
    width: 130,
    height: 50,
  },

  CounterState: {
    justifyContent: 'center',
    flex: 5,
    alignItems: 'center',
    backgroundColor: 'yellow',
    marginTop: 200,
    width: 250,
    minHeight: 200,
  },
  TextCount: {
    fontSize: 30,
    color: 'red',
  },

  containerCamera: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  cameraContainer: {
    flex: 1,
    width: '100%',
  },
  camera: {
    ...StyleSheet.absoluteFillObject,
  },
  selectedImageCamera: {
    width: '100%',
    height: 300,
    marginBottom: 20,
  },
  chooseImageButtonCamera: {
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 50,
  },
  chooseImageTextCamera: {
    color: 'white',
  },
  buttonContainerCamera: {
    marginBottom: 20,
  },
  buttonCamera: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonTextCamera: {
    color: 'white',
  },
});
