import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import { useLocalSearchParams, router } from 'expo-router';

export default function HomeScreen() {
  const { name, desc, img } = useLocalSearchParams();

  const [exercises, setExercises] = useState([
    {
      id: '1',
      name: 'Push Ups',
      description: 'Strengthens chest and arms',
      image: 'pushup',
      completed: false,
    },
    {
      id: '2',
      name: 'Squats',
      description: 'Builds leg strength',
      image: 'https://images.unsplash.com/photo-1599058917765-a780eda07a3e',
      completed: false,
    },
    {
      id: '3',
      name: 'Plank',
      description: 'Improves core strength',
      image: 'https://images.unsplash.com/photo-1571019613914-85f342c1d4b4',
      completed: false,
    },
  ]);

  useEffect(() => {
    if (name) {
      setExercises((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          name: name as string,
          description: (desc as string) || 'No description',
          image: (img as string) || '',
          completed: false,
        },
      ]);
    }
  }, [name]);

  const toggleComplete = (id: string) => {
    setExercises((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fitness Tracker</Text>

      {/* ADD BUTTON */}
      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => router.push('/add')}
      >
        <Text style={styles.addText}>+ Add Exercise</Text>
      </TouchableOpacity>

      {/* LIST */}
      <FlatList
  data={exercises}
  keyExtractor={(item) => item.id}
 renderItem={({ item }) => (
  <TouchableOpacity
    style={styles.card}
    onPress={() =>
      router.push({
        pathname: '/details',
        params: {
          name: item.name,
          desc: item.description,
          img: item.image,
        },
      })
    }
  >
    {/* ✅ EVERYTHING MUST BE INSIDE */}

    <Text
      style={[
        styles.name,
        item.completed && { textDecorationLine: 'line-through' },
      ]}
    >
      {item.name}
    </Text>

    <TouchableOpacity
      style={styles.markBtn}
      onPress={(e) => {
        e.stopPropagation(); // prevents opening details
        toggleComplete(item.id);
      }}
    >
      <Text style={styles.markText}>
        {item.completed ? 'Done' : 'Mark'}
      </Text>
    </TouchableOpacity>

  </TouchableOpacity>
)}
/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F1F5F9',
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 15,
  },

  addBtn: {
    backgroundColor: '#2563EB',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
    elevation: 3,
  },

  addText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },

  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 14,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    // shadow
    elevation: 2,
  },

  name: {
    fontSize: 16,
    fontWeight: '500',
    color: '#0F172A',
  },

  completedText: {
    textDecorationLine: 'line-through',
    color: '#9CA3AF',
  },

  markBtn: {
    backgroundColor: '#2563EB',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },

  markText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
});