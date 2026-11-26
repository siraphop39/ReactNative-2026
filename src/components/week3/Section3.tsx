import { Text, View } from "react-native";

export default function Section3() {
  return (
    <View style={{ padding: 20 }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: "#E8604C",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 16 }}>9.5</Text>
        </View>
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 18, color: "#E8604C" }}>Excellent</Text>
          <Text style={{ fontSize: 12 }}>See 801 reviews</Text>
        </View>
      </View>
    </View>
  );
}