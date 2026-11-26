import { View } from "react-native";
import MyIcon from "./MyIcon";

export default function Section5() {
  return (
    <View style={{ flexDirection: "row", marginHorizontal: 20, marginVertical: 10 }}>
      <MyIcon title="wifi" name="wifi" size={24} color="#4A8FA8" />
      <MyIcon title="coffee" name="mug-saucer" size={24} color="#4A8FA8" />
      <MyIcon title="bath" name="bath" size={24} color="#4A8FA8" />
      <MyIcon title="car" name="car" size={24} color="#4A8FA8" />
      <MyIcon title="paw" name="paw" size={24} color="#4A8FA8" />
    </View>
  );
}