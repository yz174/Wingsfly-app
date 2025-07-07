export interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
  category: 'habit' | 'task' | 'recurring' | 'goal';
  priority: 'low' | 'medium' | 'high';
  tags: string[];
  scheduledTime?: string;
  icon: string;
  iconColor: string;
}

export interface DateItem {
  day: string;
  date: number;
  month: number;
  year: number;
  isToday?: boolean;
  isSelected?: boolean;
}

export interface QuoteData {
  text: string;
  author?: string;
  progress: number;
}a