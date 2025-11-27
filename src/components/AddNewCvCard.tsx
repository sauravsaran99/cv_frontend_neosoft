import { Card, CardContent, Box, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { motion } from "framer-motion";

export default function AddNewCvCard() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      onClick={() => window.location.href = "/layout"}
    >
      <Card
        sx={{
          height: "260px",
          borderRadius: 4,
          cursor: "pointer",
          border: "2px dashed #D0D0D0",
          background: "#FBFBFB",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CardContent sx={{ textAlign: "center" }}>
          <AddIcon sx={{ fontSize: 50, color: "#4A4FF1" }} />
          <Typography mt={1} fontWeight={600}>
            Create New CV
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
}
