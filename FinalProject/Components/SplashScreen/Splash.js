import React from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";

const Splash = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.img}>
        <Image
          source={require("../../assets/warung-amel-black.png")}
          style={styles.wrgAmel}
        />
      </View>
      <View style={styles.TouchableOpacity}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SignIn", { name: "sign in" })}
        >
          <Text style={styles.text}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
    padding: 54,
    // paddingHorizontal: 40,
    marginTop: "50%",
  },
  wrgAmel: {
    width: "139%",
    height: "60%",
  },
  TouchableOpacity: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 300,
    height: 56,
    backgroundColor: "#772222",
    borderRadius: 10,
  },
  text: {
    color: "white",
    marginTop: "6%",
    marginLeft: "37%",
  },
});

export default Splash;
