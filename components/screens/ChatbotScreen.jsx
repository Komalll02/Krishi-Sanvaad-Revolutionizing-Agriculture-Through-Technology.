import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const ChatbotScreen = () => {
  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState([]);

  const sendMessageToRasa = async (userMessage) => {
    try {
      // Replace '192.168.x.x' with your local machine's IP address
      const response = await axios.post('http://192.168.0.105:5005/webhooks/rest/webhook', {
        sender: 'user1',
        message: userMessage
      });

      // Process the bot's reply
      if (response.data && response.data.length > 0) {
        const botMessage = response.data[0].text;
        setConversation([...conversation, { sender: 'user', text: userMessage }, { sender: 'bot', text: botMessage }]);
      } else {
        setConversation([...conversation, { sender: 'user', text: userMessage }, { sender: 'bot', text: "Sorry, I didn't get that." }]);
      }
    } catch (error) {
      console.error("Error connecting to Rasa:", error);
      setConversation([...conversation, { sender: 'user', text: userMessage }, { sender: 'bot', text: "Error connecting to the bot." }]);
    }
  };

  const handleSend = () => {
    if (message.trim()) {
      sendMessageToRasa(message);
      setMessage(''); // Clear the input field
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={conversation}
        renderItem={({ item }) => (
          <Text style={item.sender === 'bot' ? styles.botText : styles.userText}>
            {item.sender === 'bot' ? 'Bot: ' : 'You: '} {item.text}
          </Text>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <TextInput
        style={styles.input}
        value={message}
        onChangeText={setMessage}
        placeholder="Type a message..."
      />
      <Button title="Send" onPress={handleSend} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  userText: {
    textAlign: 'right',
    marginVertical: 5,
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: 10,
    borderRadius: 10,
  },
  botText: {
    textAlign: 'left',
    marginVertical: 5,
    backgroundColor: '#2196F3',
    color: '#fff',
    padding: 10,
    borderRadius: 10,
  },
});

export default ChatbotScreen;
