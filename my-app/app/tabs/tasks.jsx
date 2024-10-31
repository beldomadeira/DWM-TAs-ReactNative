import React from 'react';
import {Text, View, Button, StyleSheet, TextInput} from 'react-native';
import { useState } from 'react';
import Task from 'components/task.jsx';

const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleAddTask = () => {
    setTasks([...tasks, {description: inputValue}]);
    setInputValue = '';
    };

    const handleDelete = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }


    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input} 
                placeholder="Add a task" 
                value={inputValue}
                onChangeText={setInputValue}
            />
            <Button title="Add" onPress={handleAddTask}/>
            {tasks.map((task) => (
                <View key={index} style={styles.taskContainer}>
                    <Task description={task.description}/>
                    <Button title="Delete" onPress={() => handleDelete(index)}/>
                </View>
            ))}
           
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    input: {
        padding: 16,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
    },
    taskContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});

export default Tasks;