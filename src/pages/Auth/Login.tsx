import {
  Box,
  Button,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";
import GoogleLoginButton from "../../components/SocialGoogleButton";
import AuthLayout from "../../layouts/AuthLayout";

export default function Login() {
  const [form, setForm] = useState({ identifier: "", password: "" });

  const submit = async () => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        form
      );
      localStorage.setItem("token", res.data.token);
      window.location.href = "/dashboard";
    } catch (err: any) {
      alert(err?.response?.data?.message || "Login failed");
    }
  };

  return (
    <AuthLayout title="Welcome Back">
      <Box>
        <TextField
          label="Email or Username"
          fullWidth
          margin="normal"
          value={form.identifier}
          onChange={(e) => setForm({ ...form, identifier: e.target.value })}
        />

        <TextField
          type="password"
          label="Password"
          fullWidth
          margin="normal"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
          onClick={submit}
        >
          Login
        </Button>

        <Divider sx={{ my: 3 }}>OR</Divider>

        <GoogleLoginButton />

        <Typography
          variant="body2"
          textAlign="center"
          mt={3}
          sx={{ cursor: "pointer" }}
          onClick={() => (window.location.href = "/register")}
        >
          Don't have an account? <b>Register</b>
        </Typography>
      </Box>
    </AuthLayout>
  );
}
