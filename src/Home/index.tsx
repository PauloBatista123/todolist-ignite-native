import { FlatList, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Header from "../Components/Header";
import { useState } from "react";
import TodoListItem from "../Components/TodoListItem";
import ListEmpty from "../Components/ListEmpty";

export type TodoItem = {
  description: string
  id: number
  completed: boolean
}

export default function Home(){
  const [list, setList] = useState<TodoItem[]>([])
  const [todo, setTodo] = useState<string>('')

  const summary = list.reduce((acc, item) => {
    if(item.completed){
      acc.cc += 1;
    }else {
      acc.cr += 1;
    } 

    return acc;
  },
  {
    cc: 0, 
    cr: 0
  })

  const handleAdd = () => {
      const newTodo: TodoItem = {
        completed: false,
        description: todo,
        id: Math.floor(Math.random() * 1000) + 1,
      }

      setList(prev => [...prev, newTodo]);
  }

  const handleToogle = (item: TodoItem) => {
    setList(prev => [...prev.filter(i => i.id !== item.id), {
      ...item,
      completed: !item.completed
    }])
  }

  const handleRemove = (item: TodoItem) => {
    setList(prev => [...prev.filter(i => i.id !== item.id)])
  }

  return (
     <View style={styles.container}>
        <StatusBar barStyle={"light-content"}/>
        <Header />
        <View style={styles.section}>
          <View style={styles.content}>
            <TextInput 
              placeholder="Adicione uma nova tarefa"
              placeholderTextColor={"#808080"}
              style={styles.textInput}
              onChangeText={(text) => setTodo(text)}
            />
            <TouchableOpacity style={styles.button} onPress={() => handleAdd()}>
              <Text style={styles.buttonText}>
                +
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.summary}>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryLabel}>Criadas</Text>
              <Text style={styles.summaryItemBadge}>{summary.cr}</Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryLabel}>Concluídas</Text>
              <Text style={styles.summaryItemBadge}>{summary.cc}</Text>
            </View>
          </View>
          <FlatList 
            style={styles.list}
            data={list}
            keyExtractor={({ id }) =>  `${id}`}
            renderItem={({ item, index }) => (
              <TodoListItem 
                item={item}
                onToggle={() => handleToogle(item)}
                onRemove={() => handleRemove(item)}
              />
            )}
            ListEmptyComponent={<ListEmpty />}
          />
        </View>
     </View>
  )
}