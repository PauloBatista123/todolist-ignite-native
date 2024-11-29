import { Image, Text, TouchableOpacity, View } from "react-native"
import { TodoItem } from "../../Home"
import { styles } from "./styles"

interface TodoProps {
  item: TodoItem
  onToggle: () => void
  onRemove: () => void
}

export default function TodoListItem({item, onToggle, onRemove}: TodoProps){
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onToggle}>
      {
        item.completed ? (
            <Image source={require('../../../assets/checked.png')} />
          ) : (
            <Image source={require('../../../assets/check.png')} />
        )
      }
      </TouchableOpacity>
      <Text style={[styles.description, {textDecorationLine: item.completed ? 'line-through' : 'none'}]}>{item.description}</Text>
      <TouchableOpacity onPress={onRemove}>
          <Image source={require('../../../assets/trash.png')} />
      </TouchableOpacity>
    </View>
  )
}