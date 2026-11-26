import { FontAwesome6 } from "@react-native-vector-icons/fontawesome6";
import { Image, Text, View } from "react-native";

export default function Hotel() {
  return (
    <View style={{ padding: 20 }}>
      {/* View ก้อนที่ 1 */}
      <View style={{ flexDirection: "row" }}>
        <Image
          style={{ flex: 1, resizeMode: "cover", aspectRatio: 5 / 2, borderRadius: 20 }}
          source={require("../../../assets/week3/room-1.jpg")}
        />
      </View>

      {/* View ก้อนที่ 2 */}
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <FontAwesome6 name="location-dot" size={15} color="red" iconStyle="solid" />
        <Text style={{ fontSize: 10, color: "gray" }}> 553 Cislason Radial</Text>
      </View>

      {/* View ก้อนที่ 3 */}
      <View style={{ marginTop: 10 }}>
        <Text style={{ fontSize: 20 }}>Boston Hotel</Text>
      </View>

      {/* View ก้อนที่ 4 */}
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
        <View style={{ flexDirection: "row" }}>
          <FontAwesome6 name="star" size={20} color="orange" iconStyle="solid" />
          <FontAwesome6 name="star" size={20} color="orange" iconStyle="solid" />
          <FontAwesome6 name="star" size={20} color="orange" iconStyle="solid" />
          <FontAwesome6 name="star" size={20} color="orange" iconStyle="solid" />
          <FontAwesome6 name="star-half" size={20} color="orange" iconStyle="solid" />
        </View>
        <View>
          <Text style={{ fontSize: 16, color: "gray" }}>100 Reviews</Text>
        </View>
      </View>

      {/* View ก้อนที่ 5 */}
      <View style={{ marginTop: 10 }}>
        <Text style={{ fontSize: 20, color: "red" }}>$125</Text>
      </View>
    </View>
  );
}