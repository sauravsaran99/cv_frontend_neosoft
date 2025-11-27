import {
  Box,
  Button,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";
import AuthLayout from "../../layouts/AuthLayout";
import GoogleLoginButton from "../../components/SocialGoogleButton";

export default function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const submit = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/register`,
        form
      );
      alert("Registration successful");
      window.location.href = "/login";
    } catch (err: any) {
      alert(err?.response?.data?.message || "Error occurred");
    }
  };

  return (
    <AuthLayout title="Create an Account">
      <Box>
        <TextField
          label="Username"
          fullWidth
          margin="normal"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <TextField
          label="Phone"
          fullWidth
          margin="normal"
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        <TextField
          type="password"
          label="Password"
          fullWidth
          margin="normal"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
          onClick={submit}
        >
          Register
        </Button>

        <Divider sx={{ my: 3 }}>OR</Divider>

        <GoogleLoginButton />

        <Typography
          variant="body2"
          textAlign="center"
          mt={3}
          sx={{ cursor: "pointer" }}
          onClick={() => (window.location.href = "/login")}
        >
          Already have an account? <b>Login</b>
        </Typography>
      </Box>
    </AuthLayout>
  );
}
