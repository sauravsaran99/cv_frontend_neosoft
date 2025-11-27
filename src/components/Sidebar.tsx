import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  IconButton,
  Drawer,
  useMediaQuery
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DescriptionIcon from "@mui/icons-material/Description";
import MenuIcon from "@mui/icons-material/Menu";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useState, useEffect } from "react";

export default function Sidebar() {
  const isMobile = useMediaQuery("(max-width:900px)");
  const [open, setOpen] = useState(false);

  // open sidebar by default on desktop
  useEffect(() => {
    setOpen(!isMobile);
  }, [isMobile]);

  const SidebarContent = (
    <Box
      sx={{
        width: 240,
        height: "100vh",
        borderRight: "1px solid #E5E5E5",
        background: "#fff",
        p: 2,
        boxSizing: "border-box",
      }}
    >
      <Typography variant="h6" fontWeight={700} textAlign="center" mb={3}>
        CV Builder
      </Typography>

      <List>
        <ListItemButton onClick={() => window.location.href = "/dashboard"}>
          <ListItemIcon><DashboardIcon /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>

        <ListItemButton onClick={() => window.location.href = "/layout"}>
          <ListItemIcon><DescriptionIcon /></ListItemIcon>
          <ListItemText primary="Templates" />
        </ListItemButton>

        <ListItemButton
          sx={{ mt: 4, color: "red" }}
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/login";
          }}
        >
          <ListItemIcon sx={{ color: "red" }}><ExitToAppIcon /></ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
      </List>
    </Box>
  );

  return (
    <Box>
      {isMobile ? (
        <>
          <IconButton
            sx={{ position: "fixed", top: 10, left: 10, zIndex: 2000 }}
            onClick={() => setOpen(true)}
            aria-label="open menu"
          >
            <MenuIcon />
          </IconButton>

          <Drawer
            open={open}
            onClose={() => setOpen(false)}
            ModalProps={{ keepMounted: true }}
            PaperProps={{ sx: { width: 240 } }}
          >
            {SidebarContent}
          </Drawer>
        </>
      ) : (
        // fixed sidebar for desktop — use left:0 so Topbar left offset works
        <Box sx={{ position: "fixed", left: 0, top: 0, zIndex: 1200 }}>
          {SidebarContent}
        </Box>
      )}
    </Box>
  );
}
