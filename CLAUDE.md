# CLAUDE.md

Guidance for AI agents working on this codebase.

## Project

Arabic-language photography learning book delivered as a React Native / Expo mobile app. See [README.md](README.md) for user-facing details.

- **Target platform**: Android (primary). iOS configured but not actively shipped. Web is dev-only (ads stubbed).
- **Language**: All UI strings are Arabic. Layout is RTL.
- **Stack**: Expo SDK 55, React 19, RN 0.83, expo-router 5, react-navigation 7, reanimated 4.

## Commands

```bash
npm install                   # install deps
npm run start                 # Expo dev server
npm run android               # build & run on Android
npm run web                   # web preview (no ads)

npx expo install --fix        # align expo-managed deps
npx expo prebuild --clean     # regenerate android/ after native changes
```

There is **no test suite** and no linter config in this repo. Don't add a CI test command; verify changes by running the app.

## Architecture

### Routing

`expo-router` with file-based routes under [`app/`](app). [`app/_layout.jsx`](app/_layout.jsx) wraps everything in:

1. `FontSizeProvider` (typography scale, persisted)
2. `GestureHandlerRootView`
3. `Drawer` from `expo-router/drawer` — right-positioned for RTL.

Each chapter is a separate route file (`app/<ChapterName>.jsx`). They all share the same template:

```jsx
import Chapter from "../components/Chapter";
import content from "../constants/<chapter>";
const ChapterName = () => Chapter(content);
export default ChapterName;
```

> **Important**: `export default ChapterName = () => ...` (implicit-global assignment) is **forbidden** — it throws under React 19 strict mode. Always declare a `const` first, then `export default`.

### Content model

Chapter content lives in [`constants/`](constants). Each module exports `{ paragraphs: [...] }` where each paragraph is `{ type, value }` with `type` ∈ `"header" | "paragraph" | "image"`. [`Chapter.jsx`](components/Chapter.jsx) maps types to components.

[`constants/topics.js`](constants/topics.js) is the single source of truth for the drawer list. Adding a new chapter = (1) data file in `constants/`, (2) screen in `app/`, (3) entry in `topics.js`.

### Font-size system

- [`components/FontSizeContext.jsx`](components/FontSizeContext.jsx) — Context with `{ size, scale, cycle }`. Steps: `small (0.85) → medium (1) → large (1.2) → xlarge (1.45)`. AsyncStorage key: `@learn-photography/fontSize`.
- [`components/FontSizeButton.jsx`](components/FontSizeButton.jsx) — header right control. Mounted globally via `screenOptions.headerRight` in `_layout.jsx`.
- Any text component that should scale must read `useFontSize().scale` and apply it to `fontSize` (and ideally `lineHeight`).

### Platform splits

`react-native-google-mobile-ads` is native-only and breaks both web bundling and Expo Go. The codebase isolates it via two patterns:

| File | Native | Web |
| --- | --- | --- |
| [`components/AdsInit.native.js`](components/AdsInit.native.js) | imports `react-native-google-mobile-ads`; skips inside Expo Go | [`AdsInit.web.js`](components/AdsInit.web.js) — no-op |
| [`components/BannerView.jsx`](components/BannerView.jsx) | renders `BannerAd` (or placeholder in Expo Go) | [`BannerView.web.jsx`](components/BannerView.web.jsx) — empty `<View />` |

Metro picks the right file via `.web.js` / `.native.js` extensions. **Never import `react-native-google-mobile-ads` from a non-`.native` file** — it will pull native-only specs into the web bundle.

Expo Go detection: `Constants.appOwnership === "expo"`. In standalone/dev builds it is `"standalone"` or `null`.

### RTL & typography conventions

- All Arabic text uses `writingDirection: "rtl"` and `textAlign: "right"` (not `justify` — justify produced inconsistent kerning on Android).
- Body text is set to `selectable={false}` per product requirement (no copy/paste).
- Serif font: `Platform.select({ ios: "Georgia", android: "serif", default: "serif" })`.
- Palette:
  - Paper: `#f5efe4`
  - Text: `#2a2418`
  - Heading: `#3a2a12`
  - Gold accent: `#a17a3a`
  - Header bar: `#3a2a12`
  - Drawer: `#0e1619`

### Image handling

[`components/ParagraphImage.jsx`](components/ParagraphImage.jsx) reads natural dimensions via `Image.resolveAssetSource` (native) and falls back to `onLoad` (web — `resolveAssetSource` is undefined there). The thumbnail uses `aspectRatio` so each image keeps real proportions; container is centered with `maxHeight: 320`.

Tapping opens [`ImageViewerModal.jsx`](components/ImageViewerModal.jsx) — `react-native-image-pan-zoom` inside a transparent `Modal`. The library is unmaintained but in deps; if it ever breaks on a new RN, swap to `react-native-gesture-handler` + `reanimated` pinch.

## Gotchas

- **Drawer position is right** for RTL. `headerLeft` shows the back button; `headerRight` shows the font-size button. The home screen ([`app/index.jsx`](app/index.jsx)) suppresses `headerLeft` since there is nowhere to go back to.
- **Reanimated 4 requires `react-native-worklets@0.7.4`** for SDK 55. Bumping it to 0.8+ breaks Expo Go with `installTurboModule called with 1 arguments`.
- **`@expo/config-plugins`** must be present at top level for `react-native-google-mobile-ads`'s app plugin to load. It is an explicit dep in [`package.json`](package.json) — don't remove it during cleanup.
- **`react-native-image-pan-zoom`** is a 2018 lib using legacy lifecycle methods. Do not rely on it in web bundles.
- **`Image.resolveAssetSource` is undefined on web.** Always guard before calling it.

## Build & native sync

After upgrading any native module or the SDK:

```bash
npx expo prebuild --clean
npx expo run:android
```

EAS configuration lives in [`eas.json`](eas.json). Production builds AAB; preview builds APK. AdMob app IDs are in [`app.json`](app.json) under `plugins.react-native-google-mobile-ads`.

## Style

- 2-space indent, double-quoted strings, semicolons (matches existing code).
- React function components only; no classes.
- Hooks at top of component, then memoised values, then handlers, then JSX.
- StyleSheet at the bottom of the file.
- Keep chapter-screen wrappers one-liners. New shared logic goes in `components/`.
