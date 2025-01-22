# createTheme を操る

```tsx
import { createTheme, useMediaQuery } from "@mui/material";

declare module "@mui/material/styles" {
  interface Theme {
    customColor: {
      primary: string;
      secondary: string;
    };
    customSpacing: {
      cardSpacing: (factor: number) => number;
      sectionMargin: (factor: number) => number;
    };
  }

  // オプションで createTheme の引数型も拡張
  interface ThemeOptions {
    customColor?: {
      primary?: string;
      secondary?: string;
    };
    customSpacing?: {
      cardSpacing?: (factor: number) => number;
      sectionMargin?: (factor: number) => number;
    };
  }
}

const customSpacing = (base: number) => (factor: number) => factor * base;

export const theme = createTheme({
  palette: { primary: { main: `#333` } },
  customColor: { primary: `green` },
  spacing: 4,
  customSpacing: {
    cardSpacing: customSpacing(12),
    sectionMargin: customSpacing(16),
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768, // sp版
      lg: 850, // 折り返さないくらいの画角
      xl: 1432, // figmaサイズに合わせてる
    },
  },
});
export const useIsMobile = () => {
  return useMediaQuery(theme.breakpoints.up("md"));
};
const style = styled("div")(({ theme }) => ({
  color: theme.customColor.primary,
}));

// const StyledBox = styled(Box)(({ theme }) => ({
//     padding: theme.customSpacing.cardSpacing(3), // 値は 36 (12 * 3)
//     margin: theme.customSpacing.sectionMargin(2), // 値は 32 (16 * 2)
//   }));
```
