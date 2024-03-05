import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Alert, Image, ScrollView } from 'react-native';

const ContactUsScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (firstName.trim() === '' || lastName.trim() === '' || phoneNumber.trim() === '' || message.trim() === '') {
      Alert.alert('Error', 'Please fill out all fields.');
    } else {
      // Here you can implement sending the message, for example, through an API
      Alert.alert('Success', 'Your message has been sent successfully.');
      setFirstName('');
      setLastName('');
      setPhoneNumber('');
      setMessage('');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../../../assets/CookPal.png')} // Replace with the actual image path
        style={styles.logo}
      />
      <Text style={styles.description}>
        You can reach out to us via email or phone for any inquiries or support:
      </Text>
      <Text style={styles.contactInfo}>
        Email: cookpal@gmail.com{'\n'}
        Phone: +1 (123) 456-7890
      </Text>
      <Text style={styles.additionalInfo}>
        Please fill out the information below:
      </Text>
      <TextInput
        style={styles.input}
        value={firstName}
        onChangeText={setFirstName}
        placeholder="First Name"
      />
      <TextInput
        style={styles.input}
        value={lastName}
        onChangeText={setLastName}
        placeholder="Last Name"
      />
      <TextInput
        style={styles.input}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        placeholder="Phone Number"
        keyboardType="phone-pad"
      />
      <TextInput
        style={[styles.input, styles.messageInput]}
        multiline
        numberOfLines={4}
        value={message}
        onChangeText={setMessage}
        placeholder="Enter your concern"
      />
      <Button title="Send Message" onPress={handleSendMessage} />

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 CookPal. All rights reserved.</Text>
      </View>

      {/* Line break */}
      <View style={styles.lineBreak} />

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  contactInfo: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  additionalInfo: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  messageInput: {
    height: 100,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#666',
  },
  lineBreak: {
    height: 40,
  },
});

export default ContactUsScreen;
