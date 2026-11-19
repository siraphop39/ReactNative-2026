import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>แบบฝึกหัด Flexbox</Text>

      <Link href="/flexbox/ex01" style={styles.link}>Ex01</Link>
      <Link href="/flexbox/ex02" style={styles.link}>Ex02</Link>
      <Link href="/flexbox/ex03" style={styles.link}>Ex03</Link>
      <Link href="/flexbox/ex04" style={styles.link}>Ex04</Link>
      <Link href="/flexbox/ex05" style={styles.link}>Ex05</Link>
      <Link href="/flexbox/ex06" style={styles.link}>Ex06</Link>
      <Link href="/flexbox/ex07" style={styles.link}>Ex07</Link>
      <Link href="/flexbox/ex08" style={styles.link}>Ex08</Link>
      <Link href="/flexbox/ex09" style={styles.link}>Ex09</Link>
      <Link href="/flexbox/ex10" style={styles.link}>Ex10</Link>
      <Link href="/flexbox/ex11" style={styles.link}>Ex11</Link>
      <Link href="/flexbox/ex12" style={styles.link}>Ex12</Link>

      <Link href="/page2" style={styles.link}>ไปหน้าที่ 2</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },
  link: {
    width: 180,
    padding: 12,
    borderRadius: 6,
    backgroundColor: "#2196F3",
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
});