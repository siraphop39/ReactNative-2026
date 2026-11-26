import { ScrollView, View } from "react-native";
import { Avatar, Card, Text } from "react-native-paper";

const reviews = [
  {
    name: "Grigoriy Kozhukhov",
    date: "Jun 2018",
    title: "Nice Place",
    text: "Andaz Tokyo Toranomon Hills is one of the newest luxury hotels in Tokyo. Located in one of the uprising areas of Tokyo",
    img: require("../../assets/week3/profile-2.jpg"),
  },
  {
    name: "Ea Tipene",
    date: "Jun 2018",
    title: "Great for families",
    text: "Andaz Tokyo Toranomon Hills is one of the newest luxury hotels in Tokyo. Located in one of the uprising areas of Tokyo",
    img: require("../../assets/week3/profile-3.jpg"),
  },
];

export default function Review() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ alignItems: "center", marginVertical: 20 }}>
        <Text style={{ fontSize: 48, color: "#e5654b" }}>4.7</Text>
        <Text>out of 5 • 25 Ratings</Text>
      </View>

      {reviews.map((r, i) => (
        <Card key={i} style={{ margin: 10, backgroundColor: "#f4f4f4" }}>
          <Card.Title
            title={r.name}
            subtitle={r.date}
            left={() => <Avatar.Image size={40} source={r.img} />}
          />
          <Card.Content>
            <Text variant="titleSmall">{r.title}</Text>
            <Text style={{ color: "grey" }}>{r.text}</Text>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
}