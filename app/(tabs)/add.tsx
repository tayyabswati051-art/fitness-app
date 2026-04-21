import { router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function AddExercise() {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [img, setImg] = useState('');

  const handleAdd = () => {
    if (!name.trim()) return;

    router.push({
      pathname: '/',
      params: { name, desc, img },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Exercise</Text>

      <TextInput
        placeholder="Exercise Name"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <TextInput
        placeholder="Description"
        style={styles.input}
        value={desc}
        onChangeText={setDesc}
      />

      <TextInput
        placeholder="Image URL"
        style={styles.input}
        value={img}
        onChangeText={setImg}
      />

      <TouchableOpacity style={styles.button} onPress={handleAdd}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F4F6F8' },

  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
input: {
  backgroundColor: '#fff',
  padding: 14,
  borderRadius: 10,
  marginBottom: 12,
  borderWidth: 1,
  borderColor: '#E2E8F0',
},

button: {
  backgroundColor: '#2563EB',
  padding: 16,
  borderRadius: 12,
  alignItems: 'center',
  marginTop: 10,
},

buttonText: {
  color: '#fff',
  fontWeight: '600',
  fontSize: 16,
},
});