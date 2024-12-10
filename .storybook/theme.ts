import { IPalette, PartialTheme as V8PartialTheme } from "@fluentui/react";
import {
  BrandVariants,
  createDarkTheme,
  createLightTheme,
  Theme,
  tokens as v9Tokens,
} from "@fluentui/react-components";

const customV8Palette = {
  errorBackgroundDisabled: "#bd3f45",
  errorBackgroundHover: "#982329",
  errorBackgroundPressed: "#8b2025",
  redLight: "#fbeaec",
};

const v8Palette: Partial<IPalette> & typeof customV8Palette = {
  themePrimary: "#004e9e",
  themeLighterAlt: "#f1f6fb",
  themeLighter: "#c9dcef",
  themeLight: "#9ec0e2",
  themeTertiary: "#4f8ac5",
  themeSecondary: "#145faa",
  themeDarkAlt: "#00478e",
  themeDark: "#003c78",
  themeDarker: "#002c59",
  neutralLighterAlt: "#faf9f8",
  neutralLighter: "#f3f2f1",
  neutralLight: "#edebe9",
  neutralQuaternaryAlt: "#e1dfdd",
  neutralQuaternary: "#d0d0d0",
  neutralTertiaryAlt: "#c8c6c4",
  neutralTertiary: "#c6c6c6",
  neutralSecondary: "#8e8e8e",
  neutralPrimaryAlt: "#595959",
  neutralPrimary: "#424242",
  neutralDark: "#323232",
  black: "#252525",
  white: "#ffffff",
  ...customV8Palette,
};

export type AppPalette = typeof v8Palette;

export const v8Theme: V8PartialTheme = {
  defaultFontStyle: {
    fontFamily: "Open Sans, Sans-Serif",
    fontSize: 16,
    fontWeight: 300,
    lineHeight: "1.5em",
  },
  fonts: {
    small: {
      fontSize: "0.75rem",
    },
    medium: {
      fontSize: "1rem",
    },
    large: {
      fontSize: "1.375rem",
    },
    xLarge: {
      fontSize: "1.5625rem",
    },
    xxLarge: {
      fontSize: "1.875rem",
    },
  },
  palette: v8Palette,
  semanticColors: {
    listText: "#003c78",
  },
};

/**
 * Die Brand-Farben wurden mithilfe der folgenden Seite generiert:
 *
 * Key color value: #004E9E (themePrimary)
 *
 * {@link https://react.fluentui.dev/?path=/docs/theme-theme-designer Fluent Theme Designer}
 *
 */
const v9BrandColors: BrandVariants = {
  10: "#020306",
  20: "#111727",
  30: "#152545",
  40: "#15315F",
  50: "#113D79",
  60: "#064A95",
  70: "#2356A4",
  80: "#3E63AC",
  90: "#5371B4",
  100: "#677FBB",
  110: "#798DC3",
  120: "#8B9BCB",
  130: "#9DAAD3",
  140: "#AFB8DB",
  150: "#C0C7E3",
  160: "#D2D7EB",
};

const v9CustomColors = {
  colorErrorBackgroundDisabled: "#bd3f45",
  colorErrorBackgroundHover: "#982329",
  colorErrorBackgroundPressed: "#8b2025",

  colorRed: "#dc3545",
  colorRedLight: "#fbeaec",
  colorRedDark: "#dc3545",
  colorYellow: "#ffc107",
  colorYellowLight: "#fff8e6",
  colorYellowDark: "#ffc10",
  colorOrange: "#fd7e14",
  colorGreen: "#28A745",
};

type V9CustomColorTokens = typeof v9CustomColors;

export type V9CustomTheme = Theme & V9CustomColorTokens;

export const tokens: Record<keyof V9CustomTheme, string> = {
  ...v9Tokens,
  colorErrorBackgroundDisabled: `var(--colorErrorBackgroundDisabled)`,
  colorErrorBackgroundHover: `var(--colorErrorBackgroundHover)`,
  colorErrorBackgroundPressed: `var(--colorErrorBackgroundPressed)`,
  colorRed: `var(--colorRed)`,
  colorRedLight: `var(--colorRedLight)`,
  colorRedDark: `var(--colorRedDark)`,
  colorYellow: `var(--colorYellow)`,
  colorYellowLight: `var(--colorYellowLight)`,
  colorYellowDark: `var(--colorYellowDark)`,
  colorOrange: `var(--colorOrange)`,
  colorGreen: `var(--colorGreen)`,
};

export const v9LightTheme: V9CustomTheme = {
  ...createLightTheme(v9BrandColors),
  ...v9CustomColors,
};

export const v9DarkTheme: V9CustomTheme = {
  ...createDarkTheme(v9BrandColors),
  ...v9CustomColors,
};
