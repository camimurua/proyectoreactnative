import { FlatList } from "react-native";

import { styles } from "./styles";

const TaskList = ({ list, renderItem }) => {
  return (
    <FlatList
      data={list}
      renderItem={renderItem}
      style={styles.listContainer}
      contentContainerStyle={styles.list}
      alwaysBounceVertical={false}
      keyExtractor={(item) => item.id}
    />
  );
};

export default TaskList;
