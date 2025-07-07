import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';

import Header from '../components/Header';
import DatePicker from '../components/DatePicker';
import QuoteSection from '../components/QuoteSection';
import TaskList from '../components/TaskList';
import FloatingActionButton from '../components/FloatingActionButton';

interface HomeScreenProps {
  onOpenDrawer: () => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({onOpenDrawer}) => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <DatePicker />
        <QuoteSection />
        <TaskList />
        <View style={styles.bottomSpacing} />
      </ScrollView>
      <FloatingActionButton onPress={onOpenDrawer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollView: {
    flex: 1,
  },
  bottomSpacing: {
    height: 100,
  },
});

export default HomeScreen;