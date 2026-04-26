# تعلم التصوير الفوتوغرافي · Learn Photography

An Arabic-language photography learning book delivered as a React Native / Expo mobile app. Each chapter is laid out as a paginated, paper-textured reading experience with adjustable typography and tap-to-zoom illustrations.

## Features

- **Book-style chapter UI** — cream paper background, serif Arabic typography, RTL right-aligned body, gold divider accents.
- **Adjustable font size** — header `A-/A/A+/A++` button cycles through four scales; setting is persisted across navigation and app restarts via AsyncStorage.
- **Tap-to-zoom images** — any chapter image opens fullscreen with pinch + double-tap zoom.
- **Drawer navigation** — right-side drawer (RTL) with all chapters; book-cover-style table of contents at the home screen.
- **AdMob banners** — Google Mobile Ads anchored banner at the bottom of every chapter (production builds only; skipped in Expo Go and on web).

## Tech stack

- Expo SDK 55 · expo-router 5 (file-based routing)
- React 19 · React Native 0.83
- `@react-navigation/drawer` v7
- `react-native-reanimated` 4 · `react-native-worklets` 0.7.4
- `react-native-google-mobile-ads` 16
- `react-native-image-pan-zoom` (image viewer)
- `@react-native-async-storage/async-storage` (font-size persistence)

## Project layout

```
app/                          expo-router routes
  _layout.jsx                 Drawer + providers (FontSizeProvider, AdsInit)
  index.jsx                   Cover + table of contents
  <Chapter>.jsx               One file per chapter; thin wrapper around Chapter()
components/
  Chapter.jsx                 Page container (cream bg, padding, ornaments)
  Paragraph.jsx               Body text (serif, RTL right-aligned)
  ParagraphTitle.jsx          Section heading + gold underline
  ParagraphImage.jsx          Tappable thumbnail with natural aspect ratio
  ImageViewerModal.jsx        Fullscreen modal with pinch/double-tap zoom
  FontSizeContext.jsx         Provider; AsyncStorage-backed
  FontSizeButton.jsx          Header A-/A/A+/A++ control
  BackButton.jsx              Header back arrow
  BannerView.jsx              AdMob banner (`.web.jsx` stub for web)
  AdsInit.native.js           AdMob initialiser (`.web.js` no-op)
constants/
  topics.js                   List of all chapters (path + title)
  <topic>.js                  Per-chapter content data
                              (array of { type: "header" | "paragraph" | "image", value })
assets/                       App icons, splash, illustrations
```

### Adding a new chapter

1. Create `constants/myChapter.js` exporting `{ paragraphs: [...] }`.
2. Create `app/MyChapter.jsx`:
   ```jsx
   import Chapter from "../components/Chapter";
   import content from "../constants/myChapter";
   const MyChapter = () => Chapter(content);
   export default MyChapter;
   ```
3. Add `{ path: "MyChapter", title: "..." }` to [`constants/topics.js`](constants/topics.js).

## Running locally

```bash
npm install                   # one-time
npm run start                 # Expo dev menu (QR/QR-less)
npm run android               # build & launch on connected Android device/emulator
npm run web                   # web preview (ads stubbed)
```

> Expo Go works for the UI, but **AdMob is a native module** and can only run in a custom dev build or release build (`appOwnership !== "expo"`). The app detects Expo Go and skips ads automatically.

## Build & release

```bash
eas build                                         # interactive
eas build -p android --profile preview            # internal APK
eas build -p android --profile production         # AAB for Play Store
eas submit --platform android                     # upload to Play Console
```

If the native side gets out of sync after an SDK upgrade:

```bash
npx expo prebuild --clean
npx expo run:android
```

## Useful adb commands

```bash
adb devices
adb tcpip 5555
adb connect <ip_address>:5555
adb logcat '*:W' | grep learnphotography
```

## License

Proprietary — © Wafa Aboulwafa.
