import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import {ICImage} from '../../definitions/components/ICImage';
import ImageBroken from '../../assets/svgs/ImageBroken';

const CImage = ({source, style, resizeMethod, onPress}: ICImage) => {
  const [loading, setLoading] = useState(true);
  const [hasFailedToLoad, setHasFailedToLoad] = useState(false);

  return (
    <Pressable onPress={onPress || undefined} style={style}>
      <Image
        source={source}
        style={{...style, ...styles.loadedImageStyle}}
        resizeMethod={resizeMethod}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
        onError={() => {
          setLoading(false);
          setHasFailedToLoad(true);
        }}
      />
      {loading && !hasFailedToLoad && (
        <View style={{...style, ...styles.loadingViewParent}}>
          <ActivityIndicator />
        </View>
      )}
      {!loading && hasFailedToLoad && (
        <View style={{...style, ...styles.loadingViewParent}}>
          <ImageBroken />
        </View>
      )}
    </Pressable>
  );
};

export default CImage;

const styles = StyleSheet.create({
  loadingViewParent: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    padding: '14%',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
    marginHorizontal: 0,
    marginVertical: 0,
    margin: 0,
    zIndex: 0,
  },
  loadedImageStyle: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
    marginHorizontal: 0,
    marginVertical: 0,
    margin: 0,
  },
});
