import React from 'react';
import { View, Image, StyleSheet, Button } from 'react-native';

const SplashScreen = ({ navigation }) => {
  const handleRedirect = () => {
    navigation.navigate('DrawerStack');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/CookPal.png')} 
        style={styles.logo}
      />
      <Button title="Enter" onPress={handleRedirect} />


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', 
  },
  logo: {
    width: 200,
    height: 200,
  },
});

export default SplashScreen;
