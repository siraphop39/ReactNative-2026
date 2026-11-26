import { Button, Text, View } from "react-native";

export default function Section8() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        borderTopWidth: 1,
        borderColor: "lightgray",
      }}
    >
      <View style={{ flexDirection: "column" }}>
        <Text style={{ fontSize: 12 }}>Price</Text>
        <Text style={{ fontSize: 20, color: "#E8604C" }}>$399.99</Text>
        <Text style={{ fontSize: 12 }}>AVG/Night</Text>
      </View>
      <View>
        <Button title="Book Now" color="#E8604C" />
      </View>
    </View>
  );
}