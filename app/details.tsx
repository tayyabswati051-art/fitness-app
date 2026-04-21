import { View, Text, Image, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function Details() {
  const { name, desc, img } = useLocalSearchParams();

  const getImage = () => {
    if (img === 'pushup') {
      return require('../assets/images/pushup.jpg');
    }

    return {
      uri:
        typeof img === 'string' && img.length > 0
          ? img
          : 'https://via.placeholder.com/300',
    };
  };

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>{name}</Text>

      <View style={styles.card}>
        <Image source={getImage()} style={styles.image} />

        <Text style={styles.desc}>
          {desc || 'No description'}
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E2E8F0',
  },

  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 15,
    color: '#0F172A',
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 15,

    // ❌ REMOVE fixed width
    width: '100%',

    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },

  image: {
    width: '100%',
    height: 200,
    borderRadius: 16,
    marginBottom: 15,
    resizeMode: 'cover',
  },

  desc: {
    fontSize: 16,
    color: '#475569',
    lineHeight: 22,
  },
});