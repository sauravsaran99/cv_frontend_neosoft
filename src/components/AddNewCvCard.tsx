import { Card, CardContent, Box, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { motion } from "framer-motion";

export default function AddNewCvCard() {
  return (
    <motion.div
      whileHover={{ translateY: -6 }}
      transition={{ duration: 0.2 }}
      onClick={() => (window.location.href = "/layout")}
    >
      <Card
        sx={{
          height: '260px',
          borderRadius: 3,
          cursor: 'pointer',
          border: '1px dashed rgba(60,60,60,0.08)',
          background: 'linear-gradient(180deg, #FFFFFF 0%, #FBFBFF 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 1,
          transition: 'box-shadow 180ms, transform 180ms',
          '&:hover': { boxShadow: 6 }
        }}
      >
        <CardContent sx={{ textAlign: 'center' }}>
          <Box sx={{ width: 64, height: 64, borderRadius: 2, bgcolor: 'primary.main', color: 'primary.contrastText', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
            <AddIcon sx={{ fontSize: 30 }} />
          </Box>
          <Typography mt={1} fontWeight={700} sx={{ letterSpacing: '0.2px' }}>
            Create New CV
          </Typography>
          <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 0.5 }}>
            Start from a template or import your resume
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
}
