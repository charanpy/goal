import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = ({ onAddGoal, viewInput, cancelGoal }) => {
            const [input, setInput] = useState('')

            const changeText = (field) => {
                        setInput(field);

            }
            const addGoal = () => {
                        setInput("")
            }

            return (
                        <Modal visible={viewInput} animationType="slide">
                                    <View style={styles.inputContainer}>
                                                <TextInput
                                                            placeholder="Course Goal" style={
                                                                        styles.input
                                                            }
                                                            onChangeText={changeText}
                                                            value={input}
                                                />
                                                <View style={styles.buttons}>
                                                            <View style={styles.button}>
                                                                        <Button title="Cancel" color="red" onPress={cancelGoal} />
                                                            </View>
                                                            <View style={styles.button}>
                                                                        <Button title="ADD" onPress={() => {
                                                                                    onAddGoal(input)
                                                                                    addGoal()
                                                                        }} />
                                                            </View>
                                                </View>

                                    </View>
                        </Modal>
            )
}

const styles = StyleSheet.create({
            inputContainer: {
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
            },
            input: {
                        borderBottomColor: 'black',
                        borderWidth: 1,
                        width: '60%',
                        marginBottom: 20
            },
            buttons: {
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: '60%'
            },
            button: {
                        width: '40%',
                        borderRadius: 5,

            }

})

export default GoalInput;