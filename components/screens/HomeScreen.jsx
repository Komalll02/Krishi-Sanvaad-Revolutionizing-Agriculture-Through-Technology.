import React, { useRef } from "react";
import { View, Text, Animated, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, ImageBackground } from "react-native";
import { Ionicons } from '@expo/vector-icons';  // Using Ionicons for icons

const HomeScreen = ({ navigation }) => {
  const scaleValue = useRef(new Animated.Value(1)).current;

  // Function to handle button scaling animation
  const animateImage = () => {
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 1.1,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      })
    ]).start();
  };

  return (
    <ImageBackground
      source={require('../../assets/images/Home.png')}  // Path to your background image
      style={styles.backgroundImage}
      imageStyle={{ opacity: 0.5 }}  // Adjust transparency
    >
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to KrishiSanvaad</Text>

        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.card, styles.chatbotButton]}  // Solid button
            onPress={() => navigation.navigate("Chatbot")}
          >
            <Ionicons name="chatbubble-ellipses-outline" size={24} color="white" />
            <Text style={styles.buttonText}>Chatbot</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.card, styles.marketButton]}  // Solid button
            onPress={() => navigation.navigate("Marketplace")}
          >
            <Ionicons name="cart-outline" size={24} color="white" />
            <Text style={styles.buttonText}>Marketplace</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.card, styles.cropButton]}  // Solid button
            onPress={() => navigation.navigate("CropPrediction")}
          >
            <Ionicons name="leaf-outline" size={24} color="white" />
            <Text style={styles.buttonText}>Crop Prediction</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.card, styles.diseaseButton]}  // Solid button
            onPress={() => navigation.navigate("DiseasePrediction")}
          >
            <Ionicons name="medkit-outline" size={24} color="white" />
            <Text style={styles.buttonText}>Disease Prediction</Text>
          </TouchableOpacity>
        </View>

        {/* Floating Action Button */}
        <TouchableOpacity
          style={styles.fab}
          onPress={() => alert('FAB Clicked!')}
        >
          <Ionicons name="help-circle-outline" size={28} color="white" />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: '#000080',
    marginBottom: 40,
    textAlign: "center",
    backgroundColor: 'rgba(255, 255, 255, 0.8)',  // Slightly transparent background
    padding: 10,
    borderRadius: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
    width: '100%',
    paddingHorizontal: 20,
  },
  card: {
    flex: 1,
    marginHorizontal: 10,
    borderRadius: 12,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  chatbotButton: {
    backgroundColor: '#1E88E5',  // Light blue 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 10,
  },
  marketButton: {
    backgroundColor: '#FF9800',  // Orange
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 10,
  },
  cropButton: {
    backgroundColor: '#4CAF50',  // Green
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 10,
  },
  diseaseButton: {
    backgroundColor: '#F44336',  // Red
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 10,
  },
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    backgroundColor: '#03A9F4',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
  },
});

export default HomeScreen;
