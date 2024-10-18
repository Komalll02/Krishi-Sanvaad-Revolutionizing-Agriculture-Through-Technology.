import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const CropPredictionScreen = () => {
  const [soilType, setSoilType] = useState('');
  const [region, setRegion] = useState('');
  const [prediction, setPrediction] = useState('');

  const handlePredict = () => {
    // Example static response, replace with actual prediction logic
    setPrediction(`Suggested crop for ${soilType} in ${region}: Wheat`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Soil Type</Text>
      <TextInput
        style={styles.input}
        value={soilType}
        onChangeText={setSoilType}
        placeholder="Enter soil type"
      />
      <Text style={styles.label}>Region</Text>
      <TextInput
        style={styles.input}
        value={region}
        onChangeText={setRegion}
        placeholder="Enter region"
      />
      <Button title="Predict" onPress={handlePredict} color="#4CAF50" />
      {prediction && <Text style={styles.prediction}>{prediction}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  prediction: {
    marginTop: 20,
    fontSize: 20,
    color: 'blue',
  },
});

export default CropPredictionScreen;
