import {
  Box,
  Button,
  FormControl,
  Link,
  Paper,
  TextField,
  Theme,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ThemeSwitcher from "../components/ThemeSwitcher";

const Registration = () => {
  return (
    <>
      <Box
        component="section"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: 3,
            pt: 4,
          }}
        >
          <Link
            component={RouterLink}
            to="/authorization"
            sx={{
              position: "absolute",
              right: "10px",
              top: "10px",
              textDecoration: "none",
            }}
          >
            <Typography
              component="span"
              sx={(theme: Theme) => ({
                color: theme.textLinkColor,
                fontFamily: "Plus Jakarta Sans, sans-serif",
              })}
            >
              Sign In
            </Typography>
          </Link>
          <Typography
            component="h1"
            variant="h1"
            sx={{ textAlign: "center", mb: 2 }}
          >
            Registration
          </Typography>
          <FormControl
            component="form"
            sx={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <TextField placeholder="First Name" required type="text" />
            <TextField placeholder="Second Name" required type="text" />
            <TextField placeholder="E-mail" required type="email" />
            <TextField placeholder="Password" required type="password" />
            <TextField placeholder="Repeat password" required type="password" />

            <Button variant="primary-l">Sign Up</Button>
          </FormControl>
        </Paper>
      </Box>
      <ThemeSwitcher />
    </>
  );
};

export default Registration;
