import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#262626",
    borderRadius: 8,
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
    marginBottom: 8,
  },
  description: {
    color: "#F2F2F2",
    fontSize: 14,
    textAlign: "left",
    flexWrap: "wrap",
    flex: 1,
  }
})