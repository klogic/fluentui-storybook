import { initializeIcons } from "@fluentui/font-icons-mdl2";
import { ThemeProvider } from "@fluentui/react";
import { FluentProvider } from "@fluentui/react-components";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react";
import { v8Theme, v9DarkTheme, v9LightTheme } from "./theme";
import "./v8Global.css";

initializeIcons();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeFromJSXProvider({
      themes: {
        light: v8Theme,
      },
      defaultTheme: "light",
      Provider: ThemeProvider,
    }),
    withThemeFromJSXProvider({
      themes: {
        light: v9LightTheme,
        dark: v9DarkTheme,
      },
      defaultTheme: "light",
      Provider: FluentProvider,
    }),
  ],
};

export default preview;
