import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
const GoalItem = ({ item, onDelete }) => {
            return (
                        <TouchableOpacity onPress={() => onDelete(item.key)}>
                                    <View style={styles.listItem}>
                                                <Text style={{
                                                            color: "white"
                                                }}>{item.value}</Text>

                                    </View>
                        </TouchableOpacity>
            )
}

const styles = StyleSheet.create({
            listItem: {
                        margin: 10,
                        padding: 10,
                        backgroundColor: "#f4c168",
                        borderRadius: 10
                        //borderWidth: 1,

            }
})

export default GoalItem;