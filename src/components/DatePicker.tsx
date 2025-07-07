import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

interface DateItem {
  day: string;
  date: number;
  isToday?: boolean;
}

const DatePicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(18);

  const dates: DateItem[] = [
    {day: 'Sun', date: 15},
    {day: 'Mon', date: 16},
    {day: 'Tue', date: 17},
    {day: 'Wed', date: 18, isToday: true},
    {day: 'Thu', date: 19},
    {day: 'Fri', date: 20},
    {day: 'Sat', date: 21},
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}>
        {dates.map((item) => (
          <TouchableOpacity
            key={item.date}
            style={[
              styles.dateItem,
              selectedDate === item.date && styles.selectedDateItem,
            ]}
            onPress={() => setSelectedDate(item.date)}>
            <Text
              style={[
                styles.dayText,
                selectedDate === item.date && styles.selectedDayText,
              ]}>
              {item.day}
            </Text>
            <Text
              style={[
                styles.dateText,
                selectedDate === item.date && styles.selectedDateText,
              ]}>
              {item.date}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingVertical: 16,
    marginBottom: 12,
  },
  scrollContainer: {
    paddingHorizontal: 20,
  },
  dateItem: {
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginRight: 8,
    borderRadius: 20,
    backgroundColor: '#f8f9fa',
    minWidth: 56,
  },
  selectedDateItem: {
    backgroundColor: '#3b82f6',
  },
  dayText: {
    fontSize: 12,
    color: '#6b7280',
    fontWeight: '500',
    marginBottom: 4,
  },
  selectedDayText: {
    color: '#ffffff',
  },
  dateText: {
    fontSize: 16,
    color: '#111827',
    fontWeight: '600',
  },
  selectedDateText: {
    color: '#ffffff',
  },
});

export default DatePicker;