import React from 'react';
import { View, Image, StyleSheet, Button } from 'react-native';

const SplashScreen = ({ navigation }) => {
  const handleRedirect = () => {
    navigation.navigate('DrawerStack');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/CookPal.png')} // Replace with your splash screen image
        style={styles.logo}
      />
      <Button title="ENTER" onPress={handleRedirect} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // You can set any background color you want
  },
  logo: {
    width: 200,
    height: 200,
  },
});

export default SplashScreen;
