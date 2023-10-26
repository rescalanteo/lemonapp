import * as React from "react";
import {Text, View, StyleSheet, Image} from "react-native";


const WelcomeScreen = () => {
    return (
        <View>
            <Image
                style={styles.logo}
                source={require("../assets/little-lemon-logo.png")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: 'white',
      justifyContent: 'space-between',
    },
    contentContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      height: 200,
      width: 300,
      resizeMode: "contain",
    },
    title: {
      marginTop: 48,
      paddingVertical: 10,
      color: "#333333",
      textAlign: "center",
      fontSize: 20,
      fontWeight: "bold",
    },
  });

export default WelcomeScreen;