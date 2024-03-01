import { createContext, useState, useMemo } from "react";
import { createTheme, PaletteColor,
  SimplePaletteColorOptions } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import { PaletteMode } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    myColor: PaletteColor;
    bg: PaletteColor;
  }

  interface PaletteOptions {
    myColor: SimplePaletteColorOptions;
  }
}

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
        myColor: {
          main: "#F6F9FC"
        },

        bg: {
          main: "#F6F6F6"
        },


          neutral: {
            main: "#64748B",
          },

          favColor: {
            main: grey[300],
          },
        }
      : {
          myColor: {
            main: "#252b32"
          },

          bg: {
            main: "#1D2021",
          },

          neutral: {
            main: "#64748B",
          },

          favColor: {
            main: grey[800],
          },
        }),
  },
});

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState<PaletteMode>(
    localStorage.getItem("mode") ? localStorage.getItem("mode") as PaletteMode : "light"
  );

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
      },
    }),
    [],
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return [theme, colorMode];
};