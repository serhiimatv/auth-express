import { SpeedDial, useColorScheme } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const ThemeSwitcher = () => {
  const { mode, setMode } = useColorScheme();

  return (
    <SpeedDial
      ariaLabel="Theme switcher"
      sx={{
        position: "absolute",
        bottom: 16,
        right: 16,
      }}
      icon={
        mode === "dark" ? (
          <LightModeIcon sx={{ fill: "white" }} />
        ) : (
          <DarkModeIcon sx={{ fill: "white" }} />
        )
      }
      onClick={() => setMode(mode === "light" ? "dark" : "light")}
    ></SpeedDial>
  );
};

export default ThemeSwitcher;
