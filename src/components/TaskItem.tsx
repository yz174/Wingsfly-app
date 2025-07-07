import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Task} from './TaskList';

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({task}) => {
  const getTagColor = (tag: string) => {
    switch (tag.toLowerCase()) {
      case 'habit':
        return '#3b82f6';
      case 'task':
        return '#10b981';
      case 'must':
        return '#ef4444';
      case 'important':
        return '#f59e0b';
      default:
        return '#6b7280';
    }
  };

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.leftSection}>
        <View style={[styles.iconContainer, {backgroundColor: `${task.iconColor}20`}]}>
          <Icon name={task.icon} size={24} color={task.iconColor} />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {task.title}
          </Text>
          <View style={styles.metaContainer}>
            <Icon name="schedule" size={14} color="#6b7280" />
            <Text style={styles.time}>{task.time}</Text>
            <View style={styles.tagsContainer}>
              {task.tags.map((tag, index) => (
                <View
                  key={index}
                  style={[
                    styles.tag,
                    {backgroundColor: `${getTagColor(tag)}15`},
                  ]}>
                  <Text style={[styles.tagText, {color: getTagColor(tag)}]}>
                    {tag}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </View>
      <View style={styles.rightSection}>
        <TouchableOpacity style={styles.statusButton}>
          <Icon
            name={task.completed ? 'check-circle' : 'radio-button-unchecked'}
            size={24}
            color={task.completed ? '#10b981' : '#d1d5db'}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.moreButton}>
          <Icon name="more-horiz" size={20} color="#6b7280" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    marginBottom: 12,
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  leftSection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  contentContainer: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 6,
  },
  metaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  time: {
    fontSize: 12,
    color: '#6b7280',
    marginLeft: 4,
    marginRight: 8,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    marginRight: 6,
    marginBottom: 2,
  },
  tagText: {
    fontSize: 10,
    fontWeight: '500',
  },
  rightSection: {
    alignItems: 'center',
  },
  statusButton: {
    padding: 4,
    marginBottom: 8,
  },
  moreButton: {
    padding: 4,
  },
});

export default TaskItem;