import {View, Image, StyleSheet} from 'react-native';
import { Photo } from '@/data/photos';

interface PhotoGridProps {
  photos: Photo[];
}

const PhotoGrid = ({photos}: PhotoGridProps) => {
  return(
    <View style={styles.container}>
      {photos.map((photo) => (
        <Image
          key={photo.id}
          source={photo.image}
          style={styles.image}
        />
      ))}
  </View>
  )};

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#0B0F14',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    image: {
      width: '33.33%',
      aspectRatio: 3/4,
  },
  });

export default PhotoGrid;