import {
  Box,
  Button,
  Paper,
  Typography,
  FormControl,
  TextField,
  Link,
  type Theme,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Auth = () => {
  return (
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
          to="/registration"
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
              color: theme.vars.palette.textLinkColor,
              fontFamily: "Plus Jakarta Sans, sans-serif",
            })}
          >
            Sign Up
          </Typography>
        </Link>
        <Typography
          component="h1"
          variant="h1"
          sx={{ textAlign: "center", mb: 2 }}
        >
          Authorization
        </Typography>
        <FormControl
          component="form"
          action=""
          sx={{ display: "flex", flexDirection: "column", gap: "15px" }}
        >
          <TextField placeholder="E-mail" required type="email" />
          <TextField placeholder="Password" required type="password" />

          <Button variant="primary-l">Sign In</Button>
        </FormControl>
      </Paper>
    </Box>
  );
};

export default Auth;
