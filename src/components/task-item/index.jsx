import { TouchableOpacity, Text } from "react-native";

import { styles } from "./styles";

const TaskItem = ({ onPressItem, item }) => {
  return (
    <TouchableOpacity onPress={() => onPressItem(item)} style={styles.itemContainer}>
      <Text style={styles.itemList}>{item.value}</Text>
      <Text style={styles.icon}>X</Text>
    </TouchableOpacity>
  );
};

export default TaskItem;
