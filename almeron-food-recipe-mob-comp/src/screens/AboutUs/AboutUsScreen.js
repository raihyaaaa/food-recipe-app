import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const AboutUsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.description}>
        <Text style={styles.bold}>Welcome to CookPal,</Text> your ultimate
        culinary companion! We are a team of passionate developers committed to
        creating innovative solutions using React Native and Expo.
      </Text>


      <Text style={styles.description}>
        <Text style={styles.bold}>At CookPal,</Text> we're passionate about
        bringing people together through the joy of cooking. Whether you're a
        seasoned chef or a kitchen novice, we're here to inspire, empower, and
        support you on your culinary journey.
      </Text>

      <Text style={styles.description}>
        <Text style={styles.bold}>Our mission at CookPal is simple:</Text> to
        inspire and empower you to cook with confidence and creativity. We
        believe that cooking should be fun, exciting, and inclusive, regardless
        of your skill level or experience. Whether you're looking to master a
        new recipe, explore different cuisines, or simply whip up a quick and
        tasty meal, CookPal is here to support you every step of the way.{'\n'}
      </Text>


      <View style={styles.memberContainer}>
        <Image
          source={require('../../../assets/members/buen.jpg')} // Replace with the actual image path
          style={styles.memberImage}
        />
        <Text style={styles.memberName}>Adrian Buen</Text>
        <Text style={styles.memberRole}>Leader{'\n'}</Text>
      </View>

      <View style={styles.memberContainer}>
        <Image
          source={require('../../../assets/members/raily.jpg')} // Replace with the actual image path
          style={styles.memberImage}
        />
        <Text style={styles.memberName}>Raily Almeron</Text>
        <Text style={styles.memberRole}>
          Main Programmer / UI Designs{'\n'}
        </Text>
      </View>


      <View style={styles.memberContainer}>
        <Image
          source={require('../../../assets/members/vasquez.jpg')} // Replace with the actual image path
          style={styles.memberImage}
        />
        <Text style={styles.memberName}>Christian Lloyd Vasquez</Text>
        <Text style={styles.memberRole}>UI Design Assistant{'\n'}</Text>
      </View>

       <View style={styles.memberContainer}>
        <Image
          source={require('../../../assets/members/mirabuna.jpg')} // Replace with the actual image path
          style={styles.memberImage}
        />
        <Text style={styles.memberName}>Loyd Ashlie Mirabuna</Text>
        <Text style={styles.memberRole}>Documentations{'\n'}</Text>
      </View>

      <View style={styles.memberContainer}>
        <Image
          source={require('../../../assets/members/cat.jpg')} // Replace with the actual image path
          style={styles.memberImage}
        />
        <Text style={styles.memberName}>Sebastian Kirt Santiano</Text>
        <Text style={styles.memberRole}>Documentations{'\n'}</Text>
      </View>
             <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 CookPal. All rights reserved.</Text>
      </View>
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

  memberContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  memberImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  memberName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  memberRole: {
    fontSize: 16,
    color: 'gray',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
  footerText: {
    fontSize: 12,
    color: '#666',
  },
});

export default AboutUsScreen;
