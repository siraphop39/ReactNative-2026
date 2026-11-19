import { View } from "react-native";

export default function Ex07() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-end",
      }}
    >
      <View style={{ width: 75, height: 75, backgroundColor: "#50E3C2" }} />
      <View style={{ width: 75, height: 75, backgroundColor: "#4A90E2" }} />
      <View style={{ width: 75, height: 75, backgroundColor: "#9013FE" }} />
    </View>
  );
}