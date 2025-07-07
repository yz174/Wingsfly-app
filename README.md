# WingsFly - Task & Habit Management App

<div align="center">
  <img src="https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop" alt="WingsFly Logo" width="120" height="120" style="border-radius: 20px;">
  
  <h3>✈️ Soar to New Heights with Your Daily Goals</h3>
  
  <p>A beautiful and intuitive React Native app for managing tasks, habits, and daily goals with motivational quotes and progress tracking.</p>
</div>

## 📱 Features

### 🎯 Core Functionality
- **Task Management** - Create and manage single-instance tasks
- **Habit Tracking** - Build and maintain daily habits with detailed statistics
- **Recurring Tasks** - Set up tasks that repeat over time
- **Goal Setting** - Define and track daily goals
- **Progress Monitoring** - Visual progress bars and completion tracking

### 🎨 User Experience
- **Beautiful UI** - Clean, modern design with smooth animations
- **Date Navigation** - Easy date picker for viewing tasks across different days
- **Motivational Quotes** - Daily inspirational quotes with progress indicators
- **Interactive Elements** - Smooth animations and micro-interactions
- **Bottom Drawer** - Elegant task creation interface

### 📊 Task Categories
- **Habits** - Recurring activities with detailed tracking
- **Tasks** - One-time activities
- **Recurring Tasks** - Scheduled repeating activities
- **Goals of the Day** - Daily targets and objectives

## 🛠️ Tech Stack

- **Framework**: React Native 0.73.4
- **Language**: TypeScript
- **State Management**: React Hooks (useState, useEffect)
- **Animations**: React Native Reanimated 3.6.3
- **Icons**: React Native Vector Icons
- **Navigation**: React Native Gesture Handler
- **Safe Area**: React Native Safe Area Context

## 📦 Installation

### Prerequisites
- Node.js (>= 16)
- React Native CLI
- Android Studio (for Android development)
- Xcode (for iOS development)

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd WingsFly
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **iOS Setup** (macOS only)
   ```bash
   cd ios && pod install && cd ..
   ```

4. **Android Setup**
   - Ensure Android Studio is installed
   - Set up Android SDK and emulator

### Running the App

#### Android
```bash
npm run android
```

#### iOS
```bash
npm run ios
```

#### Development Server
```bash
npm start
```

## 🏗️ Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── BottomDrawer.tsx     # Task creation drawer
│   ├── DatePicker.tsx       # Date selection component
│   ├── FloatingActionButton.tsx # FAB for adding tasks
│   ├── Header.tsx           # App header with navigation
│   ├── QuoteSection.tsx     # Daily quotes and progress
│   ├── TaskItem.tsx         # Individual task component
│   └── TaskList.tsx         # Task list container
├── screens/              # Screen components
│   └── HomeScreen.tsx       # Main home screen
├── types/                # TypeScript type definitions
│   └── index.ts             # Shared interfaces
└── App.tsx               # Root application component
```

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#3b82f6` - Main actions and highlights
- **Success Green**: `#10b981` - Completed tasks and positive actions
- **Warning Orange**: `#f59e0b` - Important items and warnings
- **Purple**: `#8b5cf6` - Creative tasks and meditation
- **Pink**: `#ec4899` - Art and creative activities
- **Gray Scale**: Various shades for text and backgrounds

### Typography
- **Headers**: 16-18px, font-weight: 600
- **Body Text**: 14px, font-weight: 400
- **Small Text**: 12px for metadata and tags
- **Micro Text**: 10px for tags and labels

### Spacing System
- **Base Unit**: 4px
- **Small**: 8px, 12px
- **Medium**: 16px, 20px
- **Large**: 24px, 32px

## 🔧 Configuration

### Environment Setup
The app uses standard React Native configuration files:
- `babel.config.js` - Babel configuration with Reanimated plugin
- `metro.config.js` - Metro bundler configuration
- `tsconfig.json` - TypeScript configuration

### Dependencies
Key dependencies include:
- `react-native-reanimated` - Smooth animations
- `react-native-vector-icons` - Icon library
- `react-native-gesture-handler` - Touch gestures
- `react-native-safe-area-context` - Safe area handling

## 📱 Screenshots

*Add screenshots of your app here*

## 🚀 Features in Development

- [ ] Task persistence with local storage
- [ ] Push notifications for reminders
- [ ] Statistics and analytics dashboard
- [ ] Custom themes and personalization
- [ ] Social sharing of achievements
- [ ] Cloud synchronization
- [ ] Widget support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

## 🙏 Acknowledgments

- Icons provided by [Material Icons](https://material.io/resources/icons/)
- Images from [Pexels](https://www.pexels.com/)
- Inspiration from modern productivity apps
- React Native community for excellent libraries

## 📞 Support

If you encounter any issues or have questions:
1. Check the [Issues](https://github.com/yourusername/wingsflyapp/issues) page
2. Create a new issue with detailed information
3. Contact the maintainers

---

<div align="center">
  <p>Made with ❤️ and React Native</p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>
