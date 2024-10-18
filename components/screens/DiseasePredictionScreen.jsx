import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function DiseasePredictionScreen() {
  const [cropName, setCropName] = useState('');
  const [soilType, setSoilType] = useState('');
  const [region, setRegion] = useState('');
  const [prediction, setPrediction] = useState('');

  const handlePredict = () => {
    // Logic for predicting crop disease would go here.
    // For now, we'll just set a dummy prediction.
    setPrediction('No disease detected. Your crop is healthy!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crop Disease Prediction</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Crop Name"
        value={cropName}
        onChangeText={setCropName}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Soil Type"
        value={soilType}
        onChangeText={setSoilType}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Region"
        value={region}
        onChangeText={setRegion}
      />

      <Button title="Predict" onPress={handlePredict} color="#4CAF50" />

      {prediction ? (
        <Text style={styles.result}>{prediction}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    color: 'green',
    textAlign: 'center',
  },
});
