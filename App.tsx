/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { Image, StatusBar, StyleSheet, Text, useColorScheme, View, TouchableOpacity, Alert } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {
  getIcon,
  changeIcon,
  changeIconSilently,
} from '@linhlm23496/react-native-change-app-icon';
import { useEffect, useState } from 'react';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [currentIcon, setCurrentIcon] = useState<string>('');
  console.log('currentIcon', currentIcon);

  useEffect(() => {
    onGetIcon();
  }, []);

  // const function onChangeIcon(iconName?: string) {
  //   confirm(iconName);
  // }

  const onChangeIcon = (iconName?: string) => {
    Alert.alert('Note', 'Changing the app icon', [
      {
        text: 'Ok',
        onPress: async () => {
          try {
            // onChangeIconSilent(iconName);
            await changeIcon(iconName);
          } finally {
            onGetIcon();
          }
        }
      },
      { text: 'Cancel', style: 'cancel' },
    ]);
  };

  async function onChangeIconSilent(iconName?: string) {
    try {
      await changeIconSilently(iconName);
    } finally {
      onGetIcon();
    }
  }

  async function onGetIcon() {
    const icon = await getIcon();
    setCurrentIcon(icon);
  }

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent
        currentIcon={currentIcon}
        onGetIcon={onGetIcon}
        onChangeIcon={onChangeIcon}
        onChangeIconSilent={onChangeIconSilent}
      />
    </SafeAreaProvider>
  );
}

interface AppContentProps {
  currentIcon: string;
  onGetIcon: () => void;
  onChangeIcon: (iconName?: string) => void;
  onChangeIconSilent: (iconName?: string) => void;
}

function AppContent({ currentIcon, onGetIcon, onChangeIcon, onChangeIconSilent }: AppContentProps) {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: safeAreaInsets.top }]}>
      <Text style={styles.title}>Select AM App Icon</Text>
      {/* <Text style={styles.currentIcon}>Current: {currentIcon || 'Default'}</Text> */}

      <View style={styles.iconGrid}>
        <TouchableOpacity
          style={[styles.iconButton, (currentIcon === 'Default' || currentIcon === 'MainActivityDefault') && styles.activeIcon]}
          activeOpacity={0.7}
          onPress={() => onChangeIcon()}
        >
          <Image
            source={require('./assets/playstore_one.png')}
            style={styles.iconImage}
          />
          <Text style={styles.iconLabel}>One</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.iconButton, (currentIcon === 'XSquare' || currentIcon === 'MainActivityAlternate') && styles.activeIcon]}
          onPress={() => onChangeIcon('XSquare')}
          activeOpacity={0.7}
        >
          <Image
            source={require('./assets/playstore_two.png')}
            style={styles.iconImage}
          />
          <Text style={styles.iconLabel}>Two</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.iconButton, currentIcon === 'Main' && styles.activeIcon]}
          onPress={() => onChangeIcon('Main')}
          activeOpacity={0.7}
        >
          <Image
            source={require('./assets/playstore.png')}
            style={styles.iconImage}
          />
          <Text style={styles.iconLabel}>Three</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  currentIcon: {
    fontSize: 16,
    marginBottom: 40,
    color: '#666',
  },
  iconGrid: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  iconButton: {
    alignItems: 'center',
    padding: 15,
    borderRadius: 12,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    minWidth: 120,
  },
  activeIcon: {
    borderWidth: 3,
    borderColor: '#007AFF',
    backgroundColor: '#E3F2FD',
  },
  iconImage: {
    width: 80,
    height: 80,
    borderRadius: 18,
    marginBottom: 10,
  },
  iconLabel: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
});