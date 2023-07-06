import { useState } from "react";
import { View, SafeAreaView } from "react-native";

import { InputTask, ModalTask, TaskItem, TaskList } from "./components";
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
      <ModalTask
        isVisible={isVisible}
        selectedTask={selectedTask}
        setIsVisible={setIsVisible}
        onDeleteTask={onHandlerDelete}
      />
    </SafeAreaView>
  );
}
