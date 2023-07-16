import React, { useState } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

const ReportForm = ({ navigation, route }) => {
  const [selected, setSelected] = React.useState("");

  const data = [
    { key: "1", value: "Nasi Goreng" },
    { key: "2", value: "Mie Goreng/Mie Godog" },
    { key: "3", value: "Kwetiau Goreng" },
    { key: "4", value: "Bihun Goreng" },
    { key: "5", value: "Nasi + Ayam Goreng" },
    { key: "6", value: "Indomie Rebus + Goreng" },
  ];

  const [date, setDate] = useState(new Date());
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: false,
    });
  };

  const showDatepicker = () => {
    showMode("date");
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView>
        <ScrollView>
          <View style={styles.container1}>
            <Image
              source={require("../../assets/warung-amel-only.png")}
              resizeMode="contain"
              style={styles.image}
            />
            <Text style={styles.masukanMenu}>MASUKAN MENU</Text>
          </View>
          <View style={styles.form}>
            <View style={styles.date}>
              <Text style={styles.formText}>Tanggal Penjualan</Text>
              <TouchableOpacity
                style={styles.datePicker}
                onPress={showDatepicker}
              >
                <Text style={styles.dateText}>Masukkan Tanggal</Text>
              </TouchableOpacity>
              <Text style={{ marginTop: 10, fontWeight: "bold" }}>
                {date.toISOString().split("T")[0]}
              </Text>
            </View>
            <View>
              <Text style={styles.formText}>Nama Menu</Text>
              <SelectList
                setSelected={(val) => setSelected(val)}
                data={data}
                placeholder="Masukkan Menu"
              />
            </View>
            <View>
              <Text style={styles.formText}>Jumlah</Text>
              <TextInput
                placeholder="Masukkan Jumlah"
                style={styles.placeholder1}
                keyboardType="number-pad"
              />
            </View>
            <View style={styles.group3}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.kirim}>Kirim</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    alignItems: "center",
    justifyContent: "center",
  },
  masukanMenu: {
    fontSize: 22,
    marginHorizontal: "10%",
  },
  image: {
    width: 279,
    height: 94,
    margin: "10%",
  },
  form: {
    width: "90%",
    marginTop: "10%",
    marginStart: "5%",
    padding: 8,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: "white",
    alignContent: "center",
    justifyContent: "center",
    marginBottom: "9%"
  },
  date: {
    marginTop: "5%",
  },
  datePicker: {
    width: "100%",
    height: 45,
    borderRadius: 10,
    backgroundColor: "#772222",
  },
  dateText: {
    color: "white",
    marginTop: "4%",
    marginStart: "29%",
  },
  formText: {
    color: "#121212",
    marginTop: 5,
    marginBottom: 10,
  },
  group: {
    width: 279,
    height: 89,
  },
  placeholder1: {
    height: 50,
    width: "100%",
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 15,
  },
  group3: {
    width: 165,
    height: 56,
    marginTop: 40,
    marginLeft: "23%",
    marginBottom: 10,
  },
  button: {
    width: 165,
    height: 56,
    backgroundColor: "#772222",
    borderRadius: 10,
  },
  kirim: {
    color: "white",
    marginTop: "9%",
    marginStart: "40%",
  },
});

export default ReportForm;
