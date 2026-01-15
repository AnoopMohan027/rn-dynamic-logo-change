# React Native Dynamic App Icon Changer

A React Native application demonstrating how to dynamically change the app icon at runtime on Android using `@linhlm23496/react-native-change-app-icon`.

## Features

- 🎨 Change app icon dynamically without reinstalling
- 📱 Three different icon options to choose from
- ✅ Visual feedback showing the currently active icon
- 🔄 Support for both alert-based and silent icon changes
- 🎯 Clean, modern UI with safe area handling

## Prerequisites

- Node.js (v14 or higher)
- React Native development environment set up
- Android Studio (for Android development)
- A physical Android device or emulator

## Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd LOGOCHANGE
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Install the icon change library**
   ```bash
   npm install @linhlm23496/react-native-change-app-icon
   # or
   yarn add @linhlm23496/react-native-change-app-icon
   ```

4. **Install pods (if on macOS for iOS support)**
   ```bash
   cd ios && pod install && cd ..
   ```

## Android Configuration

### 1. Add Icon Resources

Place your icon files in the appropriate mipmap directories:

```
android/app/src/main/res/
├── mipmap-hdpi/
│   ├── ic_launcher_round.png
│   ├── ic_launcher_round_one.png
│   └── ic_launcher_round_two.png
├── mipmap-mdpi/
│   ├── ic_launcher_round.png
│   ├── ic_launcher_round_one.png
│   └── ic_launcher_round_two.png
└── mipmap-xhdpi/
    ├── ic_launcher_round.png
    ├── ic_launcher_round_one.png
    └── ic_launcher_round_two.png
```

### 2. AndroidManifest.xml Configuration

The `AndroidManifest.xml` already includes the necessary `activity-alias` entries:

- **MainActivity**: Default launcher activity
- **Main**: Icon variant 1 (ic_launcher_round)
- **Default**: Icon variant 2 (ic_launcher_round_one)
- **XSquare**: Icon variant 3 (ic_launcher_round_two)

Each activity-alias is initially disabled and will be enabled when selected.

## Usage

### Running the App

```bash
# For Android
npm run android
# or
yarn android
```

### Changing Icons

The app provides three icon options:

1. **One** - Uses `ic_launcher_round_one.png`
2. **Two** - Uses `ic_launcher_round_two.png`
3. **Three** - Uses `ic_launcher_round.png`

Simply tap on any icon to change it. The app will show a confirmation alert before applying the change.

## Code Structure

```
LOGOCHANGE/
├── App.tsx                 # Main application component
├── assets/                 # Icon preview images
│   ├── playstore_one.png
│   ├── playstore_two.png
│   └── playstore.png
└── android/
    └── app/src/main/
        ├── AndroidManifest.xml
        └── res/mipmap-*/   # Actual app icons
```

## Key Components

### Main Functions

- **`onGetIcon()`**: Retrieves the currently active icon
- **`onChangeIcon(iconName)`**: Changes icon with user confirmation
- **`onChangeIconSilent(iconName)`**: Changes icon without confirmation (commented out in UI)

### Icon Mapping

| Display Name | Activity Alias | Icon Resource |
|-------------|----------------|---------------|
| One | Default | ic_launcher_round_one |
| Two | XSquare | ic_launcher_round_two |
| Three | Main | ic_launcher_round |

## Important Notes

### Android Behavior

- When changing the app icon, Android may briefly close and reopen the app
- The icon change persists across app restarts
- Only one activity-alias can be enabled at a time
- The default MainActivity always remains enabled

### Icon Requirements

- Icons should be provided in all density folders (hdpi, mdpi, xhdpi, xxhdpi, xxxhdpi)
- Recommended sizes:
  - mdpi: 48x48px
  - hdpi: 72x72px
  - xhdpi: 96x96px
  - xxhdpi: 144x144px
  - xxxhdpi: 192x192px

## Troubleshooting

### Icon not changing

1. Ensure all icon resources exist in all mipmap folders
2. Check that activity-alias names in AndroidManifest.xml match the code
3. Try uninstalling and reinstalling the app
4. Clear app data and cache

### Build errors

1. Run `cd android && ./gradlew clean`
2. Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`
3. Clear Metro cache: `npm start -- --reset-cache`

## Dependencies

- `react-native`: Framework for building native apps
- `react-native-safe-area-context`: Safe area handling
- `@linhlm23496/react-native-change-app-icon`: Icon changing functionality

## Contributing

Feel free to submit issues and pull requests to improve this demo application.

## License

This project is available for educational and demonstration purposes.

## Credits

- Icon changing functionality powered by [@linhlm23496/react-native-change-app-icon](https://github.com/linhlm23496/react-native-change-app-icon)
- Built with React Native

---

**Note**: This implementation currently supports Android. For iOS support, additional configuration in Info.plist would be required.
