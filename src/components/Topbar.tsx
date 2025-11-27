import { AppBar, Toolbar, Typography, Avatar, Box } from "@mui/material";

export default function Topbar() {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: "#FFFFFF",
        borderBottom: "1px solid #E5E5E5",
        height: "64px",
        // use left instead of ml and keep width responsive
        left: { md: "240px", xs: 0 },
        width: { xs: "100%", md: "calc(100% - 240px)" },
        boxSizing: "border-box",
        zIndex: (theme) => theme.zIndex.appBar,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", minHeight: "64px" }}>
        <Typography variant="h6" fontWeight={600} color="#333">
          Dashboard
        </Typography>

        <Box>
          <Avatar sx={{ bgcolor: "#4A4FF1" }}>U</Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
