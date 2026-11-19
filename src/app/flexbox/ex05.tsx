import { View } from "react-native";

export default function Ex05() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: 75,
          height: 75,
          backgroundColor: "#50E3C2",
        }}
      />
      <View
        style={{
          width: 75,
          height: 75,
          backgroundColor: "#4A90E2",
        }}
      />
      <View
        style={{
          width: 75,
          height: 75,
          backgroundColor: "#9013FE",
        }}
      />
    </View>
  );
}