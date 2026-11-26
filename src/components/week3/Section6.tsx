import { Image, Text, View } from "react-native";

export default function Section6() {
  return (
    <View style={{ flexDirection: "column", marginHorizontal: 20, marginVertical: 10 }}>
      <Text style={{ fontSize: 16, fontWeight: "bold" }}>Location</Text>
      <Text style={{ color: "#444444", marginVertical: 5 }}>
        218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor
        incididunt ut labore et ...
      </Text>
      <View>
        <Image
          style={{ width: "100%", aspectRatio: 3 / 1.5, resizeMode: "cover" }}
          source={require("../../../assets/week3/map.jpg")}
        />
      </View>
    </View>
  );
}