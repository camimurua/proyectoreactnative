import { Button, TextInput, View } from "react-native";

import { styles } from "./styles";

const InputTask = ({
  borderColor,
  onHandlerFocus,
  onHandlerBlur,
  onHandlerChangeText,
  task,
  onHandlerCreateTask,
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.input, { borderColor }]}
        placeholder="Agregar nueva tarea"
        autoCapitalize="none"
        autoCorrect={false}
        onFocus={onHandlerFocus}
        onBlur={onHandlerBlur}
        onChangeText={onHandlerChangeText}
        value={task}
      />
      <Button
        disabled={task.length === 0}
        title="Crear"
        color="#424D9E"
        onPress={onHandlerCreateTask}
      />
    </View>
  );
};

export default InputTask;
