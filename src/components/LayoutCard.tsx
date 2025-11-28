import React from "react";
import {
  Card,
  CardContent,
  CardActionArea,
  Typography,
  Box,
  Button,
  Chip,
  Stack,
} from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import LaunchIcon from '@mui/icons-material/Launch';
import { motion } from "framer-motion";

export type LayoutCardProps = {
  id: string;
  name: string;
  description?: string;
  thumbnail: string; // image URL or base64
  onPreview: (id: string) => void;
  onUse: (id: string) => void;
};

export default function LayoutCard({
  id,
  name,
  description,
  thumbnail,
  onPreview,
  onUse,
}: LayoutCardProps) {
  return (
    <motion.div whileHover={{ translateY: -6 }} style={{ height: "100%" }}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          borderRadius: 3,
          overflow: "hidden",
          boxShadow: 1,
          transition: 'box-shadow 180ms, transform 180ms',
          '&:hover': { boxShadow: 6 }
        }}
        elevation={2}
      >
        <CardActionArea
          sx={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "stretch", textAlign: 'left' }}
          onClick={() => onPreview(id)}
        >
          <Box sx={{ position: 'relative' }}>
            <Box
              sx={{
                height: { xs: 160, sm: 180, md: 200 },
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.06), rgba(0,0,0,0.06)), url(${thumbnail})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            <Box sx={{ position: 'absolute', top: 12, left: 12 }}>
              {/* Example badge - could be conditional */}
              {id === 'layout-2' && <Chip label="Popular" size="small" color="secondary" sx={{ fontWeight: 700 }} />}
            </Box>

            <Box sx={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end', p: 2 }}>
              <Box sx={{ bgcolor: 'rgba(0,0,0,0.45)', color: '#fff', px: 1.5, py: 0.5, borderRadius: 1, backdropFilter: 'blur(4px)' }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>{name}</Typography>
                <Typography variant="caption" sx={{ opacity: 0.9 }}>{description}</Typography>
              </Box>
            </Box>
          </Box>

          <CardContent sx={{ pt: 2 }}>
            <Typography variant="body2" color="text.secondary" noWrap>
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>

        <Box sx={{ p: 2, pt: 0 }}>
          <Stack direction="row" spacing={1}>
            <Button
              variant="outlined"
              size="small"
              startIcon={<VisibilityIcon />}
              onClick={(e) => { e.stopPropagation(); onPreview(id); }}
              sx={{ flex: 1 }}
            >
              Preview
            </Button>

            <Button
              variant="contained"
              size="small"
              endIcon={<LaunchIcon />}
              onClick={(e) => { e.stopPropagation(); onUse(id); }}
              sx={{ flex: 1 }}
            >
              Use
            </Button>
          </Stack>
        </Box>
      </Card>
    </motion.div>
  );
}
