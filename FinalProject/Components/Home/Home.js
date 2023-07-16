import React from "react";
import {
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Home = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.logo}>
        <Image
          source={require("../../assets/warung-amel-only.png")}
          style={styles.img}
        />
      </View>
      <View style={{marginBottom: "27%"}}>
        <View style={styles.rect}>
          <TouchableOpacity onPress={() => navigation.navigate("ReportForm")}>
            <FontAwesome5
              name={"money-bill"}
              size={80}
              style={{ alignSelf: "center" }}
            />
            <Text style={styles.txt}>Penjualan</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rect1}>
          <TouchableOpacity onPress={() => navigation.navigate("Laporan")}>
            <FontAwesome5
              name={"balance-scale"}
              size={80}
              style={{ alignSelf: "center" }}
            />
            <Text style={styles.txt}>Laporan</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    flex: 4,
    marginTop: "30%",
    alignItems: "center",
    padding: 50,
  },
  img: {
    width: "119%",
    height: 70,
  },
  rect: {
    width: 145,
    height: 110,
    backgroundColor: "#E6E6E6",
    alignSelf: "center",
  },
  rect1: {
    width: 145,
    height: 110,
    backgroundColor: "#E6E6E6",
    marginTop: 61,
    alignSelf: "center",
  },
  txt: {
    textAlign: "center",
  },
});

export default Home;
