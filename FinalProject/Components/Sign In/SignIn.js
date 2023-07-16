import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { TextInput } from "react-native";
import { Text } from "react-native";
import { View, StyleSheet } from "react-native";

const SignIn = ({navigation, route}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("")

  const handlerValidUser = () => {
    if(username === "" && password === "") {
      setError("fill the username or password");
      return;
    }

    if(username === "rafi136" && password === "Pass123") {
      navigation.navigate('Home', {name: 'rafi'});
    } else {
      setError("this account is not registered");
    }
  }

  return (
    <View style={{ padding: 20 }}>
      <View style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.text_label}>Sign In</Text>
        </View>
        <View style={styles.frm_row}>
          <Text style={styles.text_label}>Username</Text>
          <TextInput
            placeholder="Masukkan Username Anda"
            style={styles.input}
            onChangeText={setUsername}
          />
          
          <View style={styles.frm_row}>
            <Text style={styles.text_label}>Password</Text>
            <TextInput
              placeholder="Masukkan Password anda"
              style={styles.input}
              secureTextEntry={true}
              onChangeText={setPassword}
            />
          </View>
        </View>
        
        {error != "" && <Text style={{color: "red"}}>{error}</Text>}

        <TouchableOpacity style={styles.btn_login} onPress={handlerValidUser}>
          <Text style={styles.btn_login_txt}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Img: {
    width: "100",
    height: "50",
    justifyContent: "center",
  },
  container: {
    padding: 20,
    marginTop: "50%",
    backgroundColor: "white",
    borderRadius: 20,
  },
  frm_row: {
    marginBottom: 15,
    marginTop: 15,
  },
  text_label: {
    fontWeight: "bold",
    marginBottom: 10,
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    color: "#772222",
  },
  btn_login: {
    backgroundColor: "#772222",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop: 15,
  },
  btn_login_txt: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
});

export default SignIn;
