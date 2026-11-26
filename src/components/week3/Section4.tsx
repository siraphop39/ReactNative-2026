import { Text, View } from "react-native";

export default function Section4() {
  return (
    <View
      style={{
        marginHorizontal: 20,
        paddingVertical: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "lightgray",
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: "bold" }}>Hotel Description</Text>
      <Text style={{ color: "#444444", marginTop: 5 }}>
        218 Austen Mountain, consectetur adipiscing, sed eiusmod tempor
        incididunt ut labore et dolore
      </Text>
    </View>
  );
}