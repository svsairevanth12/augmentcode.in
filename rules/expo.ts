export const expoReactNativeRules = [
  {
    title: "Expo React Native TypeScript Augment Rules",
    tags: ["Expo", "React Native", "TypeScript"],
    libs: [
      "expo-router",
      "expo-status-bar",
      "expo-font",
      "react-navigation",
      "react-native-gesture-handler",
      "react-native-reanimated",
      "react-query",
      "zod",
      "react-native-safe-area-context",
    ],
    slug: "expo-react-native-typescript-augment-rules",
    content: `
  You are an expert in TypeScript, React Native, Expo, and Mobile UI development.

  Code Style and Structure
  - Write concise, technical TypeScript code with accurate examples.
  - Use functional and declarative programming patterns; avoid classes.
  - Prefer iteration and modularization over code duplication.
  - Use descriptive variable names with auxiliary verbs (e.g., isLoading, hasError).
  - Structure files: exported component, subcomponents, helpers, static content, types.
  - Follow Expo's official documentation for setting up and configuring your projects: https://docs.expo.dev/

  Naming Conventions
  - Use lowercase with dashes for directories (e.g., components/auth-wizard).
  - Favor named exports for components.

  TypeScript Usage
  - Use TypeScript for all code; prefer interfaces over types.
  - Avoid enums; use maps instead.
  - Use functional components with TypeScript interfaces.
  - Use strict mode in TypeScript for better type safety.

  Syntax and Formatting
  - Use the "function" keyword for pure functions.
  - Avoid unnecessary curly braces in conditionals; use concise syntax for simple statements.
  - Use declarative JSX.
  - Use Prettier for consistent code formatting.

  UI and Styling
  - Use Expo's built-in components for common UI patterns and layouts.
  - Implement responsive design with Flexbox and Expo's useWindowDimensions for screen size adjustments.
  - Use styled-components or Tailwind CSS for component styling.
  - Implement dark mode support using Expo's useColorScheme.
  - Ensure high accessibility (a11y) standards using ARIA roles and native accessibility props.
  - Leverage react-native-reanimated and react-native-gesture-handler for performant animations and gestures.

  Safe Area Management
  - Use SafeAreaProvider from react-native-safe-area-context to manage safe areas globally in your app.
  - Wrap top-level components with SafeAreaView to handle notches, status bars, and other screen insets on both iOS and Android.
  - Use SafeAreaScrollView for scrollable content to ensure it respects safe area boundaries.
  - Avoid hardcoding padding or margins for safe areas; rely on SafeAreaView and context hooks.

  Performance Optimization
  - Minimize the use of useState and useEffect; prefer context and reducers for state management.
  - Use Expo's AppLoading and SplashScreen for optimized app startup experience.
  - Optimize images: use WebP format where supported, include size data, implement lazy loading with expo-image.
  - Implement code splitting and lazy loading for non-critical components with React's Suspense and dynamic imports.
  - Profile and monitor performance using React Native's built-in tools and Expo's debugging features.
  - Avoid unnecessary re-renders by memoizing components and using useMemo and useCallback hooks appropriately.

  Navigation
  - Use react-navigation for routing and navigation; follow its best practices for stack, tab, and drawer navigators.
  - Leverage deep linking and universal links for better user engagement and navigation flow.
  - Use dynamic routes with expo-router for better navigation handling.

  State Management
  - Use React Context and useReducer for managing global state.
  - Leverage react-query for data fetching and caching; avoid excessive API calls.
  - For complex state management, consider using Zustand or Redux Toolkit.
  - Handle URL search parameters using libraries like expo-linking.

  Error Handling and Validation
  - Use Zod for runtime validation and error handling.
  - Implement proper error logging using Sentry or a similar service.
  - Prioritize error handling and edge cases:
    - Handle errors at the beginning of functions.
    - Use early returns for error conditions to avoid deeply nested if statements.
    - Avoid unnecessary else statements; use if-return pattern instead.
    - Implement global error boundaries to catch and handle unexpected errors.
  - Use expo-error-reporter for logging and reporting errors in production.

  Testing
  - Write unit tests using Jest and React Native Testing Library.
  - Implement integration tests for critical user flows using Detox.
  - Use Expo's testing tools for running tests in different environments.
  - Consider snapshot testing for components to ensure UI consistency.

  Security
  - Sanitize user inputs to prevent XSS attacks.
  - Use react-native-encrypted-storage for secure storage of sensitive data.
  - Ensure secure communication with APIs using HTTPS and proper authentication.
  - Use Expo's Security guidelines to protect your app: https://docs.expo.dev/guides/security/

  Internationalization (i18n)
  - Use react-native-i18n or expo-localization for internationalization and localization.
  - Support multiple languages and RTL layouts.
  - Ensure text scaling and font adjustments for accessibility.

  Key Conventions
  1. Rely on Expo's managed workflow for streamlined development and deployment.
  2. Prioritize Mobile Web Vitals (Load Time, Jank, and Responsiveness).
  3. Use expo-constants for managing environment variables and configuration.
  4. Use expo-permissions to handle device permissions gracefully.
  5. Implement expo-updates for over-the-air (OTA) updates.
  6. Follow Expo's best practices for app deployment and publishing: https://docs.expo.dev/distribution/introduction/
  7. Ensure compatibility with iOS and Android by testing extensively on both platforms.

  API Documentation
  - Use Expo's official documentation for setting up and configuring your projects: https://docs.expo.dev/

  Refer to Expo's documentation for detailed information on Views, Blueprints, and Extensions for best practices.
    `,
  },
  {
    title: "Expo React Native JavaScript Best Practices",
    tags: ["Expo", "React Native", "JavaScript"],
    libs: [
      "expo-router",
      "react-navigation",
      "react-native-gesture-handler",
      "react-native-reanimated",
      "react-native-responsive-screen",
      "react-native-fast-image",
    ],
    slug: "expo-react-native-javascript-best-practices",
    content: `

  You are an expert in JavaScript, React Native, Expo, and Mobile UI development.
  
  Code Style and Structure:
  - Write Clean, Readable Code: Ensure your code is easy to read and understand. Use descriptive names for variables and functions.
  - Use Functional Components: Prefer functional components with hooks (useState, useEffect, etc.) over class components.
  - Component Modularity: Break down components into smaller, reusable pieces. Keep components focused on a single responsibility.
  - Organize Files by Feature: Group related components, hooks, and styles into feature-based directories (e.g., user-profile, chat-screen).

  Naming Conventions:
  - Variables and Functions: Use camelCase for variables and functions (e.g., isFetchingData, handleUserInput).
  - Components: Use PascalCase for component names (e.g., UserProfile, ChatScreen).
  - Directories: Use lowercase and hyphenated names for directories (e.g., user-profile, chat-screen).

  JavaScript Usage:
  - Avoid Global Variables: Minimize the use of global variables to prevent unintended side effects.
  - Use ES6+ Features: Leverage ES6+ features like arrow functions, destructuring, and template literals to write concise code.
  - PropTypes: Use PropTypes for type checking in components if you're not using TypeScript.

  Performance Optimization:
  - Optimize State Management: Avoid unnecessary state updates and use local state only when needed.
  - Memoization: Use React.memo() for functional components to prevent unnecessary re-renders.
  - FlatList Optimization: Optimize FlatList with props like removeClippedSubviews, maxToRenderPerBatch, and windowSize.
  - Avoid Anonymous Functions: Refrain from using anonymous functions in renderItem or event handlers to prevent re-renders.

  UI and Styling:
  - Consistent Styling: Use StyleSheet.create() for consistent styling or Styled Components for dynamic styles.
  - Responsive Design: Ensure your design adapts to various screen sizes and orientations. Consider using responsive units and libraries like react-native-responsive-screen.
  - Optimize Image Handling: Use optimized image libraries like react-native-fast-image to handle images efficiently.

  Best Practices:
  - Follow React Native's Threading Model: Be aware of how React Native handles threading to ensure smooth UI performance.
  - Use Expo Tools: Utilize Expo's EAS Build and Updates for continuous deployment and Over-The-Air (OTA) updates.
  - Expo Router: Use Expo Router for file-based routing in your React Native app. It provides native navigation, deep linking, and works across Android, iOS, and web. Refer to the official documentation for setup and usage: https://docs.expo.dev/router/introduction/
    `,
  },
];
