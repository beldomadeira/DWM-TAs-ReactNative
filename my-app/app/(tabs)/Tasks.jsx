import React from "react";
import { Text, View, Button, StyleSheet, TextInput } from "react-native";
import { useState } from "react";
import Task from "../../components/task";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [finishedTasksCount, setFinishedTasksCount] = useState(0);

  const handleAddTask = () => {
    if (inputValue === "") return; // para que no deje agregar tareas vacías
    setTasks([...tasks, { description: inputValue }]);
    setInputValue("");
  };

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    setFinishedTasksCount(finishedTasksCount + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Agregar tarea"
          value={inputValue}
          onChangeText={setInputValue}
        />
        <Button title="+" onPress={handleAddTask} />
      </View>
      {tasks.map((task, index) => (
        <View key={index} style={styles.taskContainer}>
          <Task description={task.description} />
          <Button title="✓" onPress={() => handleDelete(index)} />
        </View>
      ))}
      <View style={styles.finishedTasks}>
        <Text>Tareas finalizadas: {finishedTasksCount}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  input: {
    padding: 16,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
    marginBottom: 12,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  taskContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  finishedTasks: {
    marginTop: 16,
  },
});

export default Tasks;
