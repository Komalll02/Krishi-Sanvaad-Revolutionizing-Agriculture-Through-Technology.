import React, { useState, useRef } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TextInput, Animated, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';  // Using Ionicons for icons

const data = [
  { id: '1', name: 'Wheat', price: '₹1500/quintal', image: require('../../assets/images/Wheat.png') },
  { id: '2', name: 'Rice', price: '₹1200/quintal', image: require('../../assets/images/Rice.png') },
  { id: '3', name: 'Corn', price: '₹1000/quintal', image: require('../../assets/images/corn.png') },
  { id: '4', name: 'Ragi', price: '₹1500/quintal', image: require('../../assets/images/Ragi.png') },
  { id: '5', name: 'Brown Rice', price: '₹1500/quintal', image: require('../../assets/images/BrownRice.png') },
  { id: '6', name: 'Rice', price: '₹1200/quintal', image: require('../../assets/images/Rice.png') },
  { id: '7', name: 'Corn', price: '₹1000/quintal', image: require('../../assets/images/corn.png') },
  { id: '8', name: 'Ragi', price: '₹1500/quintal', image: require('../../assets/images/Ragi.png') },
];

const MarketplaceScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const scaleValue = useRef(new Animated.Value(1)).current;
  const opacityValue = useRef(new Animated.Value(1)).current;

  const handleSearch = (text) => {
    setSearchQuery(text);
    if (text) {
      const newData = data.filter(item => {
        const itemName = item.name.toLowerCase();
        const textData = text.toLowerCase();
        return itemName.includes(textData);
      });
      setFilteredData(newData);
    } else {
      setFilteredData(data);
    }
  };

  const handlePressIn = () => {
    Animated.parallel([
      Animated.spring(scaleValue, {
        toValue: 0.95,
        useNativeDriver: true,
      }),
      Animated.timing(opacityValue, {
        toValue: 0.7,
        duration: 200,
        useNativeDriver: true,
      })
    ]).start();
  };

  const handlePressOut = () => {
    Animated.parallel([
      Animated.spring(scaleValue, {
        toValue: 1,
        useNativeDriver: true,
      }),
      Animated.timing(opacityValue, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      })
    ]).start();
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <TouchableOpacity
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          style={[styles.button, styles.buyButton]}
          onPress={() => alert(`Buying ${item.name}`)}
        >
          <Animated.View style={{ transform: [{ scale: scaleValue }], opacity: opacityValue }}>
            <Ionicons name="cart-outline" size={24} color="white" />
            <Text style={styles.buttonText}>Buy</Text>
          </Animated.View>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search..."
        value={searchQuery}
        onChangeText={text => handleSearch(text)}
      />
      <FlatList
        data={filteredData}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',  // Light background
  },
  searchBar: {
    height: 40,
    borderColor: '#4CAF50',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row', // Align image and text horizontally
    padding: 20,
    marginVertical: 10,
    backgroundColor: '#ffffff',  // White background
    borderRadius: 10,
    alignItems: 'center', // Vertically center the image and text
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,  // For Android shadow effect
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 20,
    borderRadius: 10,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',  // Dark text
  },
  price: {
    fontSize: 16,
    color: '#4CAF50',  // Green for price
    marginBottom: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,  // For Android shadow effect
  },
  buyButton: {
    backgroundColor: '#4CAF50',  // Green background for Buy button
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default MarketplaceScreen;
