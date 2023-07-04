import { Text, View, TextInput, Button, StatusBar, Platform, SafeAreaView, FlatList, Modal, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';

export default function App() {
  const [borderColor, setBorderColor] = useState('#C5C9E7');
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const onHandlerFocus = () => {
    setBorderColor('#424D9E');
  }

  const onHandlerBlur = () => {
    setBorderColor('#C5C9E7');
  }

  const onHandlerChangeText = (text) => {
    setTask(text);
  }

  const onHandlerCreateTask = () => {
    /* Cargo la lista */
    setTaskList(
      [...taskList, 
        {
          id: Date.now().toString(),
          value: task
        }
      ]
    );

    /* Vacío la variable task para cargar una nueva tarea */
    setTask('');
  }

  const onHandlerModal = (item) => {
    setIsVisible(true);
    setSelectedTask(item);
  }

  const onHandlerDelete = (id) => {
    setTaskList((prevTaskList) => prevTaskList.filter((task) => task.id != id));
    setIsVisible(false);
  }

  const renderItem = ({item}) => {
    <TouchableOpacity onPress={() => onHandlerModal(item)} style={styles.itemContainer}>
      <Text style={styles.itemList}>{item.value}</Text>
      <Text style={styles.icon}>X</Text>
    </TouchableOpacity>

  }
  
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput style={[styles.input, {borderColor: borderColor}]} placeholder='Agregar nueva tarea' autoCapitalize='none' autoCorrect={false} onFocus={onHandlerFocus} onBlur={onHandlerBlur} onChangeText={onHandlerChangeText} value={task}/>
          <Button disabled={task.length === 0} title='Crear' color='#424D9E' onPress={onHandlerCreateTask}/>
        </View>
        <FlatList data={taskList} 
        renderItem={renderItem} 
        style={styles.listContainer} contentContainerStyle={styles.list} 
        alwaysBounceVertical={false}
        keyExtractor={item => item.id}/>

      </View>
      <Modal visible={isVisible} animationType='slide'>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Detalle</Text>
          <View style={styles.modalOption}>
            <Text style={styles.modalMsg}>¿Estas seguro que quieres eliminar esta tarea?</Text>
            <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
          </View>
          <View style={styles.modalButtonContainer}>
            <Button title='Cancelar' color='#424D9E' onPress={() => setIsVisible(false)}/>
            <Button title='Eliminar' color='red' onPress={() => onHandlerDelete(selectedTask?.id)}/>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}