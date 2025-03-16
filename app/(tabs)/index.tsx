import { StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Container from "@/components/Container";

export default function HomeScreen() {
  return (
    <Container>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Clientes</ThemedText>
      </ThemedView>
    </Container>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});
