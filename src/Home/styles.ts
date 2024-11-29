import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
  },
  section: {
    padding: 16,
    width: '100%'
  },
  content: {
    marginTop: -48,
    flexDirection: 'row'
  },
  textInput: {
    height: 54,
    backgroundColor: "#262626",
    padding: 16,
    fontSize: 16,
    color: "#F2F2F2",
    borderWidth: 1,
    borderColor: "#0D0D0D",
    borderStyle: "solid",
    borderRadius: 6,
    flex: 1,
  },
  button: {
    height: 54,
    backgroundColor: "#1E6F9F",
    color: "#F2F2F2",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    width: 52,
    marginLeft: 4,
  },
  buttonText: {
    fontSize: 18,
  },
  summary: {
    width: '100%',
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 32
  },
  summaryItem: {
    flexDirection: "row",
    gap: 8
  },
  summaryLabel: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#4EA8DE"
  },
  summaryItemBadge: {
    backgroundColor: "#333333",
    borderRadius: 999,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 8,
    paddingRight: 8,
    color: "#D9D9D9",
    fontSize: 12,
  },
  list: {
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#333333",

  }
})