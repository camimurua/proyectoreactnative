import { useState } from "react";
import { Text, View, Button, SafeAreaView, FlatList, Modal } from "react-native";

import { InputTask, TaskItem, TaskList } from "./components";
import { styles } from "./styles";

export default function App() {
  const [borderColor, setBorderColor] = useState("#C5C9E7");
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const onHandlerFocus = () => {
    setBorderColor("#424D9E");
  };

  const onHandlerBlur = () => {
    setBorderColor("#C5C9E7");
  };

  const onHandlerChangeText = (text) => {
    setTask(text);
  };

  const onHandlerCreateTask = () => {
    /* Cargo la lista */
    setTaskList([
      ...taskList,
      {
        id: Date.now().toString(),
        value: task,
      },
    ]);

    /* Vacío la variable task para cargar una nueva tarea */
    setTask("");
  };

  const onHandlerModal = (item) => {
    setIsVisible(true);
    setSelectedTask(item);
  };

  const onHandlerDelete = (id) => {
    setTaskList((prevTaskList) => prevTaskList.filter((task) => task.id !== id));
    setIsVisible(false);
  };

  const renderItem = ({ item }) => <TaskItem onPressItem={onHandlerModal} item={item} />;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <InputTask
          borderColor={borderColor}
          onHandlerFocus={onHandlerFocus}
          onHandlerBlur={onHandlerBlur}
          onHandlerChangeText={onHandlerChangeText}
          task={task}
          onHandlerCreateTask={onHandlerCreateTask}
        />
        <TaskList list={taskList} renderItem={renderItem} />
      </View>
      <Modal visible={isVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Detalle</Text>
          <View style={styles.modalOption}>
            <Text style={styles.modalMsg}>¿Estas seguro que quieres eliminar esta tarea?</Text>
            <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
          </View>
          <View style={styles.modalButtonContainer}>
            <Button title="Cancelar" color="#424D9E" onPress={() => setIsVisible(false)} />
            <Button
              title="Eliminar"
              color="red"
              onPress={() => onHandlerDelete(selectedTask?.id)}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
