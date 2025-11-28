import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  Box,
  Typography,
  IconButton,
  Tooltip,
  Divider,
  Stack,
} from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import DownloadIcon from '@mui/icons-material/Download';
import CloseIcon from '@mui/icons-material/Close';

type Props = {
  open: boolean;
  onClose: () => void;
  template?: {
    id: string;
    name: string;
    thumbnail: string;
    description?: string;
    sampleHtml?: string; // optional: HTML preview for richer preview
  };
  onUse?: (id: string) => void;
};

export default function TemplatePreview({ open, onClose, template, onUse }: Props) {
  if (!template) return null;
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="lg" PaperProps={{ sx: { borderRadius: 2 } }}>
      <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 800 }}>{template.name}</Typography>
          {template.description && <Typography variant="caption" color="text.secondary">{template.description}</Typography>}
        </Box>

        <Stack direction="row" spacing={1} alignItems="center">
          <Tooltip title="Open image in new tab">
            <IconButton size="small" onClick={() => window.open(template.thumbnail, '_blank')}>
              <OpenInNewIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Download image">
            <IconButton size="small" onClick={() => {
              const a = document.createElement('a');
              a.href = template.thumbnail;
              a.download = `${template.id}.png`;
              document.body.appendChild(a);
              a.click();
              a.remove();
            }}>
              <DownloadIcon />
            </IconButton>
          </Tooltip>

          <IconButton size="small" onClick={onClose}><CloseIcon /></IconButton>
        </Stack>
      </DialogTitle>

      <Divider />

      <DialogContent sx={{ py: 3 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '2fr 360px' }, gap: 3 }}>
          <Box sx={{ width: '100%' }}>
            {/* Large visual preview with frame */}
            <Box sx={{ borderRadius: 2, overflow: 'hidden', boxShadow: 6 }}>
              <Box component="img" src={template.thumbnail} alt={template.name} sx={{ width: '100%', height: { xs: 300, md: 520 }, objectFit: 'cover', display: 'block' }} />
            </Box>

            {/* Optional HTML sample below the image for richer preview */}
            {template.sampleHtml && (
              <Box sx={{ mt: 2, borderRadius: 1, border: '1px solid rgba(0,0,0,0.06)', overflow: 'auto', maxHeight: 200, p: 2 }} dangerouslySetInnerHTML={{ __html: template.sampleHtml }} />
            )}
          </Box>

          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 1 }}>Template details</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>{template.description}</Typography>

            <Divider sx={{ my: 2 }} />

            <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 1 }}>Actions</Typography>
            <Stack spacing={1}>
              <Button variant="contained" size="large" onClick={() => onUse?.(template.id)}>Use this template</Button>
              <Button variant="outlined" onClick={() => window.open(template.thumbnail, '_blank')}>Open full image</Button>
              <Button onClick={onClose}>Close</Button>
            </Stack>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
