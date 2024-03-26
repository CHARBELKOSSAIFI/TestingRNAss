import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Marker, PROVIDER_GOOGLE, enableLatestRenderer} from 'react-native-maps';
import MapView from 'react-native-maps';
//enableLatestRenderer();

export const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 34.1311488,
          longitude: 35.6646912,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker
          coordinate={{latitude: 34.1311488, longitude: 35.6646912}}
          title="Marker title"
          description="Marker description"
        />
      </MapView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    // height: 400,
    // width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
export default MapScreen;
