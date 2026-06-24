# 🧸 Kiddo Q-Commerce Platform

![Kiddo Banner](https://images.unsplash.com/photo-1596755458022-b5e1b26f53da?auto=format&fit=crop&q=80&w=1200)

**Kiddo** is a highly dynamic, production-ready Server-Driven UI (SDUI) React Native application designed for rapid q-commerce marketing campaigns. 

Built strictly without hardcoding layouts, this frontend acts as a "dumb" highly-optimized rendering engine that digests complex JSON payloads. It maps declarative Server-Driven blocks (`BANNER_HERO`, `DYNAMIC_COLLECTION`, `PRODUCT_GRID_2X2`) seamlessly to local components. This architecture supports immediate over-the-air visual swaps, remote overlay contexts, and live festival theme injections with zero App Store/Play Store releases.

---

## 🚀 Key Architectural Features
- **FlashList Optimization:** The engine leverages `@shopify/flash-list` mapped strictly against a flat JSON abstraction for 60fps scrolling and memory-efficient virtualization boundaries.
- **Server-Driven Campaign Engine:** Instant toggling between contextual campaigns (e.g., *Summer Playhouse*, *Back to School*) which inject completely custom Lottie/WebP full-screen overlays, distinct dynamic collections, and targeted macro actions (e.g., `APPLY_MYSTERY_GIFT_COUPON`).
- **Cart State Isolation:** The `CartContext` utilizes a decoupled dispatcher matrix. Pinging deep nested product cart incrementers does *not* trigger global UI engine re-renders.
- **Strict-Mode Typing:** The codebase enforces rigorous TypeScript interfaces tracking exact JSON schemas, enforcing defensive rendering fallbacks for unknown or corrupted payloads (`NEW_COMPONENT_V2`).

---

## 🛠️ Getting Started & Running Locally

This application is built with Expo. Please follow the instructions below to boot the platform.

### 1. Installation
Clone the repository and install the dependencies. The lockfile heavily relies on legacy peer resolution to map Expo 53 compatibility.

```bash
git clone https://github.com/isahilmishra/kiddo-assignment.git
cd kiddo-app
npm install --legacy-peer-deps
```

---

### 2. Running on Mobile (iOS / Android)
> ⚠️ **CRITICAL REQUIREMENT:** This application has been forcefully downgraded and locked to **Expo SDK 53** to ensure absolute architectural compatibility during grading. 
> 
> To test this on a physical mobile device, **you MUST install the specific version of Expo Go that supports SDK 53.** If you use the newest Expo Go from the App Store (SDK 54/55/56+), it will reject the connection.

To run:
```bash
npx expo start -c
```
Once the Metro bundler starts, scan the QR code using your SDK-53-compatible Expo Go app, or press `i` / `a` to launch a local iOS/Android Simulator.

---

### 3. Running on the Web
The codebase fully supports modern Web rendering, converting Native Lottie overlays and FlashList structures to DOM nodes automatically via `react-native-web`.

To run:
```bash
npx expo start --web -c
```
*Note: Ensure you are running this in a Chromium-based browser or Safari for optimal performance and accurate Lottie execution.*

---

## 🗂️ Project Structure
```text
src/
├── actions/             # Universal Action Dispatcher (ADD_TO_CART, DEEP_LINK, etc.)
├── campaigns/           # SDUI JSON Payload Mocks per marketing festival
├── components/          # Atomic components heavily memoized
│   ├── blocks/          # Server-mapped schema layout wrappers (Banner, Grid, Collection)
│   └── ui/              # Dumb base UI elements (Product Card, Modals)
├── context/             # Global Cart state and dynamic structural Theme skins
├── registry/            # Factory Pattern registry connecting string signatures to React Nodes
└── types/               # Strict validation schemas 
```

---
*Built with ❤️ for Kiddo.*
