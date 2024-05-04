import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import MenuButton from "../../components/MenuButton/MenuButton";

export default function DrawerContainer(props) {
  const { navigation } = props;
  return (
    <View style={styles.content}>
      <View style={styles.container}>

        <MenuButton
          title="HOME PAGE"
          source={require("../../../assets/icons/hom2e.png")}
          onPress={() => {
            navigation.navigate("HOME");
            navigation.closeDrawer();
          }}
        />


        <MenuButton
          title="CATEGORIES"
          source={require("../../../assets/icons/categories.png")}
          onPress={() => {
            navigation.navigate("CATEGORIES");
            navigation.closeDrawer();
          }}
        />

        <MenuButton
          title="SEARCH"
          source={require("../../../assets/icons/search-icon.png")}
          onPress={() => {
            navigation.navigate("SEARCH");
            navigation.closeDrawer();
          }}
        />

        <MenuButton
          title="CONTACT US"
          source={require("../../../assets/icons/contact-us.png")}
          onPress={() => {
            navigation.navigate("CONTACTUS");
            navigation.closeDrawer();
          }}
        />

        <MenuButton
          title="ABOUT US"
          source={require("../../../assets/icons/aboutus.png")}
          onPress={() => {
            navigation.navigate("ABOUTUS");
            navigation.closeDrawer();
          }}
        />
      </View>
    </View>
  );
}

DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
};
