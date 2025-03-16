import { StyleSheet } from "react-native";
import type { PropsWithChildren } from "react";
import { ThemedView } from "@/components/ThemedView";

type Props = PropsWithChildren;

export default function Container({ children }: Readonly<Props>) {
  return <ThemedView style={styles.content}>{children}</ThemedView>;
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: "hidden",
  },
});
