import { Image, StyleSheet, Text, View } from "react-native";

export default function ListEmpty(){
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/clipboard.png')} />
      <Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.subTitle}>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 48,
    paddingBottom: 48,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 14,
    marginTop: 16,
    color: "#808080",
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 14,
    color: "#808080",
  }
})