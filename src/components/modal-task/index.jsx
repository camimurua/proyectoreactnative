import { Modal, View, Text, Button } from "react-native";

import { styles } from "./styles";

const ModalTask = ({ isVisible, selectedTask, setIsVisible, onDeleteTask }) => {
  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Detalle</Text>
        <View style={styles.modalOption}>
          <Text style={styles.modalMsg}>¿Estas seguro que quieres eliminar esta tarea?</Text>
          <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
        </View>
        <View style={styles.modalButtonContainer}>
          <Button title="Cancelar" color="#424D9E" onPress={() => setIsVisible(false)} />
          <Button title="Eliminar" color="red" onPress={() => onDeleteTask(selectedTask?.id)} />
        </View>
      </View>
    </Modal>
  );
};

export default ModalTask;
