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

- **app/** — expo-router routes.
  - `_layout.jsx` — Drawer plus providers (`FontSizeProvider`, `AdsInit`).
  - `index.jsx` — Cover and table of contents.
  - `<Chapter>.jsx` — One file per chapter; a thin wrapper around `Chapter()`.
- **components/**
  - `Chapter.jsx` — Page container (cream background, padding, ornaments).
  - `Paragraph.jsx` — Body text (serif, RTL right-aligned).
  - `ParagraphTitle.jsx` — Section heading with gold underline.
  - `ParagraphImage.jsx` — Tappable thumbnail with natural aspect ratio.
  - `ImageViewerModal.jsx` — Fullscreen modal with pinch and double-tap zoom.
  - `FontSizeContext.jsx` — Provider, AsyncStorage-backed.
  - `FontSizeButton.jsx` — Header `A-/A/A+/A++` control.
  - `BackButton.jsx` — Header back arrow.
  - `BannerView.jsx` — AdMob banner; the `.web.jsx` sibling renders nothing on web.
  - `AdsInit.native.js` — AdMob initialiser; the `.web.js` sibling is a no-op.
- **constants/**
  - `topics.js` — Single source of truth for the chapter list (path and title).
  - `<topic>.js` — Per-chapter content as an array of `{ type, value }` records, where `type` is `"header"`, `"paragraph"`, or `"image"`.
- **assets/** — App icons, splash, illustrations.

### Adding a new chapter

1. Create `constants/myChapter.js` that default-exports `{ paragraphs: [...] }`.
2. Create `app/MyChapter.jsx` — a one-line wrapper that imports `Chapter` from `components/Chapter` and `content` from your new constants file, then default-exports a function component returning `Chapter(content)`. Always declare a named `const` first; do **not** use the implicit-global `export default Foo = () => ...` form (it throws under React 19 strict mode).
3. Add an entry `{ path: "MyChapter", title: "..." }` to [`constants/topics.js`](constants/topics.js) so it appears in the drawer and on the cover.

## Running locally

- `npm install` — one-time install.
- `npm run start` — Expo dev menu (QR / QR-less).
- `npm run android` — build and launch on a connected Android device or emulator.
- `npm run web` — web preview (ads are stubbed).

> Expo Go works for the UI, but **AdMob is a native module** and only runs in a custom dev build or a release build (`appOwnership !== "expo"`). The app detects Expo Go and skips ads automatically.

## Build & release

- `eas build` — interactive.
- `npx expo run:android` — local native build and run.
- `eas build -p android --profile preview` — internal APK.
- `eas build -p android --profile production` — AAB for Play Store.
- `eas submit --platform android` — upload to Play Console.

If the native side gets out of sync after an SDK upgrade, regenerate it with `npx expo prebuild --clean` followed by `npx expo run:android`.

## Useful adb commands

- `adb devices` — list connected devices.
- `adb tcpip 5555` — switch the USB-connected device to TCP/IP debugging on port 5555.
- `adb connect <ip_address>:5555` — connect over Wi-Fi.
- `adb logcat` — stream all logs.
- `adb logcat '*:W'.` — stream warnings and above.
- `adb logcat '*:W'. | grep '<appname>'` — filter to your app.

## License

Proprietary — © Wafa Aboulwafa.
