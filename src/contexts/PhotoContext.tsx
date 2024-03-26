// PhotoContext.tsx
import React, {createContext, useContext, useState} from 'react';

interface Photo {
  id: string;
  uri: string;
  location: {
    latitude: number;
    longitude: number;
  };
}

interface PhotoContextType {
  photos: Photo[];
  addPhoto: (photo: Photo) => void;
  removePhoto: (id: string) => void;
}

const PhotoContext = createContext<PhotoContextType>({
  photos: [],
  addPhoto: () => {},
  removePhoto: () => {},
});

export const usePhotoContext = () => useContext(PhotoContext);

export const PhotoProvider: React.FC = ({children}) => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  const addPhoto = (photo: Photo) => {
    setPhotos(prevPhotos => [...prevPhotos, photo]);
  };

  const removePhoto = (id: string) => {
    setPhotos(prevPhotos => prevPhotos.filter(photo => photo.id !== id));
  };

  return (
    <PhotoContext.Provider value={{photos, addPhoto, removePhoto}}>
      {children}
    </PhotoContext.Provider>
  );
};
