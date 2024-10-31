import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Task = ({description}) => {
    return (
        <View style={styles.task}>
        <Text>{description}</Text>
        </View>
    );
    };

const styles = StyleSheet.create({
    task: {
        padding: 16,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
    },
});

export default Task;