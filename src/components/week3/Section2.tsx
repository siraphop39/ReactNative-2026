import { FontAwesome6 } from "@react-native-vector-icons/fontawesome6";
import { Text, View } from "react-native";

export default function Section2() {
  return (
    <View
      style={{
        flex: 1,
        marginTop: -25,
        padding: 15,
        marginHorizontal: 20,
        backgroundColor: "white",
        borderRadius: 10,
        elevation: 4,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 4,
      }}
    >
      <Text style={{ fontSize: 20, textAlign: "center" }}>
        Hilton San Francisco
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "center", marginVertical: 5 }}>
        <FontAwesome6 name="star" size={12} color="orange" iconStyle="solid" />
        <FontAwesome6 name="star" size={12} color="orange" iconStyle="solid" />
        <FontAwesome6 name="star" size={12} color="orange" iconStyle="solid" />
        <FontAwesome6 name="star" size={12} color="orange" iconStyle="solid" />
        <FontAwesome6 name="star-half" size={12} color="orange" iconStyle="solid" />
      </View>
      <Text style={{ textAlign: "center", color: "gray" }}>
        Facilities provided may range from a modest quality mattress in a small
        room to large suites
      </Text>
    </View>
  );
}