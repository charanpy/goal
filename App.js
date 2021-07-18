import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from "./component/GoalItem"
import GoalInput from "./component/GoalInput";
export default function App() {

      const [course, setCourse] = useState([])
      const [visible, setVisible] = useState(false)


      const onDelete = (goalId) => {
            setCourse(current => {
                  return current.filter(id => id.key !== goalId)
            })
      }

      const cancelGoal = () => {
            setVisible(false)
      }

      const addCourse = (input) => {
            setCourse([
                  ...course,
                  {
                        key: Math.random().toString(),
                        value: input
                  }
            ])
            setVisible(false)

      }
      return (
            <View style={
                  styles.screen
            }>
                  <Button
                        title="Add new goal" onPress={() => setVisible(true)} />
                  <GoalInput

                        onAddGoal={addCourse}
                        viewInput={visible}
                        cancelGoal={cancelGoal}
                  />
                  <FlatList data={course}
                        renderItem={itemData => (
                              <GoalItem item={itemData.item} onDelete={onDelete} />
                        )}
                  />


            </View>
      );
}

const styles = StyleSheet.create({
      screen: {
            padding: 50
            //backgroundColor: "#000"
      },

})