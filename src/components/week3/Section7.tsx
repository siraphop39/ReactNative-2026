import { Image, Text, View } from "react-native";

export default function Section7() {
  return (
    <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
      <View>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Room Type</Text>
      </View>
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <View>
          <Image
            style={{ width: 70, height: 70, borderRadius: 6 }}
            source={require("../../../assets/week3/room-8.jpg")}
          />
        </View>
        <View style={{ marginLeft: 10, flex: 1 }}>
          <Text style={{ fontSize: 14, fontWeight: "bold" }}>Standard Twin Room</Text>
          <Text style={{ fontSize: 16, color: "#E8604C", marginTop: 8 }}>$399.99</Text>
          <Text style={{ fontSize: 11, color: "#4A8FA8" }}>
            Hurry Up! This is your last room!
          </Text>
        </View>
      </View>
    </View>
  );
}