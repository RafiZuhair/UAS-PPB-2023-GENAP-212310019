import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const Laporan = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoAndText}>
        <View style={styles.laporanKeuanganRow}>
          <Image
            source={require("../../assets/warung-amel-only.png")}
            resizeMode="contain"
            style={styles.image}
          />
        </View>
        <Text style={styles.laporText}>Laporan Keuangan</Text>
      </View>
      <View style={styles.group6}>
        <View style={styles.box}>
          <View style={styles.namaMenuRow}>
            <Text style={styles.tgl}>Tgl Penjualan</Text>
            <View>
              <Text style={styles.dataTgl}>14/07/23</Text>
            </View>
            <View style={styles.rect}></View>
            <Text style={styles.namaMenu}>Nama Menu</Text>
            <View>
              <Text style={styles.dataMenu}>nasi goreng</Text>
            </View>
            <View style={styles.rect}></View>
            <Text style={styles.jumlah}>Jumlah</Text>
            <View>
              <Text style={styles.dataJumlah}>1</Text>
            </View>
            <View style={styles.rect1}></View>
            <Text style={styles.harga}>Harga</Text>
            <View>
              <Text style={styles.dataHarga}>15.000</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.group4}>
        <View style={styles.totalKeseluruhanRow}>
          <Text style={styles.totalKeseluruhan}>Total Keseluruhan :</Text>
          <Text style={styles.loremIpsum3}>Rp. 100.000</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoAndText: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "8%",
  },
  laporText: {
    marginTop: "20%",
    fontWeight: "bold",
    fontSize: 20,
  },
  group6: {
    width: 350,
    height: 316,
    marginTop: "10%",
    marginHorizontal: "1%",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    padding: 30,
    paddingHorizontal: 20
  },
  box: {
    width: "110%",
    height: 316,
    borderWidth: 3,
    borderColor: "#000000",
    // flexDirection: "row",
    borderRadius: 8,
  },
  line: {
    width: 338,
    height: 4,
    marginTop: 30,
    marginLeft: 500,
    borderWidth: 3,
    borderColor: "#000000",
  },
  tgl: {
    fontWeight: 500,
    fontSize: 12,
    marginTop: 10,
    marginRight: -5,
    marginLeft: -14,
  },
  dataTgl: {
    marginTop: 37,
    marginLeft: -62,
    marginRight: -6,
  },
  namaMenu: {
    fontWeight: 500,
    fontSize: 12,
    marginTop: 10,
    marginLeft: 18,
    marginRight: 8,
  },
  dataMenu: {
    marginTop: 37,
    marginLeft: -76,
    marginRight: -6,
  },
  rect: {
    width: 4,
    height: 313,
    backgroundColor: "rgba(0,0,0,1)",
    marginLeft: 10,
  },
  jumlah: {
    fontWeight: 500,
    fontSize: 12,
    marginLeft: 5,
    marginTop: 10,
    marginRight: -23,
  },
  dataJumlah: {
    marginTop: 37,
    marginRight: -6,
  },
  rect1: {
    width: 4,
    height: 313,
    backgroundColor: "rgba(0,0,0,1)",
    marginLeft: 28,
  },
  harga: {
    fontWeight: 500,
    fontSize: 12,
    marginLeft: 26,
    marginTop: 10,
  },
  dataHarga: {
    marginTop: 37,
    marginRight: -6,
    marginLeft: -38,
  },
  namaMenuRow: {
    height: 316,
    flexDirection: "row",
    flex: 1,
    marginRight: 31,
    marginLeft: 19,
  },
  laporanKeuangan: {
    color: "#121212",
    marginTop: 11,
  },
  image: {
    width: "90%",
    height: 73,
    justifyContent: "center",
  },
  laporanKeuanganRow: {
    height: 73,
    flexDirection: "row",
    flex: 1,
  },
  group4: {
    width: 339,
    height: 17,
    flexDirection: "row",
    marginTop: "4%",
    marginLeft: 12,
  },
  totalKeseluruhan: {
    color: "#121212",
    fontWeight: 500,
  },
  loremIpsum3: {
    color: "#121212",
    marginLeft: 137,
    fontWeight: 500,
  },
  totalKeseluruhanRow: {
    height: 17,
    flexDirection: "row",
    flex: 1,
  },
});

export default Laporan;
