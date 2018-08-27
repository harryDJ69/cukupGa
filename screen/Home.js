import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity
} from "react-native";
import { database } from "../node_modules/firebase";
import numeral from "numeral";
import pendapatan, { pengeluaran } from "../src/dana_keluar";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { pendapatan, pengeluaran };
  }

  render() {
    //Pendapatan
    let total_saldo_reguler = 0;
    let total_saldo_lainnya = 0;
    let total_pendapatan = 0;
    const ammount1 = this.state.pendapatan.map((data, index) => {
      const nominal1 = data.type === "lainnya" && data.jumlah;
      total_saldo_lainnya += nominal1;
    });
    const ammount2 = this.state.pendapatan.map((data, index) => {
      const nominal2 = data.type === "reguler" && data.jumlah;
      total_saldo_reguler += nominal2;
    });
    total_pendapatan = total_saldo_lainnya + total_saldo_reguler;

    //Pengeluaran
    let total_keluar_reguler = 0;
    let total_keluar_lainnya = 0;
    let total_pengeluaran = 0;
    let total_dana = 0;
    const ammount3 = this.state.pengeluaran.map((data, index) => {
      const nominal3 = data.type === "lainnya" && data.jumlah;
      total_keluar_lainnya += nominal3;
    });
    const ammount4 = this.state.pengeluaran.map((data, index) => {
      const nominal4 = data.type === "tetap" && data.jumlah;
      total_keluar_reguler += nominal4;
    });
    total_pengeluaran = total_keluar_lainnya + total_keluar_reguler;

    //Total Dana
    total_dana = total_pendapatan - total_pengeluaran;

    // Month;
    var date = new Date();
    var Month = date.getMonth() + 1;

    if (Month == 1) {
      Month2 = "Jan";
    } else if (Month == 2) {
      Month2 = "Feb";
    } else if (Month == 3) {
      Month2 = "Mar";
    } else if (Month == 4) {
      Month2 = "Apr";
    } else if (Month == 5) {
      Month2 = "May";
    } else if (Month == 6) {
      Month2 = "Jun";
    } else if (Month == 7) {
      Month2 = "Jul";
    } else if (Month == 8) {
      Month2 = "Aug";
    } else if (Month == 9) {
      Month2 = "Sep";
    } else if (Month == 10) {
      Month2 = "Okt";
    } else if (Month == 11) {
      Month2 = "Nov";
    } else {
      Month2 = "Des";
    }

    return (
      // Pendapatan

      <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <View style={styles.container1}>
          <View
            style={{
              marginLeft: "2%",
              flexDirection: "row"
            }}
          >
            <View style={{ marginTop: "2%" }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  fontFamily: "Roboto",
                  color: "#FFFFFF"
                }}
              >
                Cukup
              </Text>
            </View>
            <View style={{ marginTop: "0.5%" }}>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: "bold",
                  color: "#f89b00",
                  fontFamily: "sans-serif-medium"
                }}
              >
                ?
              </Text>
            </View>
            <View style={{ marginTop: "0.5%" }}>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: "bold",
                  color: "#FFFFFF",
                  fontFamily: "sans-serif-medium"
                }}
              >
                Ga
              </Text>
            </View>

            <View style={{ marginTop: "2%", marginLeft: "58%" }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#FFFFFF",
                  fontFamily: "Roboto"
                }}
              >
                {Month2}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.container2}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "2%"
            }}
          >
            <TouchableOpacity style={{}}>
              <Image
                style={{
                  height: 64,
                  width: 64,
                  marginTop: "1%",
                  justifyContent: "center"
                }}
                source={require("../asset_app/Dana.png")}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <TouchableOpacity style={{}}>
              <Image
                style={{
                  height: 64,
                  width: 64,
                  marginTop: "1%",
                  justifyContent: "center"
                }}
                source={require("../asset_app/Belanja.png")}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <TouchableOpacity style={{}}>
              <Image
                style={{
                  height: 64,
                  width: 64,
                  marginTop: "1%",
                  justifyContent: "center"
                }}
                source={require("../asset_app/myBro.png")}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <TouchableOpacity style={{}}>
              <Image
                style={{
                  height: 64,
                  width: 64,
                  marginTop: "1%",
                  justifyContent: "center"
                }}
                source={require("../asset_app/Logout.png")}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginTop: "1%",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <View style={{ marginLeft: "4.5%" }}>
              <Text style={{ color: "#ffffff", fontWeight: "bold" }}>
                {" "}
                Dana{" "}
              </Text>
            </View>

            <View style={{ marginLeft: "1%" }}>
              <Text style={{ color: "#ffffff", fontWeight: "bold" }}>
                {" "}
                Belanja{" "}
              </Text>
            </View>

            <View style={{ marginLeft: "0.555%" }}>
              <Text style={{ color: "#ffffff", fontWeight: "bold" }}>
                {" "}
                myBro{" "}
              </Text>
            </View>

            <View style={{ marginRight: "4%" }}>
              <Text style={{ color: "#ffffff", fontWeight: "bold" }}>
                {" "}
                Logout{" "}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.container3}>
          <View style={{ marginRight: "3%", width: "10%" }}>
            <Image
              style={{
                height: 52,
                width: 50,
                marginTop: "1%"
              }}
              source={require("../asset_app/Business-Man-256-3.png")}
              resizeMode="contain"
            />
          </View>

          <View style={{ width: "80%" }}>
            <Text
              style={{ fontSize: 20, color: "#676767", fontFamily: "Roboto" }}
            >
              Total Pendapatan :
            </Text>
            <Text
              style={{
                fontSize: 30,
                color: "#676767",
                fontWeight: "bold",
                fontFamily: "Roboto"
              }}
            >
              {numeral(total_pendapatan).format("0,0")}
            </Text>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: "3%",
                borderTopColor: "#C2C2C2",
                borderTopWidth: 1
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  color: "#676767",
                  fontFamily: "Roboto",
                  marginTop: "2%"
                }}
              >
                Tetap :{numeral(total_saldo_reguler).format("0,0")}{" "}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: "#676767",
                  fontFamily: "Roboto",
                  marginTop: "2%"
                }}
              >
                Lainnya : {numeral(total_saldo_lainnya).format("0,0")}
              </Text>
            </View>
          </View>
        </View>
        {/* pengeluaran */}
        <View style={styles.container4}>
          <View style={{ marginRight: "3%", width: "10%" }}>
            <Image
              style={{
                height: 60,
                width: 58,
                marginTop: "1%"
              }}
              source={require("../asset_app/ATM-256-2.png")}
              resizeMode="contain"
            />
          </View>

          <View style={{ width: "80%" }}>
            <Text
              style={{ fontSize: 20, color: "#676767", fontFamily: "Roboto" }}
            >
              Total Pengeluaran :
            </Text>
            <Text
              style={{
                fontSize: 30,
                color: "#676767",
                fontWeight: "bold",
                fontFamily: "Roboto"
              }}
            >
              {numeral(total_pengeluaran).format("0,0")}
            </Text>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: "3%",
                borderTopColor: "#C2C2C2",
                borderTopWidth: 1
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  color: "#676767",
                  fontFamily: "Roboto",
                  marginTop: "2%"
                }}
              >
                Tetap :{numeral(total_keluar_reguler).format("0,0")}{" "}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: "#676767",
                  fontFamily: "Roboto",
                  marginTop: "2%"
                }}
              >
                Lainnya : {numeral(total_keluar_lainnya).format("0,0")}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.container5}>
          <View style={{ marginRight: "3%", width: "10%" }}>
            <Image
              style={{
                height: 48,
                width: 46,
                marginTop: "1%"
              }}
              source={require("../asset_app/wallet.png")}
              resizeMode="contain"
            />
          </View>
          <View style={{ width: "80%" }}>
            <Text
              style={{ fontSize: 20, color: "#676767", fontFamily: "Roboto" }}
            >
              Dana anda saat ini :
            </Text>
            <Text
              style={{
                fontSize: 40,
                color: "#028A34",
                fontWeight: "bold",
                fontFamily: "Roboto",
                marginLeft: "7%"
              }}
            >
              {numeral(total_dana).format("0,0")}
            </Text>
          </View>
        </View>
        <View style={styles.container6}>
          <TouchableOpacity
            style={{
              backgroundColor: "#D6082A",
              borderRadius: 40,
              width: "48%",
              height: "50%",
              marginTop: "8%"
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignSelf: "center",
                justifyContent: "center"
              }}
            >
              <Image
                style={{
                  height: 42,
                  width: 40,
                  marginTop: "2%"
                }}
                source={require("../asset_app/bag.png")}
                resizeMode="contain"
              />
              <Text
                style={{
                  marginRight: "5%",
                  marginTop: "3%",
                  alignSelf: "center",
                  fontSize: 13,
                  color: "white",
                  fontWeight: "bold"
                }}
              >
                PENDAPATAN
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: "transparent",
              borderRadius: 40,
              width: "48%",
              height: "50%",
              marginTop: "8%",
              marginLeft: "7%",
              borderColor: "#676767",
              borderWidth: 3
            }}
          >
            <View
              style={{
                flexDirection: "row",
                marginLeft: "1%",
                justifyContent: "center"
              }}
            >
              <Image
                style={{
                  height: 42,
                  width: 40,
                  marginTop: "1%"
                }}
                source={require("../asset_app/cart2.png")}
                resizeMode="contain"
              />
              <Text
                style={{
                  justifyContent: "center",
                  alignSelf: "center",
                  fontSize: 13,
                  color: "#676767",
                  fontWeight: "bold",
                  marginRight: "5%",
                  fontWeight: "bold"
                }}
              >
                PENGELUARAN
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container1: {
    flex: 1.2,
    marginTop: "2%",
    marginLeft: "2%",
    marginRight: "2%",
    backgroundColor: "#b6022e",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  container2: {
    flex: 2.5,
    marginLeft: "2%",
    marginRight: "2%",
    backgroundColor: "#C70B38",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },

  container3: {
    flex: 3.5,
    marginTop: "7%",
    justifyContent: "center",
    flexDirection: "row",
    borderBottomColor: "#E6E6E6",
    borderBottomWidth: 2
  },

  container4: {
    flex: 3.5,
    marginTop: "2%",
    justifyContent: "center",
    flexDirection: "row"
    // borderBottomColor: "#E6E6E6",
    // borderBottomWidth: 2
  },
  container5: {
    flex: 2,
    marginTop: "2%",
    justifyContent: "center",
    flexDirection: "row"
  },
  container6: {
    flex: 3,
    marginTop: "1%",
    justifyContent: "center",
    width: "88%",
    alignSelf: "center",
    flexDirection: "row"
  }
});

export default Home;
