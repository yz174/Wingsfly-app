import React, {useEffect, useRef} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Modal,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

interface BottomDrawerProps {
  isVisible: boolean;
  onClose: () => void;
}

interface DrawerOption {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
}

const BottomDrawer: React.FC<BottomDrawerProps> = ({isVisible, onClose}) => {
  const translateY = useSharedValue(SCREEN_HEIGHT);
  const opacity = useSharedValue(0);

  const options: DrawerOption[] = [
    {
      id: 'habit',
      title: 'Habit',
      subtitle: 'Activity that repeats over time & has detailed tracking and statistics.',
      icon: 'loop',
      color: '#3b82f6',
    },
    {
      id: 'recurring',
      title: 'Recurring Task',
      subtitle: 'Activity that repeats over time & has detailed tracking and statistics.',
      icon: 'repeat',
      color: '#10b981',
    },
    {
      id: 'task',
      title: 'Task',
      subtitle: 'Single instance activity without tracking over time.',
      icon: 'check-circle-outline',
      color: '#8b5cf6',
    },
    {
      id: 'goal',
      title: 'Goal of the Day',
      subtitle: 'A specific target set for oneself to achieve within a single day.',
      icon: 'flag',
      color: '#f59e0b',
    },
  ];

  useEffect(() => {
    if (isVisible) {
      opacity.value = withTiming(1, {duration: 300});
      translateY.value = withSpring(0, {
        damping: 20,
        stiffness: 90,
      });
    } else {
      opacity.value = withTiming(0, {duration: 200});
      translateY.value = withTiming(SCREEN_HEIGHT, {duration: 300});
    }
  }, [isVisible, opacity, translateY]);

  const backdropStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  const drawerStyle = useAnimatedStyle(() => ({
    transform: [{translateY: translateY.value}],
  }));

  const handleOptionPress = (optionId: string) => {
    console.log('Selected option:', optionId);
    onClose();
  };

  return (
    <Modal
      visible={isVisible}
      transparent
      animationType="none"
      onRequestClose={onClose}>
      <View style={styles.container}>
        <Animated.View style={[styles.backdrop, backdropStyle]}>
          <TouchableWithoutFeedback onPress={onClose}>
            <View style={styles.backdropTouchable} />
          </TouchableWithoutFeedback>
        </Animated.View>

        <Animated.View style={[styles.drawer, drawerStyle]}>
          <View style={styles.handle} />

          <View style={styles.content}>
            {options.map((option) => (
              <TouchableOpacity
                key={option.id}
                style={styles.optionItem}
                onPress={() => handleOptionPress(option.id)}>
                <View style={[styles.optionIcon, {backgroundColor: `${option.color}20`}]}>
                  <Icon name={option.icon} size={24} color={option.color} />
                </View>
                <View style={styles.optionContent}>
                  <Text style={styles.optionTitle}>{option.title}</Text>
                  <Text style={styles.optionSubtitle}>{option.subtitle}</Text>
                </View>
                <Icon name="arrow-forward-ios" size={16} color="#9ca3af" />
              </TouchableOpacity>
            ))}
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  backdropTouchable: {
    flex: 1,
  },
  drawer: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 8,
    paddingBottom: 32,
    maxHeight: SCREEN_HEIGHT * 0.8,
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: '#d1d5db',
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 20,
  },
  content: {
    paddingHorizontal: 20,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  optionIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  optionContent: {
    flex: 1,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  optionSubtitle: {
    fontSize: 13,
    color: '#6b7280',
    lineHeight: 18,
  },
});

export default BottomDrawer;