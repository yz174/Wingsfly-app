import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import TaskItem from './TaskItem';

export interface Task {
  id: string;
  title: string;
  time: string;
  tags: string[];
  category: 'habit' | 'task';
  priority: 'low' | 'medium' | 'high';
  completed: boolean;
  icon: string;
  iconColor: string;
}

const TaskList: React.FC = () => {
  const tasks: Task[] = [
    {
      id: '1',
      title: 'Schedule a meeting with Harshit Sir',
      time: '08:00 AM',
      tags: ['Habit', 'Must'],
      category: 'habit',
      priority: 'high',
      completed: true,
      icon: 'groups',
      iconColor: '#3b82f6',
    },
    {
      id: '2',
      title: '2.5 Hours Simran and Meditation',
      time: '09:00 AM',
      tags: ['Habit', 'Must'],
      category: 'habit',
      priority: 'high',
      completed: false,
      icon: 'self-improvement',
      iconColor: '#8b5cf6',
    },
    {
      id: '3',
      title: 'Save 200 Rupees Daily',
      time: '12:00 PM',
      tags: ['Habit', 'Must'],
      category: 'habit',
      priority: 'medium',
      completed: false,
      icon: 'savings',
      iconColor: '#f59e0b',
    },
    {
      id: '4',
      title: 'Walk 10k Step Daily',
      time: '07:00 AM',
      tags: ['Habit', 'Important'],
      category: 'habit',
      priority: 'high',
      completed: true,
      icon: 'directions-walk',
      iconColor: '#10b981',
    },
    {
      id: '5',
      title: 'Buy Sunflower for Mumma',
      time: '11:00 AM',
      tags: ['Task', 'Important'],
      category: 'task',
      priority: 'medium',
      completed: false,
      icon: 'local-florist',
      iconColor: '#f59e0b',
    },
    {
      id: '6',
      title: 'Make Mandala and Colour Daily',
      time: '09:00 PM',
      tags: ['Task', 'Important'],
      category: 'task',
      priority: 'low',
      completed: false,
      icon: 'palette',
      iconColor: '#ec4899',
    },
  ];

  return (
    <View style={styles.container}>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});

export default TaskList;